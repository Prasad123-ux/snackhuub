

import { useState } from "react";
import Carousel from './Option/Carousel';
import Footer from './Option/Footer';

export default function ShopRegister() {
  const [shopOwnerData, setShopOwnerData]= useState({name:"",email:"", password:"", mobile_no:"", shopName:"", contact_no:"",Phone_no:"", address:'',city:"", state:"", zip:'',pan:"", gstin:"", bankName:"",branchName:"", IFSC:"", accountNumber:"" })

  const onClick=(e)=>{
    setShopOwnerData({...shopOwnerData, [e.target.name]:e.target.value})
    

  }

  const handleFormSubmit=async (e)=>{
    e.preventDefault()
    
     
      fetch('https://foodie-backend-f64l.onrender.com/api/ownerRegister', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(shopOwnerData)
      })
     .then((response)=>{
      return response.json()

     }).then((data)=>{
      console.log(data)

     })
     .catch((err)=>{
      console.error(err)

     })
     
     console.log(shopOwnerData)
   
  console.log(shopOwnerData)
  }
  return (
    <>
  
       <Carousel/>
    <div className='accordion mx-auto mt-5 m' id="accordionExample">
      <div className='accordion-header d-flex justify-content-center '>
        <button className='btn btn-primary   '  type="button"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Register me as a Shop Owner</button> 
        </div>
        <div className='accordion-collapse collapse '  data-bs-parent="#accordionExample" id="collapseOne">
          <div className='accordion-body'>
          <div className="container">
      
     
      <form className="row g-3 " onSubmit={handleFormSubmit}>
        <div className="fw-bold fs-4">Personal Detail</div>
  <div className="col-md-4">
    <label htmlFor=" validationDefault01" className="form-label">Owner Name (Name & sirName)</label>
    <input type="text" className="form-control" onChange={onClick}  name="name" id="validationDefault01" required/>
    
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Email</label>
    <input type="email" className="form-control" onChange={onClick} name="email" id="validationDefault02" required/>
    
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault03" className="form-label">Mobile Number </label>
    <input type="numeric" className="form-control" onChange={onClick} name="mobile_no" id="validationDefault03" required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault04" className="form-label">Password </label>
    <input type="password" className="form-control" onChange={onClick} name="password" id="validationDefault04" required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label">Confirm Password </label>
    <input type="password" className="form-control"   id="validationDefault05" required/>
  </div>
  <hr></hr>
  <div className="fw-bold fs-4">Shop Detail</div>
  <div className="col-md-6">
    <label htmlFor="validationDefault06" className="form-label">Shop Name </label>
    <input type="text" className="form-control" name="shopName" onChange={onClick} id="validationDefault06" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault07" className="form-label">Contact Number</label>
    <input type="numeric" className="form-control" onChange={onClick} name="contact_no" id="validationDefault07" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault08" className="form-label">Phone Number</label>
    <input type="numeric" className="form-control" onChange={onClick} name="Phone_no" id="validationDefault08" required/>
  </div>
  
  
  <div className="col-12">
    <label htmlFor="validationDefault09" className="form-label"> Shop Address</label>
    <input type="text" className="form-control" onChange={onClick}  name="address" id="validationDefault09" placeholder="1234 Main St" required/>
  </div>
 
  <div className="col-md-6">
    <label htmlFor="validationDefault10" className="form-label">City</label>
    <input type="text" className="form-control" onChange={onClick} name="city" id="validationDefault10" required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault11" className="form-label">State</label>
    <input type="text" className="form-control" onChange={onClick} name="state" id="validationDefault11" required/>
  </div>
  <div className="col-md-2">
    <label htmlFor="validationDefault12" className="form-label">Zip</label>
    <input type="text" className="form-control" onChange={onClick} name="zip" id="validationDefault12" required/>
  </div> 
  <hr></hr>
  <div className="fw-bold fs-4">Validity Detail</div>
  
  <div className="col-md-3">
 
    <label htmlFor="validationDefault12" className="form-label">Pan Card Number</label>
    <input type="numeric" className="form-control" onChange={onClick} name="pan" id="validationDefault12" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault0" className="form-label">GSTIN Number</label>
    <input type="numeric" className="form-control" onChange={onClick} name="gstin" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputContactNumber4" className="form-label">Bank Name </label>
    <input type="numeric" className="form-control" name="bankName" onChange={onClick} id="inputPassword4" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputContactNumber13" className="form-label">Branch Name </label>
    <input type="text" className="form-control" onChange={onClick}  name="branchName" id="validationDefault13" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault14" className="form-label">IFSC code </label>
    <input type="numeric" className="form-control" onChange={onClick} name="IFSC" id="validationDefault14" required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault15" className="form-label">Account Number </label>
    <input type="numeric" className="form-control" onChange={onClick} name="accountNumber" id="validationDefault15" required/>
  </div>
<hr></hr>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Make my shop</button>
  </div>
</form>
    </div>

          </div>
          
           </div>
<Footer/>
    </div>
   
    </>
  )
}
