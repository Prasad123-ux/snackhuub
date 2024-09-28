
import { FaCheck } from "react-icons/fa6";

import { CiDeliveryTruck } from "react-icons/ci";
import { MdAddAlert } from "react-icons/md";
import { TbJewishStarFilled } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { useParams} from "react-router-dom";
import { useEffect} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




export default function Summary() {
  const [summaryProduct, setSummaryProduct]= useState()
   const [quantity, setQuantity]= useState(1)
   const [disabledValue, setDisabledValue]= useState(false)
   const [userDetail, setUserDetail]= useState([])
   const [item, setItem]= useState()
  //  const navigate= useNavigate()

   const [userData, setUserData]= useState({firstName:"", lastName:"", pinCode:"", location:"", city:"", state:"", mobile_no:"", address:""})   
   const [orderPlaced, setOrderPlaced]= useState(false)           
   const { id }= useParams();  

  useEffect(()=>{
    const token= localStorage.getItem('token')
    setItem(token)
  }, [])
  

  const onChange=(e)=>{                   
             
       setUserData({...userData, [e.target.name]:e.target.value}) 
  
      }
      const token=localStorage.getItem('token')
    
      const handleFormSubmit=async (e)=>{
        e.preventDefault()  
         await fetch('https://foodie-backend-f64l.onrender.com/api/updateUserLocation', {
          method:"POST",
          body:JSON.stringify({data:userData, token:token}),
          headers:{
            'Content-type':"application/json"
          }
        }).then((response)=>{
          if(!response.ok){
           throw new Error(response.statusText)
          }else{
            return response.json()
          }
        }).then((data)=>{
          console.log(data)
        }).catch((err)=>{
          console.error(err)

        })
        
      }




      useEffect(()=>{
        const fetchProfileDetail= async () =>{
          try{
          const  response= await fetch('https://foodie-backend-f64l.onrender.com/api/getUserDetail', {
            method:"POST",
            body:JSON.stringify({token:token}),
            headers:{
              "Content-type":"application/json"
            }
            });
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data= await response.json()


        console.log(data)


        setUserDetail(data)
      }
      catch(err){
 console.log(err)
      }}



        fetchProfileDetail();



      }, [])

      // const token= localStorage.getItem('token')
  // const fetchProfileDetail=()=>{

  //   fetch('https://foodie-backend-f64l.onrender.com/api/getUserDetail',{
  //     method:"POST",
  //     body:JSON.stringify({token:token}),
  //     headers:{
  //       "Content-type":"application/json"


  //     }

  //   }).then((response)=>{

  //  if(response.ok){
  //   return response.json()
  //  }else{
  //   throw new Error(response.statusText)
  //  }

  //   }).then((data)=>{
  //  console.log(data)
  //   setUserDetail(data)
  //   // console.log(userDetail)

  //   })
  // }




  
   useEffect(()=>{
    
    if(quantity===1){
      setDisabledValue(true)
    }else{
      setDisabledValue(false)
    }

   }, [quantity])

  
  useEffect(() => {
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://foodie-backend-f64l.onrender.com/api/getOrderOnID', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                
                throw new Error(response.statusText);
            }
            const data = await response.json();
            
            
            setSummaryProduct(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
    window.scrollTo(0, 0);

}, [id]);


  //  console.log(summaryProduct.data.length>0 ? summaryProduct.data:"" )
   if (!summaryProduct) {
    return null; // or render a loading indicator
  }
  

  const conformOrder=(id)=>{
    const token=localStorage.getItem('token')
    fetch('https://foodie-backend-f64l.onrender.com/api/setOrders', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token:token, id:id, quantity:quantity})
    }).then((response)=>{
      if(response.ok){
        setOrderPlaced(true)
        return response.json()
      }

    }).then((data)=>{
       console.log(data)

    }).catch((err)=>{
    console.error(err)

    })
  }
  console.log(summaryProduct)
   console.log(userDetail)

  
  return (
    <div className="p-lg-5 p-1 row bg-light">
     <div className="accordion col-lg-8 col-12 " id="accordionExample">
      
  <div className="accordion-item">
    <h2 className="accordion-header">
    
      {/* <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
        {item && item !== 'undefined' ?
          <div >
        <div className="fw-bold fs-5 ms-5 text-center d-inline text-primary "> Login <span className="text-info"> <FaCheck /></span></div>
        {/* <div className=" fs-5">{userDetail.name ? userDetail.name:""} {userDetail.sirName ? userDetail.sirName:""} </div>   */}
        </div>:<Link to="/login" className="btn fs-5 text-danger fw-bold"> Please, Log in yourself !  </Link>
}
      {/* </div>  */}

      {/* <div className="d-inline"> prasad Metkar</div> */}
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show " data-bs-parent="#accordionExample"> 
       {item && item !== 'undefined' ? <div className="accordion-body row ">
        <div className="col-lg-6 col-12">
        <div><span className="text-secondary"> Name</span>: <span className="fw-bolder">{userDetail.name ? userDetail.name:""} {userDetail.sirName ? userDetail.sirName:""}</span></div>
        <div className="mt-2"><span className="text-secondary "> Phone</span>: <span className="fw-bolder "> {userDetail.mobile_no ? userDetail.mobile_no:""}</span></div>
       <div className="mt-2"> <button   className=" btn text-primary fw-bold ">Logout and Sign In in to another account</button> </div><br></br>
        <button type="button" className="btn btn-primary mt-2 " data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Checkout and Continue</button>
</div>

<div  className="col-lg-6 col-12 mt-lg-0 mt-4">
  <span className="d-block text-secondary fw-light">Advantage of our secure login</span>
  <span className="d-block "><span className="fs-4 text-primary"><CiDeliveryTruck /></span>  easily track orders, hassle free returns</span>
  <span className="d-block"><span className="fs-4 text-primary"><MdAddAlert /></span >  Get Relevents orders and recommendations</span>
  <span className="d-block"><span className="fs-4 text-primary"><TbJewishStarFilled /></span >  Get Wishlist, Reviews Ratings and More</span>

</div>
<div className="text-secondary text-center mt-2 col-lg-12 col-12 mt-lg-0 mt-4">Please note that the upon clicking on Logout you will loss your all cart Data.</div>
      </div>:""
       }
    </div>
  </div>

  <div className="accordion-item ">
    <h2 className="accordion-header">
      {/* <button className="accordion-button collapsed" type="button"  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> */}
      <div className="fw-bolder fs-6 text-secondary d-inline ms-4 ">  DELIVERY ADDRESS</div><br></br>
      {/* </button> */}
      <hr></hr>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div><span className=" fw-bolder">{userDetail.name ? userDetail.name:""} {userDetail.sirName ? userDetail.sirName:""}</span><span className="fw-bolder">  {userDetail.mobile_no ? userDetail.mobile_no:""}</span></div>
        {/* <div className="mt-"><span className="text-secondary "> prasadmetkar333@gmail.com</span><span className="fw-bolder "></span></div> */}
        <div className="row">
        <span className="col-8"> {userDetail.location ? userDetail.location:""}</span>
        <button className="btn text-primary fw-bolder fs-6 col-4 " data-bs-toggle="modal" data-bs-target="#info-update-modal" data-dismiss="modal" >EDIT</button> 
        
        <button  className="btn btn-primary  col-12 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Proceed</button>


        <div className=" modal fade" id="info-update-modal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex">
        <h1 className="modal-title fs-2" > Enter A new delivery Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>
      <div className="modal-body">
        <h4 id="exampleModal">Add a New Address</h4>
        
        <form onSubmit={handleFormSubmit}>
          <div className="row">
        <div className="mb-3 col-6">
      <label  className="form-label">First Name </label>
      <input type="text" id="disabledTextInput" name="firstName" onChange={onChange} className="form-control"/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">Last Name </label>
      <input type="text" id="disabledTextInput" name="lastName" onChange={onChange} className="form-control"/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">Pincode  </label>
      <input type="number" id="disabledTextInput" name="pinCode" onChange={onChange} className="form-control"/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">Locality</label>
      <input type="text" id="disabledTextInput" name="location" onChange={onChange} className="form-control" placeholder={userData.location}/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">City </label>
      <input type="text" id="disabledTextInput" name="city" onChange={onChange} className="form-control"/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">State </label>
      <input type="text" id="disabledTextInput" name="state" onChange={onChange} className="form-control"/>
    </div>
    <div className="mb-3 col-6">
      <label  className="form-label">Mobile Number</label>
      <input type="Number" id="disabledTextInput" name="mobile_no"onChange={onChange} className="form-control" placeholder=""/>
    </div>
    
    <div className="mb-3 col-12">
      <label  className="form-label">Address</label>
      <input type="address" id="disabledTextInput" name="address" onChange={onChange} className="form-control" />
    </div>
    </div>
    <button type="submit" className="btn btn-primary" data-target="#myModal" data-toggle="modal" data-bs-dismiss="modal">Save and Deliver Here</button>

        </form>


      </div>
      <div className="modal-footer">
         {/* <Link   className="btn btn-secondary"  >Change for my Profile </Link> */}
      {/* <button type="submit" className="btn btn-primary" data-target="#myModal" data-toggle="modal" data-bs-dismiss="modal">Change for Order</button> */}
      </div>
    </div>
  </div>


