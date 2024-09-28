import {   useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';



import { FaRupeeSign } from "react-icons/fa";
import { FcRating } from 'react-icons/fc'
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { RiSaveLine } from "react-icons/ri";
import "../Styles/card.css"
 



export default function Card({ name, address, price, img, id, rating, deliveryTime }) {
  
  const options={'full':250, half:"420"}
    let priceOptions= Object.keys(options)
    const [size, setSize]= useState(priceOptions[0])    
  const [qty, setQty]= useState()

const [cartSave, setCartSave]= useState(true)
const navigate=useNavigate()
console.log(name)
console.log(address)
console.log(price)
console.log(rating)
console.log(deliveryTime)
console.log(img)
          







const addToCart=()=>{
setCartSave(false)

  
  const token= localStorage.getItem('token')
  console.log(token)
  if(token===null){
    alert('please login first')
  }else{

// setPart(id)

const data={id, size, qty, token}
console.log(data)

 fetch('https://foodie-backend-f64l.onrender.com/api/addCart', {
  
   method:"POST",
   body:JSON.stringify(data),
   headers:{
     'Content-type':"application/json"
   }

 }).then((response)=>{
   if(response.ok){
    // setCartSave(false)
     return response.json()
     
   }
   else{
    setSize("")
     throw new Error(response.statusText)
     
   }

 }).then((data)=>{
   setCartSave(true)
   console.log(data)

 }).catch((err)=>{
   console.err(err)

 })
}
}




const token = localStorage.getItem('token')
const addToFavourites=()=>{

// setPart(id)

const data={id, size, qty, token}
console.log(data)

 fetch('https://foodie-backend-f64l.onrender.com/api/addFavourites', {
  
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
  
// }

}




  const dataPrint=(id)=>{
     console.log(id)
    
    navigate(`/productDetail/${id}`);
    console.log(id)
  }

  

  return (
   
    <div  className="mt-5">
    
      <div>
        {
          !cartSave  ?
        <div className="bg-dark text-white text-center rounded mx-auto" style={{width:"50%"}}> Added to Cart</div>:""
}
      
          
          <div className="card mt-3 shadow text-dark" style={{'width': '18rem','maxHeight':"360px"}}>
          <button className="btn" onClick={()=>{dataPrint(id)}} to="/productDetail">
          <img src={img} className="card-img-top rounded-5 main-image" name="name" alt={name} style={{height:"120px", objectFit:"fill"}}/>
          </button>
          <div className="card-body row">
            <h5 className="card-title col-8">{name}</h5>
            <span className=' col-4 mt-2 mx-auto  rating  d-block'><span className='bg-success p-1 rounded text-white  fw-bolder'> <FcRating/> {rating}</span></span>
            {/* <span className="col-12">{description}</span> */}

            <span className=" col-7 price" > Price:<FaRupeeSign />{qty>1 ? price*qty : price} </span>
            <span className="col-5 mt-3 delivery"> <b><MdDeliveryDining /></b> {deliveryTime} min</span>
            <span className='col-12 location'> <FaLocationDot />   {address}</span>
            

            {/* <p className="card-text">{description}</p> */}
            <div className='container mt-3 d-flex justify-content-between'>
              {/* <div>{id}</div> */}
              {token ?
                <select className=' h-100  bg-success' size="size" onChange={(e)=>{setQty(parseInt(e.target.value))}}>{Array.from(Array(6), (e, i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}</select>:""

              }


                {token ?
                <button className="me-4 fs-5   btn bg-success" onClick={addToFavourites}><RiSaveLine /></button>:<button type="button" className="btn btn-success" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > <RiSaveLine /></button>

}
                 {/* <select className='m-2 h-100  bg-success rounded' onChange={(e)=>{setSize(e.target.value)}}>
                  {
                    priceOptions.map((item, index)=>{
                      return <option key={index} value={item} >{item}</option>


                    })
                  }
                </select>  */}
                <div className='d-inline h-100 fs-5'>
                {token  && token !=='undefined'?
                <div>  <button className="btn card-button " onClick={addToCart} > Add to cart</button></div>:<button disabled type="button" className="btn btn-success" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > add to cart</button>
}
</div>
               


            </div>
            {/* <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button> */}


          </div>



          
        </div>
       
      
</div>
    </div>
  
  )
}

Card.propTypes={
  name:PropTypes.string.isRequired,
  address:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  description:PropTypes.string.isRequired,
  discount:PropTypes.number.isRequired,
  type:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
  deliveryTime:PropTypes.number.isRequired,
  img:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired


};
Card.defaultProps={
  name:"Item",
  addres:"not mentioned",
  price:0,
  description:"this is item",
  discount:0,
  type:"veg",
  category:"general",
  // rating:3.5,
  // deliveryTime:5


}
