// import  from 'react'
import "../../Styles/Oanalytics.css"
import { LuUsers } from "react-icons/lu";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuRefreshCcw } from "react-icons/lu";








export default function Oanalytics() {
const [analytic, setAnalytic]= useState([])
const [revenue, setRevenue]= useState()
const [customer, setCustomer]= useState(0)
const navigate= useNavigate()


const token= localStorage.getItem('token')


  useEffect(()=>{
const handleShopDetailData= async()=>{
  try{
    const response= await fetch('https://foodie-backend-f64l.onrender.com/api/getMyOrder', {
      method:"POST",
      body:JSON.stringify({token}),
      headers:{
        "Content-type":"application/json"
      }
    })
    if(!response.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json()
    // console.log(data.data)
    setAnalytic(data.data)
  }catch(err){
    console.log(err)

  }
 
}

handleShopDetailData()
let priceSum=0
let uniqueMails= new Set();
  
    
 for(let  priceValue=0;priceValue<analytic.length;priceValue++ ){

    priceSum+= analytic[priceValue].product_price
    uniqueMails.add(analytic[priceValue].user_email)
    setCustomer(uniqueMails.size)
    // setCustomer(analytic[priceValue].user_email)
    

   
 }
 setRevenue(priceSum)
  }, []) 


 

  console.log(analytic.length)

  const dataPrint=(id)=>{
    console.log(id)
   
   navigate(`/productDetail/${id}`);
   console.log(id)
 }
 

 const getRefresh=()=>{
  let priceSum=0
  let uniqueMails= new Set();
  
    
 for(let  priceValue=0;priceValue<analytic.length;priceValue++ ){

    priceSum+= analytic[priceValue].product_price
      uniqueMails.add(analytic[priceValue].user_email)

   
 }
 setRevenue(priceSum)
  setCustomer(uniqueMails.size)
  


 }
 console.log(customer)

 

  return (
    <div className='row mx-auto'>
      <h2 className='text-center mb-5'> Analytical and Insights</h2>
    <div className="d-flex justify-content-between flex-row w-100 col-12">
      <div className=" bg-warning a-orders row"><span className='col-9 '><FaLuggageCart/></span> <span className='col-3'>{analytic.length}</span><div className='col-12'> Total Orders</div></div>
      <div className=" bg-danger a-orders row"><span className='col-9 '><LuUsers /></span> <span className='col-3'>{customer}</span><div className='col-12'> My Customers</div></div>
      <div className=" bg-primary a-orders row"> <span className='col-9 '><IoStatsChartSharp /></span> <span className='col-3'>01</span><div className='col-12'> Total Branches</div></div>
      <div className=" bg-info a-orders row"><span className='col-7  ' style={{"cursor":"pointer"}} onClick={getRefresh}>  <LuRefreshCcw /></span><span className='col-5'> <FaRupeeSign />{revenue}</span><div className='col-12'> Total Revenue</div></div>
    </div> 
    



     <div className='col-12 mt-5 overflow-scroll' style={{height:"300px"}}> {
      <table className='table '>
        <thead >
          <tr >
            {/* <th scope="col">item image</th> */}
            <th scope="col" > item name</th>
            <th scope="col"> item id</th>
            <th scope="col"> item price</th>    

            <th scope="col"> user name</th>
            <th scope="col"> order date</th>  
            <th scope="col"> Action</th>   
          </tr>
                      
        </thead>   
        <tbody className='overflow-scroll' >
          { analytic.map((order)=>(
            <tr key={order.id} className='overflow-scroll'>
            {/* <td><img src={order.product_img} alt="order image"/></td> */}   


            <td>{order.product_name}</td>      
            <td>{order._id}</td>
            <td>{order.product_price}</td>
            <td>{order.user_email}</td>    
            <td>{order.createdAt}</td> 
            <td>
               {/* <button className='border-none'><MdDelete /></button>   */}
             <button onClick={()=>{dataPrint(order.product_id)}}><MdOutlinePreview /></button></td>
            </tr>
          )) }
        </tbody>
      </table>

      }</div> 




    </div>
  )
}
