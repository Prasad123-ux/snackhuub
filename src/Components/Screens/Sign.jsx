// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../Option/Footer"
import { useNavigate } from "react-router-dom"


export default function Sign() {
  const [detail, setDetail]= useState(false)
const [credentials, setCredentials]= useState({name:"", lastName:"", email:"",password:"", mobile_no:"", location:"", address:"", city:"", landMark:"", pinCode:""})
   const navigate= useNavigate()

const handleFormSubmit=async (e)=>{
    e.preventDefault()
    await fetch('https://foodie-backend-4.onrender.com/api/createUser', {
    method:'POST',
    headers:{
      'Content-type':"application/json"
    },
    
    body:JSON.stringify({name:credentials.name, lastName:credentials.lastName, email:credentials.email, password:credentials.password,mobile_no:credentials.mobile_no, location:credentials.location , address:credentials.address, city:credentials.city, landMark:credentials.landMark, pinCode:credentials.pinCode})
   })
   .then((response)=>{
    if(response.ok){
      
      return response.json()
    }
    setDetail(true)
    return new Error(response.statusText)
    
 

   }).then((data)=>{
    console.log(data)
    const token= data.token 
    const role= data.role
   window.localStorage.setItem('token', token)
   window.localStorage.setItem('role', role)
   const usedToken= window.localStorage.getItem('token')
   if (usedToken!=='undefined'){
    
    navigate('/')
   }
   
      

   }).catch((err)=>{
    console.error(err)


   })
   
   
  }
  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <>
    <div className=" mx-auto text-center ">
      
      <h2 className="mt-2 mb-5">Registration Form</h2>
      { detail===true ?
<div className=" mt-5 text-danger mx-auto  " style={{width:"50%"}}>  Sorry!  Email already registered,   Please login </div>:""
}
      <form className="  row  register-form mx-auto  " onSubmit={handleFormSubmit}>
      <div className="form-group  mt-3 mx-auto col-6 sign-email ">
        
    <label >First Name</label>
    <input type="text" className="form-control text-center"   name="name" placeholder="e.g. Prasad" onChange={onChange} required/>
  </div>
  <div className="form-group mt-3 col-6 sign-email   mx-auto">
    <label >lastName</label>
    <input type="text" className="form-control text-center " onChange={onChange} name="lastName" aria-describedby="emailHelp" placeholder="e.g. Metkar" required/>
    
  </div>
  <div className="form-group mt-3 col-6   mx-auto sign-email">
    <label >Email address</label>
    <input type="email" className="form-control text-center"  onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="e.g. prasadmetkar333@gmail.com" required/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3 col-6 mx-auto sign-email">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control text-center"  onChange={onChange} name="password" placeholder="e.g. 454iikj56" required/>
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email">
    <label >Mobile Number</label>
    <input type="number" className="form-control text-center"  name="mobile_no" onChange={onChange} aria-describedby="emailHelp" placeholder="e.g. 9307173845"required />
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email" >
    <label >Location</label>
    <input type="address" className="form-control text-center" onChange={onChange}  name="location" aria-describedby="emailHelp" placeholder="e.g. Nanded maharashtra 431712" required/>
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email" >
    <label >Address</label>
    <input type="address" className="form-control text-center" onChange={onChange}  name="address" aria-describedby="emailHelp" placeholder="e.g. Nanded maharashtra 431712" required/>
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email" >
    <label >City</label>
    <input type="address" className="form-control text-center" onChange={onChange}  name="city" aria-describedby="emailHelp" placeholder="e.g. Nanded maharashtra 431712" required/>
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email" >
    <label >Landmark</label>
    <input type="address" className="form-control text-center" onChange={onChange}  name="landMark" aria-describedby="emailHelp" placeholder="e.g. Nanded maharashtra 431712" required/>
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  <div className="form-group mt-3 col-6  mx-auto sign-email" >
    <label >Pincode</label>
    <input type="address" className="form-control text-center" onChange={onChange}  name="pinCode" aria-describedby="emailHelp" placeholder="e.g. Nanded maharashtra 431712" required/>
    {/* <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small> */}
  </div>
  
  
  <button type="submit" className=" mt-3  btn btn-primary btn-submit mx-auto" >Submit</button>
 
  <Link  type="submit" className="btn btn-danger mt-3  btn-submit mx-auto" to="/login"> Already a user</Link>
  
 </form>



    </div>
    <Footer/>
    </>
  )
}
