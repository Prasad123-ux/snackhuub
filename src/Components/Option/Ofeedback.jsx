import { useEffect, useState } from 'react'
import { MdReviews } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Ofeedback() {
  const [OwnerReview, setOwnerReview]= useState([])
  const navigate= useNavigate()


  const token= localStorage.getItem('token')

  useEffect(()=>{
    const getReviewProductData=()=>{
      fetch('http:///localhost:5000/api/getReviewProduct',{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({token:token})
    
    
      }).then((response)=>{
        if(!response.ok){
          throw new Error(response.statusText)
        }else{
          return response.json()
          
        }
    
      }).then((data)=>{
        console.log(data)
        setOwnerReview(data.data)
    
      }).catch((err)=>{
        console.error(err)
    
      })
    }
    
    getReviewProductData()
    }, [])

  useEffect(()=>{
    
  })
  const dataPrint=(id)=>{
    console.log(id)
   
   navigate(`/productDetail/${id}`);
   console.log(id)
 }
 
  return (
    <div className='w-100'>
      <h2 className='text-center mb-5'> Feedback and Reviews</h2>
            <div className=" bg-warning a-orders row"><span className='col-9 '><MdReviews /></span> <span className='col-3'>{OwnerReview.length}</span><div className='col-12'> Total Ratings</div></div>
  
            <div className='w-100 mt-5 overflow-scroll ' style={{height:"300px"}}> {
      <table className='table '>
        <thead >
          <tr >
            {/* <th scope="col">item image</th> */}
            <th scope="col" > Item name</th>
            <th scope="col"> Rating</th>
            <th scope="col"> User Name</th>    

            <th scope="col"> Feedback</th>
           
            <th scope="col"> Action</th>   
          </tr>
                      
        </thead>   
        <tbody>
          { OwnerReview.map((order)=>(
            <tr key={order.id}>
            {/* <td><img src={order.product_img} alt="order image"/></td> */}   


            <td>{order.product_name}</td>      
            <td>{order.product_rating}.0</td>
            <td>{order.userMail}</td>
          
            <td>{order.product_review}</td> 
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