</div>

        </div>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      {/* <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> */}
      {/* <div className="fw-bolder fs-6 text-secondary ">  ORDER SUMMARY</div><br></br> */}
      <div className="fw-bolder fs-6 text-secondary d-inline ms-4 ">  ORDER SUMMARY</div><br></br>
      {/* </button> */}
      <hr></hr>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body flex-column flex-lg-row d-flex justify-content-around text-lg-start text-center">
        <div>                                 
          <img src={summaryProduct.data.product_images.image1.length >0?   summaryProduct.data.product_images.image1 :""} className="h-75" alt=""/> 
        <div className="mt-2 mx-auto text-center"> <button disabled={disabledValue} className="btn bg-primary me-2  " onClick={()=>{setQuantity(quantity-1)}}> - </button><span className="fw-bold fs-6">{quantity}</span><button className="btn bg-primary ms-2" onClick={()=>{setQuantity(quantity+1)}} >+</button></div>
        

          
          </div>
        <div className="mt-lg-0 mt-5"> 
          <span className=" fs-5 fw-bold">{summaryProduct.data.product_name.length >0?   summaryProduct.data.product_name :""} </span> <span className=" fs-6 fw-bold d-inline text-secondary">({summaryProduct.data.product_category.length>0 ?   summaryProduct.data.product_category :""})</span><br></br>
         
          <span className="text-secondary   ">Seller Address  </span>:<span className="d-inline mt-5">{summaryProduct.data.shop_address.length >0?   summaryProduct.data.shop_address :""}</span><br></br>
          <span className=" text-secondary ">Delivered In  </span><span className="">{summaryProduct.data.product_deliveryTime?   summaryProduct.data.product_deliveryTime :""}:min</span>
          <span className="d-block"></span>
          
          <span className="fs-5 text-primary d-block fw-bolder"> <FaRupeeSign /> {summaryProduct.data.product_price ?   summaryProduct.data.product_price*quantity :""}</span>
          <button  className="btn btn-primary  col-12 w-50 mt-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Proceed</button>

        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      {/* <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> */}
      <div className="fw-bolder fs-6 text-secondary d-inline ms-4 ">  PAYMENT OPTIONS</div><br></br>
    
      {/* </button> */}
      <hr></hr>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      <div className="form-check mt-3">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" disabled/>
  <label className="form-check-label" htmlFor="exampleRadios1">
    {/* <svg xmlns="http://www.w3.org/2000/svg" className="d-inline" viewBox="0 0 1024 466" id="upi"><path fill="#3d3d3c" d="M98.1 340.7h6.3l-5.9 24.5c-.9 3.6-.7 6.4.5 8.2 1.2 1.8 3.4 2.7 6.7 2.7 3.2 0 5.9-.9 8-2.7 2.1-1.8 3.5-4.6 4.4-8.2l5.9-24.5h6.4l-6 25.1c-1.3 5.4-3.6 9.5-7 12.2-3.3 2.7-7.7 4.1-13.1 4.1-5.4 0-9.1-1.3-11.1-4s-2.4-6.8-1.1-12.2l6-25.2zm31.4 40.3 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm44.2 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10H217l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm29 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H257l-1.4 5.9h-21.9zm29.3 0 9.6-40.3h8.6c5.6 0 9.5.3 11.6.9 2.1.6 3.9 1.5 5.3 2.9 1.8 1.8 3 4.1 3.5 6.8.5 2.8.3 6-.5 9.5-.9 3.6-2.2 6.7-4 9.5-1.8 2.8-4.1 5-6.8 6.8-2 1.4-4.2 2.3-6.6 2.9-2.3.6-5.8.9-10.4.9H263zm7.8-6h5.4c2.9 0 5.2-.2 6.8-.6 1.6-.4 3-1.1 4.3-2 1.8-1.3 3.3-2.9 4.5-4.9 1.2-1.9 2.1-4.2 2.7-6.8.6-2.6.8-4.8.5-6.7-.3-1.9-1-3.6-2.2-4.9-.9-1-2-1.6-3.5-2-1.5-.4-3.8-.6-7.1-.6h-4.6l-6.8 28.5zm59.7-12.1-4.3 18.1h-6l9.6-40.3h9.7c2.9 0 4.9.2 6.2.5 1.3.3 2.3.8 3.1 1.6 1 .9 1.7 2.2 2 3.8.3 1.6.2 3.3-.2 5.2-.5 1.9-1.2 3.7-2.3 5.3-1.1 1.6-2.4 2.9-3.8 3.8-1.2.7-2.5 1.3-3.9 1.6-1.4.3-3.6.5-6.4.5h-3.7zm1.7-5.4h1.6c3.5 0 6-.4 7.4-1.2 1.4-.8 2.3-2.2 2.8-4.2.5-2.1.2-3.7-.8-4.5-1.1-.9-3.3-1.3-6.6-1.3H335l-2.8 11.2zm40.1 23.5-2-10.4h-15.6l-7 10.4H341l29-41.9 9 41.9h-6.7zm-13.8-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm29.7 15.9 4.4-18.4-8-21.8h6.7l5 13.7c.1.4.2.8.4 1.4.2.6.3 1.2.5 1.8l1.2-1.8c.4-.6.8-1.1 1.2-1.6l11.7-13.5h6.4L399 362.5l-4.4 18.4h-6.4zm60.9-19.9c0-.3.1-1.2.3-2.6.1-1.2.2-2.1.3-2.9-.4.9-.8 1.8-1.3 2.8-.5.9-1.1 1.9-1.8 2.8l-15.4 21.5-5-21.9c-.2-.9-.4-1.8-.5-2.6-.1-.8-.2-1.7-.2-2.5-.2.8-.5 1.7-.8 2.7-.3.9-.7 1.9-1.2 2.9l-9 19.8h-5.9l19.3-42 5.5 25.4c.1.4.2 1.1.3 2 .1.9.3 2.1.5 3.5.7-1.2 1.6-2.6 2.8-4.4.3-.5.6-.8.7-1.1l17.4-25.4-.6 42h-5.9l.5-20zm10.6 19.9 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H483l-1.4 5.9h-21.9zm29.2 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6H554zm6.7 26.7 5.7-2.4c.1 1.8.6 3.2 1.7 4.1 1.1.9 2.6 1.4 4.6 1.4 1.9 0 3.5-.5 4.9-1.6 1.4-1.1 2.3-2.5 2.7-4.3.6-2.4-.8-4.5-4.2-6.3-.5-.3-.8-.5-1.1-.6-3.8-2.2-6.2-4.1-7.2-5.9-1-1.8-1.2-3.9-.6-6.4.8-3.3 2.5-5.9 5.2-8 2.7-2 5.7-3.1 9.3-3.1 2.9 0 5.2.6 6.9 1.7 1.7 1.1 2.6 2.8 2.9 4.9l-5.6 2.6c-.5-1.3-1.1-2.2-1.9-2.8-.8-.6-1.8-.9-3-.9-1.7 0-3.2.5-4.4 1.4-1.2.9-2 2.1-2.4 3.7-.6 2.4 1.1 4.7 5 6.8.3.2.5.3.7.4 3.4 1.8 5.7 3.6 6.7 5.4 1 1.8 1.2 3.9.6 6.6-.9 3.8-2.8 6.8-5.7 9.1-2.9 2.2-6.3 3.4-10.3 3.4-3.3 0-5.9-.8-7.7-2.4-2-1.6-2.9-3.9-2.8-6.8zm47.1 8.1 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.6 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6h-10.4zm6.9 34.8 9.6-40.3h22l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13h15.5l-1.4 5.9h-22zm39.5-18.1-4.3 18h-6l9.6-40.3h8.9c2.6 0 4.6.2 5.9.5 1.4.3 2.5.9 3.3 1.7 1 1 1.6 2.2 1.9 3.8.3 1.5.2 3.2-.2 5.1-.8 3.2-2.1 5.8-4.1 7.6-2 1.8-4.5 2.9-7.5 3.3l9.1 18.3h-7.2l-8.7-18h-.7zm1.6-5.1h1.2c3.4 0 5.7-.4 7-1.2 1.3-.8 2.2-2.2 2.7-4.3.5-2.2.3-3.8-.7-4.7-1-.9-3.1-1.4-6.3-1.4h-1.2l-2.7 11.6zm18.9 23.2 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10h15.5l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm52.8 0-2-10.4h-15.6l-7 10.4h-6.7l29-41.9 9 41.9h-6.7zm-13.9-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm62.2-14.6c-1.4-1.6-3.1-2.8-4.9-3.5-1.8-.8-3.8-1.2-6.1-1.2-4.3 0-8.1 1.4-11.5 4.2-3.4 2.8-5.6 6.5-6.7 11-1 4.3-.6 7.9 1.4 10.8 1.9 2.8 4.9 4.2 8.9 4.2 2.3 0 4.6-.4 6.9-1.3 2.3-.8 4.6-2.1 7-3.8l-1.8 7.4c-2 1.3-4.1 2.2-6.3 2.8-2.2.6-4.4.9-6.8.9-3 0-5.7-.5-8-1.5s-4.2-2.5-5.7-4.5c-1.5-1.9-2.4-4.2-2.8-6.8-.4-2.6-.3-5.4.5-8.4.7-3 1.9-5.7 3.5-8.3 1.6-2.6 3.7-4.9 6.1-6.8 2.4-2 5-3.5 7.8-4.5s5.6-1.5 8.5-1.5c2.3 0 4.4.3 6.4 1 1.9.7 3.7 1.7 5.3 3.1l-1.7 6.7zm.6 30.5 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7H868l-3.1 13h15.5L879 381h-21.9z"></path><path fill="#70706e" d="M740.7 305.6h-43.9l61-220.3h43.9l-61 220.3zM717.9 92.2c-3-4.2-7.7-6.3-14.1-6.3H462.6l-11.9 43.2h219.4l-12.8 46.1H481.8v-.1h-43.9l-36.4 131.5h43.9l24.4-88.2h197.3c6.2 0 12-2.1 17.4-6.3 5.4-4.2 9-9.4 10.7-15.6l24.4-88.2c1.9-6.6 1.3-11.9-1.7-16.1zm-342 199.6c-2.4 8.7-10.4 14.8-19.4 14.8H130.2c-6.2 0-10.8-2.1-13.8-6.3-3-4.2-3.7-9.4-1.9-15.6l55.2-198.8h43.9l-49.3 177.6h175.6l49.3-177.6h43.9l-57.2 205.9z"></path><path fill="#098041" d="M877.5 85.7 933 196.1 816.3 306.5z"></path><path fill="#e97626" d="M838.5 85.7 894 196.1 777.2 306.5z"></path></svg>  */}
     <img src="https://www.google.com/imgres?q=UPI%20hd%20image&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffa%2FUPI-Logo.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUPI-Logo.png&docid=WArzFU4RhE5gQM&tbnid=EJpOKNY1S3LC9M&vet=12ahUKEwjbofzL-fqFAxUpoK8BHWRnAm8QM3oECBsQAA..i&w=1165&h=414&hcb=2&ved=2ahUKEwjbofzL-fqFAxUpoK8BHWRnAm8QM3oECBsQAA" />
     <span className="d-inline" >UPI</span>
  </label>
