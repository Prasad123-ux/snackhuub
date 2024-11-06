
import { FaLocationDot } from "react-icons/fa6";
import { FcRating } from 'react-icons/fc'
import { FaRupeeSign } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "../../Styles/productDetail.css"
import { useEffect, useState } from "react";
import GetOrder from "./GetOrder";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
 import { FaUserCircle } from "react-icons/fa"; 
 import { useToast } from "@chakra-ui/react"; 
 import axios from "axios";
import { useSelector } from "react-redux";




export default function ProductDetail() {


    const { id }= useParams();
    const [ratings, setRatings]= useState([])
    const [product, setProduct]= useState([null])
    const [qty, setQty]= useState(1)
    const [tokenItem, setItem]= useState()
    const navigate = useNavigate() 
    const toast= useToast() 
    
    const [loader,setLoader]= useState(false) 
    const foodData= useSelector((state)=>state.foods.allFoods)     
    const token =useSelector((state)=>state.foods.token)

     



  




     useEffect(()=>{ 
      window.scrollTo(0,0)
  

  const findReview= async()=>{
    try{
      const response= await fetch(' http://localhost:5000/api/findReview',{
        method:"POST",
        body:JSON.stringify({id}),
        headers:{
          "Content-type":"application/json"
        }
      });
      if(!response.ok){
        throw new Error(response.statusText)
         
      }
const data= await response.json();
console.log(data.message)
    
 setRatings(data.message)
    }catch(err){
      console.error(err)

    }
  }

  findReview()
}, [id])



   


    const addToCart = async () => {
      if (token === null) {
        addToast("Please login Yourself!", "warning");
      } else {
        setLoader(true);
        const data = { id, size:"full", qty, token };
        try {
          const response = await axios.post("http://localhost:5000/api/addCart", { data ,token});
          
          if (response.status !== 200) {
            addToast(response.data.message, "error");
          } else {
            addToast(response.data.message, "success");
          }
        } catch (err) { 
          
          addToast(err.response.data.message, "error");
        } finally {
          setLoader(false);
        }
      }
    };
  
    useEffect(()=>{ 
      const targetItem=foodData.filter((item)=>item._id===id) 
       console.log(targetItem[0])
      setProduct(targetItem[0])
    
    },[foodData,id])

   

    const getSummaryOfProduct=(id)=>{ 
      console.log(id)
      navigate(`/summary/${id}`)
    }
    
  
    const addToast=(title,status)=>{
      toast({title: title,
        
        status: status,
        duration: 2000,
        isClosable: true})
    
    }
    
    
    
  return (  

    <>
    {product && product.product_images  ?
    <div className='container-fluid    detail'> 
      
<div className='mx-auto   main row'> 
<img src={product.product_images.image1} className="main-img shadow rounded-5  d-none d-md-block col-12 col-md-8 " alt=""/>
<div className='col-12  col-md-4 '>
    <div className='   d-flex '> 
<img src={product.product_images.image2} className="rounded side-img1 shadow rounded-5   " alt="..."/>
<img src={product.product_images.image3} className="rounded float-end shadow rounded-5 side-img2" alt="..."/>
</div>
<img src={product.product_images.image4} className="rounded float-end shadow rounded-5  w-100 side-img3  " alt="..."/>

</div>


</div>
<div className=' product-detail row'>
    <h1 className='col-6 product-name'>{product.product_name}</h1> 
    <span className=' col-6 mt-2  rating'><span className='bg-success p-1 rounded text-white  fw-bolder'> <FcRating className="d-inline"/>{product.product_rating}</span> <b className="rating-numbers"> 4,500 Delivery ratings</b> </span>
    <span className='category-name '>{product.product_category}/{product.product_flavour} </span>
    <span className='col-12 location'> <FaLocationDot  className="d-inline"/> {product.shop_address}</span>
    <span className='col-12 timing'>Timing :<b> 07:00   to 23:00</b></span> 
    <span className='col-12 delivery'>Delivery in  :<b>{product.product_deliveryTime} min</b></span> 
    <span className='description col-12'> {product.product_description}</span>

     <h4 className="col-md-3 col-12 price" > Price:<FaRupeeSign className="d-inline" />{ qty>1 ? product.product_price*qty : product.product_price }</h4>
     <div className="col-md-4 col-12 quantity "> 
    Quantity:
    
{
     <select className='m-2 h-100 ' size="size" onChange={(e)=>{setQty(parseInt(e.target.value))}}>{Array.from(Array(6), (e, i)=>{
        return (
            <option key={i+1} value={i+1}>{i+1}</option>
        )
    })}</select>
           
 }</div>
  {token  && token !== 'undefined' ?
     <button className="col-md-2  col-5 cart-button   btn btn-primary text-white rounded" onClick={()=>{addToCart(product._id)}}>Add to Cart</button>: <button className=" col-md-2 col-5 cart-button  btn btn-danger text-white fw-bold rounded  " data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal1"  >Add to cart</button> 

      }   

               
<div className="modal fade " id="exampleModal1"  aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Please Log In !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">Please Log In Yourself</span>
      {/* <h6> For more update check on order</h6> */}
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
  </div>


  
     {/* <Link className="col-md-2  col-5 btn  btn-success rounded ms-2 text-white fw-bold mt-3" data-bs-target="#myModal" type="link"  data-bs-toggle="modal" data-dismiss="modal" to="/summary" >Order Now</Link> */}
     <button className="col-md-2  col-5 btn  btn-success rounded ms-2 text-white fw-bold  cart-button"  onClick={()=>{getSummaryOfProduct(id)}}>Order Now</button>  

     <div className="accordion  inner-detail col-12 " id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <span  className=" accordion-button   fw-bold rounded mt-3" type="link-info" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                More detail...
                </span>        
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body  row"></div> 
             



                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold"> <span className="d-block  d-md-inline">Ingredients: </span><span className="fw-normal text-secondary">{product.product_ingredients}</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold"> <span className="d-block  d-md-inline">Refund Policy:</span> <span className="fw-normal text-secondary">{product.product_refundPolicy  || "Non Refundable"}</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold">  <span className="d-block  d-md-inline"> Availability:</span> <span className="fw-normal text-secondary">{product.product_availability || "Yes"}</span></div>
                <div className="pb-2 ps-3  col-12 col-md-7 fw-bold">  <span className="d-block  d-md-inline">  Type:</span>  <span className="fw-normal text-secondary"> {(product.product_type) || "Veg"  }</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold">  <span className="d-block  d-md-inline">   Flavour : </span><span className="fw-normal text-secondary">{product.product_flavour}</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold">    <span className="d-block  d-md-inline">Weight: </span> <span className="fw-normal text-secondary">{product.product_weight}gm</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold"> <span className="d-block  d-md-inline">Storage Warning: </span><span className="fw-normal text-secondary">{product.product_storage}</span></div>
                <div className="pb-2 ps-3 col-12 col-md-7 fw-bold">  <span className="d-block  d-md-inline">Additional Detail: </span>  <span className="fw-normal text-secondary">{product.product_additional_detail ||  product.product_description}</span></div>




            </div>
        </div>

     </div>
     {/*  */}
     <div className="col-12 contact">
       <b> Contact us</b> 
        <span className="d-block" ><FaPhoneAlt  className="d-inline"/>:   {product.product_email}</span>
    <span><IoIosMail  className="d-inline"/> {product.product_mobile}</span>

     </div>
     <hr className="mt-5"></hr>
     <div className="bg-white shadow">
<div className="heading-rating"> Ratings</div>
    <div className="overflow-scroll scroll" style={{height:"500px"}} >
     { ratings && ratings.length>0   ?(
ratings.map((item, index)=>{
    return <div key={index} className="rounded ratings shadow row mx-auto  mt-5">
      <div className="d-flex  flex-row">
        <span className="fs-1"><FaUserCircle  className="d-inline"/></span>  <span className="user-name d-block fs-6 text-secondary ms-3 mt-3 "> {item.userMail}</span>
        </div>
            <span className=' col-3 mt-2 mx-auto  rating  d-block'><span className='bg-success p-1 rounded text-white  fw-bolder'> <FcRating className="d-inline"/> {item.product_rating}.0</span></span>
            <span className="feedback">{item.product_review}</span>

        

    </div>
   





})

 ):<div  className="  text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xrzowMNJL0cK6ANhsGcBFBMyem9pSHA54w&s" className="d-block w-25 mx-auto" alt="rating"/>  <br></br>
     <h4 className=" text-secondary">Not Rated Yet ! </h4> 
          <span  className="text-secondary"> Be a first to rate this Product !</span></div> }  </div>
     </div>


</div>

    </div>

    
    :"data not found"
    }
    <hr className="mt-5"></hr> 
      <span className="recommended-heading fs-5">Just More For You</span>
    <GetOrder category={product.product_category} className="d-inline"/>

    <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Check Your Detail </h4>
          <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
          <h6>Name: <span   className="text-md-end"></span>  </h6>
          <hr/>
          <h6>Mobile no:           <span>  </span></h6>
          <hr/>
          <h6>Email:        <span> </span>      </h6>
          <hr/>
          <h6>Location:        <span> </span>    </h6>
          <hr/>
          </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer d-flex justify-content-between">
          <button type="button justify-left" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info-update-modal" data-dismiss="modal" >Update Detail </button> 


           <button type="button" className="btn btn-danger close" data-bs-dismiss="modal">Cancel</button> 
          <button type="button" className="btn btn-success " data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal"> Conform order</button>
        </div>
        
      </div>
    </div>
  </div>

  <div className="modal  " id="exampleModal" >
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Order Successfully Placed !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">🎊🎊Thank You! We will deliver your order soon.. 🎉🎉🎉</span>
      <h6> For more update check on order</h6>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <Link   className="btn btn-secondary"  to="/myOrders">Check my order </Link>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">We are waiting...</button>
      </div>
    </div>
  </div>
</div>

    </>

  )
}
