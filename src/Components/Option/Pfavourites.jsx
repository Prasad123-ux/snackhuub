import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaRupeeSign } from "react-icons/fa";
import { FcRating } from 'react-icons/fc'
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";



export default function Pfavourites() {
  const [favourites, setFavourites]= useState([1,2])
const navigate= useNavigate()

  const getFavourites=()=>{
    //calling a function for get userCart detail from database
const token= localStorage.getItem('token')

fetch('  https://foodie-backend-9.onrender.com/api/getFavourites', {                       //api call
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
setFavourites(data.data)
// console.log(cartItem)

}).catch((err)=>{
console.log(err)

})
}

const deleteFavourites=(id)=>{                                  //calling a function for deleting cart
  const token=localStorage.getItem('token')
  
  fetch('  https://foodie-backend-9.onrender.com/api/deleteFavourite', {          //api call
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

    getFavourites()

  }).catch((err)=>{
    console.log(err)

  })
}

useEffect(()=>{
  getFavourites()
  console.log(favourites)
},[])

const dataPrint=(id)=>{
  console.log(id)
 
 navigate(`/productDetail/${id}`);
}
console.log(favourites)

  return (
    <div className='mx-auto text-center '>
      <h2> Favourites</h2>
      {
        favourites  && favourites.length>0? <div className=' mx-auto  overflow-scroll  row   w-100  ' style={{'width':'100%','height':"400px"}}>{
          favourites.map((item, index)=>{
            return <div  className='   card mt-3 shadow text-dark col-12 mx-auto ' style={{'width': '250px','maxHeight':"100%"}} key={index}>
              <button className="btn" onClick={()=>{dataPrint(item.id)}} to="/productDetail">
          <img  src={item.product_img}  className="card-img-top rounded-5 main-image" name="name" alt={item.product_name} style={{height:"120px", objectFit:"fill"}}/>
          </button>
 {/* <div className=" container row justify-content-md-between "> */}
      {/* <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5 border p-5 pt-2"> */}
      <div className="card-body row">
            <h5 className="card-title col-7">{item.product_name}</h5>
            <span className=' col-5 mt-2 mx-auto  rating  d-block'><span className='bg-success p-1 rounded text-white  fw-bolder'> <FcRating/> {item.product_rating}</span></span>
            {/* <span className="col-12">{description}</span> */}

            <span className=" col-6 price" > Price:<FaRupeeSign />{item.product_price} </span>
            <span className="col-6 mt-3 delivery"> <b><MdDeliveryDining /></b>{item.product_delivery_time}  min</span>
            <span className='col-12 location'> <FaLocationDot />   {item.shop_address}</span>
            

            {/* <p className="card-text">{description}</p> */}
           
           
          </div>



  
  
  <div className=" d-flex justify-content-between p-0 mt-3">
    <button type="button"  className="btn bg-info p-2" onClick={()=>{deleteFavourites(item.id)}}>Remove </button>
    <button type="button"  className="btn bg-success p-2"onClick={()=>{dataPrint(item.id)}}>preview </button>
    {/* <button type="button"  className="btn bg-success p-2" data-toggle="modal" data-target="#myModal" onClick={getUserDetail}  >Place Order</button> */}

  </div>
{/* </div> */}
{/* </div> */}
</div> 
})}</div>:
        <div className='d-flex justify-content-between flex-column mx-auto' >
    <img src="https://cdn1.byjus.com/wp-content/uploads/2021/06/my-favourite-food-biryani-essay-for-class-3-kids.png" className="d-block w-50 mt-2" alt="play store"/>
    <h2 className=''>Not Added Yet</h2>
    <span  className='text-secondary fw-bold mt-2'>Uh-oh! Looks like the page you are trying to access, doesnt exist. Please start afresh.</span>
    <Link className='btn btn-primary mt-5 w-50  fw-bold' to="/"> Find Your Favourite</Link>

        </div>
      }

    </div>
  )
}
