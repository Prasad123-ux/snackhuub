 import React from 'react'
import { useEffect, useState } from "react"
import Carousel from "./Option/Carousel"
import GetOrder from "./Option/GetOrder"
import { useNavigate } from "react-router-dom"
import Footer from "./Option/Footer"   
import "../Styles/order.css" 
import Recommended from './Option/Recommended'


export default function Cart() {
   const [cartItem, setCartItems]= useState([])
   
   const navigate= useNavigate() 
   const token= localStorage.getItem("token") 
  //  console.log(new Date(item.createdAt))
  
   useEffect(()=>{
window.scrollTo(0,0)
   },[])




  const getCart=async ()=>{
                                               //calling a function for get userCart detail from database

 await fetch('  https://foodie-backend-9.onrender.com/api/getCart', {                       //api call
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({token:token}),
  })
.then((response)=>{
  if(response.ok){
    return response.json()
  }else{
    throw new Error(response.statusText)
  }

})
.then((data)=>{ 
  console.log(data.data)
setCartItems(data.data)
// console.log(cartItem)

}).catch((err)=>{
  console.log(err)

})
}



const deleteCart=(id)=>{                                  //calling a function for deleting cart
  
  fetch('  https://foodie-backend-9.onrender.com/api/deleteCart', {          //api call
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({token:token, id:id})
  }).then((response)=>{
    if(response.ok){
    return response.json()
    }else{
      throw new Error (response.statusText)
    }

  }).then((data)=>{
    console.log(data)
    getCart()

  }).catch((err)=>{
    console.log(err)

  })
     }



 const getUserDetail=()=>{                            //calling a function for getting user Detail form database
  fetch('  https://foodie-backend-9.onrender.com/api/getUserDetail', {      //api call
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({token:token})

  })
  .then((response)=>{
    if(response.ok){
      return response.json()
    }else{
      throw new Error(response.statusText)
    }

  })
  .then((data)=>{
    
// setUserDetail({name:data.name, email:data.email, location:data.location, mobile_no:data.mobile_no, })


  })
  .catch((err)=>{
    console.log(err)

  })

}
useEffect(()=>{
       getCart()

}, [])



                                                           

    const getProductDetail=(id)=>{
      // navigate(`/productDetail/${id}`);
      navigate(`/productDetail/${id}`);
      console.log(id)
    
    }
    const getSummaryOfProduct=(id)=>{
      navigate(`/summary/${id}`)
    }
    

  return (
    <>
    {/* <Navbar cartLength={cartLength}/> */}
    {/* <Carousel/> */}
    
    { cartItem && cartItem.length>0 ?
    <div className="  row justify-content-md-between cart-section ">
      {cartItem.map((item)=>{
      return  ( <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3  mb-5 border p-5 pt-2">
  {/* <img src={item.img} className="card-img-top rounded" alt="Nothing is here" style={{height:'200px' ,width:"200px"}}/> */}
  <div className="card-body ">
  <button className="w-100 h-100 btn" onClick={()=>{getProductDetail(item.id)}}>
  <img src={item.img} className="card-img-top rounded " alt="Nothing is here" style={{height:'200px' ,width:"200px"}}/>
  </button>
    <h5 className="card-title">{item.name} ({item.CategoryName})</h5>
    {/* <p className="card-text">{item.description}</p> */}

  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> Quantity: {item.qty ? item.qty :1 } </li>
    <li className="list-group-item">Delivery Time: {item.deliveryTime} min</li>
    <li className="list-group-item"> FinalPrice: ₹ { item.qty ?  item.price*item.qty:item.price}</li>
    <li className="list-group-item"> Added At: { (item.createdAt) ?new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }):" N/A" } </li>
  </ul>
  
  <div className="card-body d-flex justify-content-between p-0 mt-3">
    <button type="button"  className="btn bg-info p-2" onClick={()=>{deleteCart(item.id)}}>Remove </button>
    <button type="button"  className="btn bg-success p-2" onClick={()=>{getSummaryOfProduct(item.id)}}  >Place Order</button>
    {/* <button type="button"  className="btn bg-success p-2" data-toggle="modal" data-target="#myModal" onClick={getUserDetail}  >Place Order</button> */}

  </div>










</div>

)
    })
      
    
}
    </div> 
    :<div className="text-center myOrder-option">
      <img src="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png" className=" d-block mx-auto  myOrder-option-img"    alt="" />

      <span className="fs-5 text-secondary fw-bold ">Your Cart is empty</span><br></br>
      <span>You can go to home page to view more restaurants</span>
      
    </div>
    // <div className="container"> <button className="btn bg-info" onClick={getCart}>Refresh Data</button><h1>Please login </h1></div>
}

{/* <Modals userDetail={userDetail}/> */}
<span className="mt-5 fs-5 fw-medium">You May Like This </span> 

<GetOrder category={ cartItem && cartItem.length>=1 ? cartItem[0].CategoryName:"Maharashtrian"}/>  
{/* <Footer/> */}
  
    </>
  )
}
 