</div>
<hr></hr>
<div className="form-check mt-3">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" disabled/>
  <label className="form-check-label" htmlFor="exampleRadios2">
        Wallets
  </label>
</div>
<hr></hr>
<div className="form-check mt-3">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
  <label className="form-check-label" htmlFor="exampleRadios3">
  <span className="text-dark">Credit / Debit / ATM Cart</span>
  <span className="d-block">Add a secure cart as per RBI Guidelines</span>
  </label>
</div>
<hr></hr>
<div className="form-check mt-3">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option4" disabled/>
  <label className="form-check-label" htmlFor="exampleRadios4">
  <span className="text-dark">Net Banking</span>
  <span className="d-block">This instrument has less success .use UPI or cards for better experience</span>
  </label>
</div>
<hr></hr>
<div className="form-check mt-3">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option5" checked />
  <label className="form-check-label" htmlFor="exampleRadios5">
  <span className="text-dark">Cash on Delivery</span>
  {/* <span className="d-block">This instrument has less success .use UPI or cards for better experience</span> */}
  {/* <button type='button' className="btn bg-primary d-block mt-3" data-bs-target="#exampleModal">Proceed </button>
  <button type="button" className="btn btn-success"  data-bs-target="#exampleModal">
  Confirm Order
</button> */}
{/* <button type="button" className="btn btn-success  d-block mt-3" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal" > Conform order</button> */}

  </label>
  {/* <button type="button" className="btn btn-success  d-block mt-3"  data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal"  onClick={()=>{conformOrder(summaryProduct.data._id)}}> Conform order</button> */}



  
