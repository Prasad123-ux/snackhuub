  
import '../Styles/owner.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Option/Footer';
import { useSelector } from 'react-redux';



export default function Owner() {
  // const token= useSelector((state)=>state.foods.token)
  const [activeIndex, setActiveIndex] = useState(0);
  const token=useSelector((state)=>state.foods.token)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // Array of carousel items
  const carouselItems = [
    {
      imgUrl: 'https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg',
      title: 'Advertise',
      text: 'For every marketing dollar spent, Foodie returns over 8x the investment...'
    },
    {
      imgUrl: 'https://b.zmtcdn.com/merchant-onboarding/be4f70ca22a3b31a84b3cf8ed811f0281600769259.png',
      title: 'Listings',
      text: 'A free app that allows you to manage your Zomato listing directly from your smartphone.'
    },
    {
      imgUrl: 'https://www.zomato.com/partner-with-us/static/media/ZomatoEvent.c3e1f3a8.svg',
      title: 'Events',
      text: 'Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...'
    },
    {
      imgUrl: 'https://b.zmtcdn.com/merchant-onboarding/2c7dd621a502cde6f5051fc6d411b8881600769171.png',
      title: 'Online Ordering',
      text: 'Start taking orders online from millions of users near you and deliver with Zomato....'
    },
    {
      imgUrl:"https://www.zomato.com/partner-with-us/static/media/Hyperpure.25f37214.svg",
      title: 'HyperPure',
      text: 'Supplies fresh and high quality ingredients to restaurant for serving delicious meals....'
    },
    
    // Add more items as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment activeIndex to move to the next slide
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Change slide every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Run effect only once on component mount
  return (
    <>
    
    

    <div className="  w-100 pb-5" style={{backgroundColor:"#f4f4f4"}}>
    <div className="bg-secondary  position-relative"  style={{height:"480px"}}>
      
            <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" className=" w-100 d-block  " style={{ height:"480px", width:"100%", opacity:"0.8" }} alt=""/>

      
        <div className=" position-absolute top-50 start-50 translate-middle w-100 row">
        <div className=" d-md-flex justify-content-around w-100 m-2 col-12  d-sm-none  d-none "> 
        <div >
          <h2 className="text-white fst-italic fw-bold">Foodie</h2>
          <h6 className="fst-italic text-white fw-bold ">for business </h6>
          </div>
           <div className="d-flex justify-content-end"> 
           <span className="text-white fs-5">Advertise </span> 
           <span className="text-white ms-5 fs-5">user</span></div>
          
            </div>
            <div className="d-flex justify-content-center w-100 mt-3  ">
            <div className="text-center text-md-start " >
                <h1 className="text-light   partner ">Partner with Foodie</h1>
            <h1 className="text-white at ">at 0% commission for the first month!</h1> 
            <h5 className="text-white    mt-4 mt-md-0 and ">And get ads worth INR 1500. Valid for new restaurant partners in select cities.</h5>
            {

              token && token !=="undefined" ?
            <Link className="btn btn-primary mt-3" to="/ShopRegister" > Register Your restaurant </Link> :<button className=" btn btn-primary mt-3" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal1"  >Register Your Restaurant</button> 

}
            {  token && token!=='undefined' ?
            <Link className="btn btn-light view-btn mt-3 ms-2"   to="/RegisterProduct" >Add Your Product</Link>:  <button className=" btn btn-light view-btn mt-3 ms-2 " data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal1"  >Add your Product</button> 

}
            <div className="text-white fw-light mt-2">Need help? Contact +91 93-07-17-38-45</div>
            </div>
            </div>

            
            
            
      </div>
     
  </div>  

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




     <div className="  mx-auto  row justify-content-end p-5 pt-4 container mt-2  " style={{backgroundColor:"#ffffff", objectFit:"cover" }}>
      <div className="col-12 mx-auto text-center  ">
        <h3>Get started with online ordering</h3>
        <h6 >Please keep the documents ready for a smooth signup</h6>
      </div >
      <div className=" row  text-center">
      <div className="col-md-6 mt-4 col-sm-12 fw-bold   ">✅FSSAI license Copy  </div>
      <div className="col-md-6 mt-4 col-sm-12 fw-bold  "> ✅PAN Card Copy</div>
      <div className="col-md-6 mt-4 col-sm-12 fw-bold   ">✅Regular GSTIN </div>
      <div className="col-md-6 mt-4 col-sm-12 fw-bold">✅ Bank Account Details</div>
      <div className="col-md-6  mt-4 col-sm-12 fw-bold">✅Your restaurant menu </div>
      <div className="col-md-6 mt-4 col-sm-12 fw-bold"> ✅Dish images for 5 items</div>
     </div>
     
     </div>
       </div> 
       <div className="bg-white text-center container mt-5 "> <span className="text-medium why"> Why should you partner with Foodie?</span>
       <div className="text-center  foodie my-2  ">Foodie enables you to get 60% more revenue, 10x new customers and boost your brand</div> 
       <div className='text-center  foodie my-2'>visibility by providing insights to improve your business. </div></div>


       <div id='carouselExampleAutoplaying mx-auto ' className='carousel slide' data-bs-ride="carousel">
<div className='carousel-inner mx-auto mt-5  d-md-none'>

  <div className='carousel-item active'>
    <div className='bg-white shadow h-100 d-flex justify-content-around mx-auto ' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png" alt="house" style={{height:"30px0", width:"30px"}}/>
      <h4 className='text-primary'>   1000+ cities <h6 style={{color:"gray"}}>in india</h6></h4>
    </div>


  </div>
  <div className='carousel-item '>
    <div className='bg-white shadow h-100 d-flex justify-content-around mx-auto' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/d2bcadb70abdd99811cceda4cc757f5a1600670711.png" alt="house" style={{height:"30px0", width:"30px"}}/>
      <h4 className='text-primary'>   3 Lac+ restaurant<h6 style={{color:"gray"}}>in listing</h6></h4>

    </div>


  </div>
  <div className='carousel-item '>
    <div className='bg-white shadow  h-100 d-flex justify-content-around mx-auto' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png" alt="house" style={{height:"30px0", width:"30px"}}/>
      <h4 className='text-primary'>   5.0 crore + <h6 style={{color:"gray"}}>Monthly orders</h6></h4>

    </div>


  </div>


  
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

       </div>



       <div className='d-md-flex justify-content-between  d-none mt-5'>
       <div className='bg-white shadow h-100 d-flex justify-content-center mx-auto rounded p-3' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png" alt="house" style={{height:"30px", width:"30px"}}/>
      <h4 className='text-primary'>   1000+ cities <h6 style={{color:"gray"}}>in india</h6></h4>
    </div>
    <div className='bg-white shadow h-100 d-flex justify-content-center mx-auto rounded p-3' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/77b29f40bd0fb6c74c78695b07cdee901600670728.png" alt="house" style={{height:"30px", width:"30px"}}/>
      <h4 className='text-primary'>   3 Lac+ restaurant<h6 style={{color:"gray"}}>in listing</h6></h4>

    </div>
    <div className='bg-white shadow  h-100 d-flex justify-content-center mx-auto rounded p-3' style={{width:"280px"}}>
      <img src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png" alt="house" style={{height:"30px", width:"30px"}}/>
      <h4 className='text-primary '>   5.0 crore + <h6 style={{color:"gray"}}>Monthly orders</h6></h4>

    </div>

   
    

       </div>

       <div className='mt-5 '>
        {/* <img src="https://b.zmtcdn.com/merchant-onboarding/f57794be6408563354c463c702ab45b91600672364.png" className=" w-100 d-block"  alt="images"/> */}
        <div className='row w-md-75  w-100 container mx-auto ' >
          <h3 className='text-center mt-5 mb-5'>How it works?</h3>
          <div className='col-md-4 col-12 bg-white d-flex flex-column justify-content-around text-center mt-2' style={{height:"200px"}}>
            <div className=' rounded-circle w-50 h-25 text-center mx-auto ' style={{ backgroundColor:"#FFFCF1"}}>
            <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png"  className='' style={{height:"40px", width:"40px"}} alt=""/>
            </div>
            <h5>Step 1</h5>
            <h6 className='fw-bold'> Create your page on Foodies</h6>
            <h6 style={{color:"gray"}}>Help users discover your place by creating a listing on Zomato</h6>
          </div>
           <div className='col-md-4  col-12 bg-white d-flex flex-column justify-content-around text-center mt-2 ' style={{height:"200px"}}>
            <div className=' rounded-circle w-50 h-25 text-center mx-auto ' style={{ backgroundColor:"#FFF5F6"}}>
            <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png"  className='' style={{height:"40px", width:"40px"}} alt=""/>
            </div>
            <h5>Step 2</h5>
            <h6 className='fw-bold'>Register for online ordering</h6>
            <h6 style={{color:"gray"}}>And deliver orders to millions of customers with ease</h6>
          </div>
          <div className='col-md-4 col-12 bg-white d-flex flex-column justify-content-around text-center  mt-2   'style={{height:"200px"}}>
            <div className=' rounded-circle w-50 h-25 text-center mx-auto ' style={{ backgroundColor:"#FFF9F1"}}>
            <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png"  style={{height:"40px", width:"40px"}} alt=""/>
            </div>
            <h5>Step 3</h5>
            <h6 className='fw-bold'> Start receiving orders online</h6>
            <h6 style={{color:"gray"}}>Manage orders on our partner app, web dashboard or API partners</h6>
          </div>
        </div>

       </div>
       <div className="mt-5 pb-5 pt-1 mx-auto" style={{backgroundColor:"#F5F5F5"}}>
        <div className='already mt-5'>Already have your restaurant listed?</div>
        <div className='search mt-3'>Search here and claim the ownership of your restaurant.</div>
        <div className="form-group d-flex justify-content-center mt-3">
    {/* <label htmlFor="formGroupExampleInput">Example label</label> */}
    <input type="text " className="form-control text-center w-50  fw-bolder " id="formGroupExampleInput" placeholder="Find your Restaurant"/>
  </div>
       </div>
       <div className='mb-5'> 
        <div className='our text-center '>  Our Products</div>
        <div id="carouselExampleSlidesOnly" className="carousel carouse mx-auto  slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <div className="card">
              <img src={item.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text fw-medium">{item.text}</p>
                <a href="/" className="btn btn-primary">Lear More...</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
       </div>
      <div className=' position-relative mt-5 '>
        <img src="https://www.zomato.com/partner-with-us/static/media/startYourJourneyMobile.3b8268b0.png "  alt="this is" className='d-block mx-auto rounded-2 w-50 ' style={{height:"250px"}}/>
        <div className='position-absolute top-50 start-50 translate-middle design  '>
          <div className='start'>Start your journey with Foodie</div>
          <div className='create'>Create your restaurant page and register for online ordering</div>
          <button className='btn btn-primary btn-start  mt-3'> start now</button>
        </div>
      </div>
      <div className='question  '>
        <div className='frequently  text-center'> Frequently asked Question</div>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item mt-5 shadow">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What will Zomato charge me for creating a page on its platform?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-5 shadow">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What all documents are required for registering on online ordering?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Registration for online ordering requires:

a: FSSAI certificate (application no. if FSSAI is not present)

b: PAN Card

c: GST certificate (if applicable)
      </div>
    </div>
  </div>
  <div className="accordion-item mt-5 shadow">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      I have a large fleet of delivery boys, why should I use Foodie’s delivery service?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can use your and Foodie delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-5  shadow">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What happens if the average order value of Foodie orders is very low
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.
      </div>
    </div>
  </div>
</div>

      </div>
      {/* <Footer/> */}
    </>
  )

}
