
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Footer from "../Option/Footer"
import "../../Styles/login.css"
import "../../Styles/login.css"

export default function Login() {
  const [credentials, setCredentials]= useState({ email:"",password:"",})
  const [detail, setDetail]= useState(false)
   let navigate= useNavigate()
  const handleFormSubmit=async (e)=>{
    e.preventDefault()
    await fetch('http://localhost:5000/api/userLogin', {
    method:'POST',
    headers:{
      'Content-type':"application/json"
    },
    body:JSON.stringify({email:credentials.email, password:credentials.password })
   })
   .then((response)=>{
    // console.log(response)
    if(response.ok){
  
      return response.json()
    }
    setDetail(true)
    // console.log(response.statusText)
    return new Error(response.statusText)

   }).then((data)=>{
  
    
    console.log(data)
    
     const token=data.token
     const role= data.role
      console.log(data.token)

  
    
    window.localStorage.setItem('token',token)
    window.localStorage.setItem('role', role)
     if(token!==undefined){
      const expiresIn=Date.now()+(30 * 24 * 60 * 60 * 1000)
      localStorage.setItem('expiresIn',expiresIn)
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
    <div className="mx-auto text-center">
        {/* <div className="p-5 "> */}
      
      <h2 className=" mt-2 mb-5">User Login</h2>
      <form  onSubmit={handleFormSubmit}>
    
        
    
  <div className="form-group email   mx-auto ">
    <label >Email address</label>
    <input type="email" className="form-control "  onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group mx-auto email mt-4 ">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  onChange={onChange} name="password" placeholder="Password" required/>
  </div>
  
  
  <button type="submit" className=" m-3 btn btn-primary">Submit</button>
  <Link  type="submit" className="btn btn-danger m-3" to="/createUser"> New user</Link>
</form>
<Link className="">Forget Password</Link>
{ detail ?
<div className=" mt-5 text-danger mx-auto  " style={{width:"50%"}}>  Sorry!  Invalid Username and Password </div>:""
}

    {/* </div> */}
    <Footer/>
    </div>
  )
}