</div>{!orderPlaced  ? <button   className="btn btn-success  d-block mt-3"   onClick={()=>{conformOrder(summaryProduct.data._id)}}> Conform order</button>  : <div> <hr></hr><div style={{width:"50%"}} className=" text-primary fs-5 fw-bolder" > 🎇🎆🎉 Congratulations !  🎉🎉🎊   </div> <div className="fs-6 fw-bold">  Your order will deliver soon..</div> <span>Check it on here</span>  <Link to="/myOrders"> My Orders </Link></div>



}
{/* <button type="button" className="btn btn-success" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > add to cart</button> */}

{/* <hr></hr> */}
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-lg-3  mt-5 mt-lg-0">
  <div className="fs-6 text-secondary fw-bolder">PRICE DETAILS</div>
  <hr></hr>
  <div className="d-flex justify-content-between text-secondary mt-3" > <span>Price ({quantity} items)</span> <span className="fs-6 fw-bold"> {summaryProduct.data.product_price ?   summaryProduct.data.product_price*quantity :"0"}</span></div>
  <div className="d-flex justify-content-between text-secondary mt-3" > <span>Delivery Charges</span> <span>{summaryProduct.data.product_deliveryCharges ?   summaryProduct.data.product_deliveryCharges*quantity :"FREE"}</span></div>
  <div className="d-flex justify-content-between text-secondary mt-3" > <span>Packaging Charges</span> <span>{summaryProduct.data.product_packagingCharges ?   summaryProduct.data.product_packaging_charges :"0"}</span></div>
  <hr></hr>
  <div className="d-flex justify-content-between fw-bolder fs-5" > <span>Total Payable</span> <span> {summaryProduct.data.product_price ?   summaryProduct.data.product_price*quantity:0+summaryProduct.data.product_price ?   summaryProduct.data.product_deliveryCharges :0 + summaryProduct.data.product_deliveryCharges ?   summaryProduct.data.product_packagingCharges :0 + summaryProduct.data.product_packagingCharges ?   summaryProduct.data.product_price*quantity :"0"}</span></div>
  <hr></hr>
  <div className="d-flex justify-content-between fw-bolder text-primary" > Your Total Savings on this order is 45</div>
  <div className="col-3"><img className="w-100 d-block" src="https://rukminim2.flixcart.com/lockin/100/100/images/promotion_banner_v2_inactive_2.png?q=50"  alt="this is image"/> </div>

</div>

               

    </div>
  )
}
