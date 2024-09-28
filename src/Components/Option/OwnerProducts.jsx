import  { useEffect, useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FcRating } from 'react-icons/fc'
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { useNavigate } from "react-router-dom"



export default function OwnerProducts() {
    const [ownerProduct, setOwnerProduct]= useState([])
  
    const navigate = useNavigate()

const token= localStorage.getItem('token')


    const getOwnerProduct=()=>{
        fetch('https://foodie-backend-4.onrender.com/api/getOwnerProduct', {      //api call
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({token:token})
    
      }).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }

      })
    .then((data)=>{
        console.log(data)
        setOwnerProduct(data.data)


    }).catch((err)=>{
        console.error(err)

    })
}
useEffect(()=>{
    getOwnerProduct()
}, [])

const dataPrint=(id)=>{
    // console.log(id)
   
   navigate(`/productDetail/${id}`);
 }

  console.log(ownerProduct)
  

  return (
    <div>
        <h2 className='mb-5  text-center'> Products</h2>
        
        <div >
      
      <div className=' row  overflow-scroll w-100' style={{"height":"400px"}}>
        
        {

        ownerProduct.map((item, index)=>{

      return <div className="card mt-3 shadow text-dark col-12 mx-auto" style={{'width': '18rem','maxHeight':"360px"}} key={index}>
          {/* <button className="btn" onClick={()=>{dataPrint(id)}} to="/productDetail"> */}
          <img src={item.product_images.image1} className="card-img-top  " name="name" alt={item.product_name} style={{height:"120px", objectFit:"fill"}}/>
          {/* </button> */}
          <div className=" card-body row">
            <h5 className="card-title col-8">{ownerProduct.product_name}</h5>
            <span className=' col-4 mt-2 mx-auto  rating  d-block'><span className='bg-success p-1 rounded text-white  fw-bolder'> <FcRating/> {item.product_rating}</span></span>
            {/* <span className="col-12">{description}</span> */}

            <span className=" col-7 price" > Price:<FaRupeeSign /> {item.product_price}</span>
            <span className="col-5 mt-3 delivery"> <b><MdDeliveryDining /></b>{item.product_deliveryTime}  min</span>
            <span className='col-12 location'> <FaLocationDot /> {item.shop_address} </span>
            

            <div className='container mt-3'>
             
            
                <div className='d-inline h-100 fs-5'></div>
                

                <button className="btn  w-100 bg-primary"  onClick={()=>{dataPrint(item._id)}} to="/productDetail" > Preview</button>
            </div>
           
          </div>



          
        </div>
       })

}




      
</div>
    </div>
  
    </div>
  )
}
