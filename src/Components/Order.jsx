
import { useEffect, useState } from "react"

import GetOrder from "./Option/GetOrder"
import "../Styles/order.css"

import Footer from "./Option/Footer"
import { useNavigate } from "react-router-dom"
import { MdOutlineStarRate } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa"; 
import { Link } from "react-router-dom"
import { FaCircleArrowDown } from "react-icons/fa6";


export default function Order() {
    const [products, setProducts]= useState([])
    const [status, setStatus]= useState('Shipping')
    const navigate= useNavigate()

    const getOrders= async()=>{
        const token= localStorage.getItem('token')
       await fetch(' http://localhost:5000/api/getOrders', {
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

        }).then((data)=>{
          console.log(data.message)
        
            setProducts(data.message)
            

        }).catch((err)=>{
            console.error(err)

        })
    }
    useEffect(()=>{
        getOrders()
        const timer1 = setTimeout(() => {
            setStatus('In-Transit'); // After 5 minutes, status changes to 'IN_TRANSIT'
          }, 2000); // 5 minutes in milliseconds
      
          const timer2 = setTimeout(() => {
            setStatus('Order Successfully Delivered'); // After another minute, status changes to 'COMPLETED'
          },10000 ); // 6 minutes in milliseconds
      
          // Clean-up function to clear timeouts when component unmounts or status changes
          return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
          };
    }, [])

    // useEffect(() => {
    //     // console.log(products);
    // }, [products]);
  console.log(products.length)
  const getProductDetail=(id)=>{
    // navigate(`/productDetail/${id}`);
    navigate(`/productDetail/${id}`);
    console.log(id)
  
  }


  const makeReview=(id)=>{
    navigate(`/rateProduct/${id}`);
 
 console.log(id)
  }
  

console.log( products && products.length>=1 ?  products[0].product_Category:"") 

  
  return (
    
    
    <div className="bg-light order-section">
        
        {products && products.length > 0 ? products.map((item)=>{
            return <div key={item.id} className="row shadow bg-white m-2  border rounded-3 "   >
                <div className="col-12 p-md-5  ps-5 pe-5 p-0 col-md-3  pt-4">
                <div className="card p-2 " >
                    <button className="btn" onClick={()=>{getProductDetail(item.product_id)}}>
  <img src={item.product_img} className="card-img-top" alt="..."/>
  </button>
  
</div>

                </div>
                <div className="col-12 col-md-3 p-md-5  ps-5 pe-5 pt-3  ">
                    <h4>{item.product_name}</h4>
                    
  <div className="card-body"> 
    
   </div>
   <div className="d-flex justify-content-between text-gray">  <span>Quantity:{item.product_quantity}</span>  <span className="fw-bold">Final Price:  <FaRupeeSign className="d-inline" /> {item.product_price}</span></div>

                </div>
                <div className=" col-12 col-md-3 p-md-5  ps-5 pe-5 pt-3 ">
                    <div className="align-middle">
                    <h4 className="text-white">Status</h4>   
                    <h5 className="text-warning">{status}</h5>
                    </div>

                </div>
                <div className="col-12 col-md-3 p-md-5 ps-5 pe-5 pt-4 pb-5 text-sm-center" >
                    <div>
                    <h5 className="">Payment Mode</h5>
                    <h6 className="">Cash on Delivery</h6>
                        </div>
                        <hr className="text-white"></hr>
                        <div>
                    <h5 className="">Order Date</h5>
                    <h6 className="">{item.createdAt}</h6>
                        </div>
                        <hr className="text-white"></hr>
                         <div>

     <button className="btn text-info" onClick={()=>{makeReview(item.product_id)}}> <MdOutlineStarRate className="d-inline" /> Rate and Review Product</button>

                   
                        </div> 
                    </div>


            </div>
        }):<div className="mx-auto w-100 text-center bg-white   myOrder-option ">
          <img src="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png" className=" d-block mx-auto  myOrder-option-img"  alt="Nothing order here" />
          <span className="fs-5 text-secondary fw-bold mt-5 mx-auto"> Nothing here yet!</span><br></br>
          <span className="d-block ">You havent placed any order yet.</span>  
          <Link to="/" className="btn btn-outline-info mt-2 ">Look Orders ! </Link>
           </div>}
        <div className="mt-5">
            <span className="fs-5 fw-medium">Just For You <FaCircleArrowDown className="d-inline" /></span>
            <GetOrder category={ products && products.length>=1 ?  products[0].product_Category:"Maharashtrian"}/>
            
            
        </div>
        

<Footer/>
    </div>
  )
}

