
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../../Styles/card.css"



export default function GetOrder() {
  const [productData, setProductData]= useState([])
  const [tokenItem, setTokenItem]= useState([])
  const navigate= useNavigate()
  
  // let priceOptions= Object.keys(options)
  // const [size, setSize]= useState(priceOptions[0])
 const [qty, setQty]= useState()

  const addToCart=(id)=>{
    const token= localStorage.getItem('token')
    console.log(token)
    if(token===null){
      alert('please login first')
    }else{
  
  // setPart(id)
  // const buyValue=price*qty
  const data={id,qty, token}
  console.log(data)
  
   fetch('http://localhost:5000/api/addCart', {
    
     method:"POST",
     body:JSON.stringify(data),
     headers:{
       'Content-type':"application/json"
     }
  
   }).then((response)=>{
     if(response.ok){
       return response.json()
     }
     else{
       throw new Error(response.statusText)
     }
  
   }).then((data)=>{
     console.log(data)
  
   }).catch((err)=>{
     console.err(err)
  
   })
    
  }
  
  }

const getProduct=()=>{
  fetch('http://localhost:5000/api/displayData', {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  }).then((response)=>{
    if(response.ok){
      return response.json()
    }else{
      throw new Error(response.statusText);
    }

  }).then((data)=>{
    console.log(data.data)
    // console.log(data)
      setProductData(data.data)
    console.log(productData)


  }).catch((err)=>{
    console.error(err)

  })
}

useEffect(()=>{
  getProduct()
const token= localStorage.getItem('token')
setTokenItem(token)
}, [])

const getProductDetail=(id)=>{
  navigate(`/productDetail/${id}`);

}
  return (
    
     <div   className="row w-100 p-0 p-md-5">

    
   
      { productData.map((item, index)=>{
        return  <div key={index} className="card col-md-6 mb-3 col-sm-6  col-12 p-5 shadow   " >
        <div className="row g-0">
          <div className="col-md-12 col-xl-5 col-12 ">
            <button className="w-100 h-100 btn" onClick={()=>{getProductDetail(item._id)}}>
            <img src={item.product_images.image1} className="  main-image h-100 d-block w-100 rounded" alt="..." />
            </button>
            
          </div>
          <div className="col-md-12 col-xl-7 col-7 col-12">
            <div className=" card-body row">
              <h5 className="card-title col-12">{item.product_name}/ {item.product_category}</h5>
              {/* <p className="card-text d-none col-12 d-md-block">{item.product_description.length>20}</p> */}
              <span className="card-text col-6"><small className="text-muted">Delivered  : {item.product_deliveryTime} Min</small></span>
              <span className="col-6  fw-bolder  text-gray rounded-circle text-center p-0 "> <h4 className="d-inline me-1"><FcRating /></h4>{item.product_rating}</span>
              <h5 className="col-6    col-lg-6 mt-2 "> ₹{item.product_price}</h5>
              <div className="col-6">
              <select className='m-2 h-100  ' size="size" onChange={(e)=>{setQty(parseInt(e.target.value))}}>{Array.from(Array(6), (e, i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}</select>
              </div>
              <span className="col-12 col-lg-12 mt-4 fw-bold"> spicy shop near metro station , hyderabad</span>
              {tokenItem  ?
              <button className=" col-12 col-lg-6 btn mt-4 btn-primary  " onClick={()=>{addToCart(item._id, item.product_price)}} >Add to cart</button> :      <button type="button" className="btn  col-12 col-lg-6 btn mt-4 btn-primary" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > add to cart</button>

      }   

               
<div className="modal  " id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="false">
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
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <Link   className="btn btn-secondary"  to="/login">Log In </Link> */}
        {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal">We are waiting...</button> */}
      </div>
    </div>
  </div>
</div>   

            </div>
          </div>
        </div>
      </div>
      
      })
     
}

</div>



   

    
  )
}
