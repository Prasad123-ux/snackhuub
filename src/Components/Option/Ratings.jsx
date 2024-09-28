import Footer from './Footer'
import {Rating} from 'react-simple-star-rating';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FcRating } from 'react-icons/fc'




export default function Ratings() {
const [rating, setRating]= useState(0)
const [rate, setRate]= useState(['Please Rate ! ', ' Very Bad !  👎🏼👎🏼👎🏼','Bad !😔😔😔' ,'Average ! 🙁🙁🙁 ','Good !  ✅✅✅', 'Excellent !👍🏼👍🏼👍🏼'])
const [productData, setProductData]= useState([])
const [review, setReview]= useState()
const { id }= useParams();


const handleRating = (rate) => {
  
  setRating(rate);
};

const token= localStorage.getItem('token')
const handleSubmitReview = async () =>{
  
  try{
  const response=await fetch('https://foodie-backend-f64l.onrender.com/api/submitReview', {
    method:"POST",
    body:JSON.stringify({rating ,review , id, token,}),
    headers:{
      "Content-type":"application/json"
    }
    
  })
  if(!response.ok){
    throw new Error(response.statusText)

  }
  const data= await response.json()
  console.log(data)
  }catch(err){
    console.log(err)
    setRate("")

  }



}



  const fetchProductData = async () => {
      try {
          const response = await fetch('https://foodie-backend-f64l.onrender.com/api/getOrderOnID', {
              method: 'POST',
              body: JSON.stringify({id} ),
              headers: {
                  'Content-type': 'application/json'
              }
          });
          if (!response.ok) {
              
              throw new Error(response.statusText);
          }
          const data = await response.json();
          // console.log(data)
          
          setProductData(data);
          // console.log(data)
      } catch (error) {
          console.error(error);
      }
  };
  useEffect(()=>{
  

  fetchProductData();
  // handleSubmitReview()
  window.scrollTo(0, 0);
  },[])



console.log(productData.length)
console.log(review)

  return (
    <div className='row bg-light w-100 p-3   '>
{ productData.length ===0 ?<button className='btn btn-primary w-25'onClick={fetchProductData} >refresh</button>
:<div className='row bg-light w-100 p-3 mx-auto '> <div className='rate-heading col-12 shadow rounded d-flex justify-content-between flex-column flex-sm-row p-4 '>
        <span className='fs-4 fw-bold '>Ratings and Reviews</span>
        <div className='d-flex justify-content-between flex-sm-column flex-row'>
          <span className='fs-lg-5 fs-6 fw-bold'>{productData.data.product_name ? productData.data.product_name:""}/ {productData.data.product_category ? productData.data.product_category:""} </span> 
        <span className='       d-block'><span className='bg-success  rounded text-white  fw-bolder'> <FcRating/> {productData.data.product_rating ? productData.data.product_rating:""}</span></span>

        </div>
      </div>

       


      
    
      <div className='help col-lg-3 col-md-4 me-1  mt-1 ms-lg-5  ms-0 shadow rounded mt-5  p-4 p-sm-2'>
        <div><span className='fs-5 fw-bold'>What makes a good review</span></div>
        <hr></hr>
        <div><span className='fs-5'>Have you used this product</span><br></br>
        <span className='fs-6 '>Your review should be about your experience with the product.</span>
        </div>
        <hr></hr>
        <div><span className='fs-5'>Why review a product?</span><br></br>
        <span className='fs-6 '>Your valuable feedback will help fellow shoppers decide!</span>
        </div>
        <hr></hr>
        <div><span className='fs-5'>How to review a product?</span><br></br>
        <span className='fs-6 '>Your review should include facts. An honest opinion is always appreciated. If you have an issue with the product or service please contact us from the help centre.</span>
        </div>
      
        
      </div>
    <div className='review col-lg-8 col-md-7  mt-1 mt-5 ms-lg-2  ms-0 '>
      <span className='fs-5'> Rate this Product</span><br></br>



<Rating ratingValue={rating} rateValue={rate} size={30} onClick={handleRating}  className='mt-3' />   <span className=' d-block d-sm-inline ms-5 fs-6 fw-bold mt-3 mt-sm-0'>{rate[rating]}</span> 
<hr></hr>
<div><span className='fs-5'>Review This Product</span> <br></br><textarea   onChange={(e)=>{setReview(e.target.value)}} className='w-100 review-side mt-5 p-5 fs-6 fw-bold' placeholder="Description..."/></div>
<button  className=" btn bg-primary mt-3 fs-6 fw-bolder" onClick={handleSubmitReview}    data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > Submit</button>
    </div>
    <Footer/> </div>
}
{/* <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button> */}



<div className="modal fade " id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Review Submitted !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">🎊🎊Thank You! Your Review has been submitted 🎉🎉🎉</span>
      {/* <h6> For more update check on order</h6> */}
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <Link   className="btn btn-secondary"  to="/orders">Check my order </Link> */}
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">We are waiting...</button>
      </div>
    </div>
  </div>
</div>   
    </div>
  
  )
}
