
 import  { useEffect, useState } from 'react'
import "../Styles/ownerProfile.css"
import OwnerProducts from './Option/OwnerProducts';
import OshopDetail from './Option/OshopDetail';
import OdocumentDetail from './Option/OdocumentDetail';
import Oanalytics from './Option/Oanalytics';
import Ofeedback from './Option/Ofeedback';
import Footer from './Option/Footer';





export default function OwnerProfile() {

    const [activeComponents, setActiveComponents]= useState('orders')
    const [ownerDetail, setOwnerDetail]= useState()
    const [changeDetail, setChangeDetail]= useState({shopName:"",  mobile_no:"", location:""})
  
  
    const renderComponent=(componentName)=>{
      setActiveComponents(componentName)
      
    }
  
    const token= localStorage.getItem('token')
    const fetchOwnerProfileDetail=()=>{
  
      fetch('https://foodie-backend-4.onrender.com/api/getOwnerDetail',{
        method:"POST",
        body:JSON.stringify({token:token}),
        headers:{
          "Content-type":"application/json"
  
  
        }
  
      }).then((response)=>{
  
     if(response.ok){
      return response.json()
     }else{
      throw new Error(response.statusText)
     }
  
      }).then((data)=>{
        // console.log(data.data)
        setOwnerDetail(data.data)
  
      })
    }
  
  
    const handleUpdatedData=(e)=>{
      e.preventDefault()
  
      fetch('https://foodie-backend-4.onrender.com/api/updateOwnerDetail', {
        method:"POST",
        body:JSON.stringify({token:token, userDetail:changeDetail}),
        headers:{
          "Content-type":"application/json"
        }
      }).then((response)=>{
        if(response.ok){
          return response.json()
        }else{
          throw new Error(response.statusText)
        }
  
  
      }).then((data)=>{
        console.log(data)
        
      
  
      })
  
      console.log("data")
    }
    const onchange=(e)=>{
      setChangeDetail({...changeDetail,[e.target.name]:e.target.value})
  
    }
    console.log(changeDetail)
   useEffect(()=>{
  fetchOwnerProfileDetail()
   },[])
  
  return (


       <div className='owner-mains mx-auto'>

<div className='text-white profile_section d-flex justify-content-lg-between  justify-content-around '>
  <div className='row  profile_name'> 
  <div className=' col-lg-12 col-12 userName fw-bolder'>{ ownerDetail && ownerDetail.shopName !==undefined ? ownerDetail.shopName :""}</div>
  <div className='col-lg-3  col-12 mobile_number fw-medium'>{ownerDetail && ownerDetail.mobile_no !== undefined  ? ownerDetail.mobile_no :""}</div> 
  <div className='col-lg-5 col-12 email fw-medium'> {ownerDetail && ownerDetail.email !==undefined  ? ownerDetail.email :""}</div>
  </div>
  <div className='edit-btn'>
    




    <button type="button" className="   text-white btn  d-block d-sm-none edit  " data-toggle="modal" data-target="#exampleModalCenter">
EDIT
</button>
  
<button type="button" className="btn text-white d-none d-sm-block edit   " data-toggle="modal" data-target="#exampleModalCenter">
EDIT PROFILE
</button>
</div>

<div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLongTitle">Profile Detail</h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form className='needs-validation'  onSubmit={handleUpdatedData} >

<div className='col-12'>
<label htmlFor="validationDefault01" className="form-label">Shop Name</label>
<input type="text" className="form-control" id="validationDefault01" name="shopName" onChange={onchange} placeholder="First Name"  required/>
<div className="invalid-feedback">
Please Enter Your first Name
</div>
</div>

<div className='col-12'>
<label htmlFor="validationDefault04" className="form-label">Mobile Number</label>
<input type="number" className="form-control" id="validationDefault04" name="mobile_no" onChange={onchange} placeholder="Mobile Number"  required/>
<div className="invalid-feedback">
Please Enter Your Mobile Number
</div>
</div>
<div className='col-12'>
<label htmlFor="validationDefault05" className="form-label">Location</label>
<input type="text" className="form-control" id="validationDefault05"  name="location" onChange={onchange} placeholder="Location" required/>
<div className="invalid-feedback">
Please Enter Your Location
</div>
</div>

 <div className="modal-footer">
<button  className="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="submit" className="btn btn-primary">Save changes</button>
</div> 
</form>
</div>


</div>
</div>
</div>
</div>
<div className=' written mt-5 row p-lg-5  p-0 d-block flex-column  d-lg-flex'>
  <div className='btns col-12 col-lg-3 '>
    <ul className='lists row  mx-auto'>
      <li className={activeComponents==="orders" ? 'active col-4 col-sm-4    col-md-2 col-lg-2':"col-3   col-lg-12 col-md-2 "} onClick={()=>{renderComponent('orders')}}>
    <button className='owner-front-button '> Products</button>
    </li>
    <li className={activeComponents==="foodies"? 'active col-4 col-sm-4  col-lg-12 col-md-2':" col-3 col-sm-4 col-lg-12 col-md-2" } onClick={()=>{renderComponent('foodies')}}>
    <button className=' owner-front-button '>Details </button>
    </li> 
    <li className={activeComponents==="favourites"? 'active col-4 col-sm-4  col-lg-12 col-md-2':" col-3 col-sm-4 col-lg-12 col-md-2"} onClick={()=>{renderComponent('favourites')}}>
    <button className=' owner-front-button '> Documents</button>              
    </li>
    <li className={activeComponents==="payments" ? "active col-4 col-sm-4  col-lg-12 mt-2 mt-sm-0  col-md-2":" col-3 col-sm-4 mt-2 mt-sm-0 col-lg-12  col-md-2"} onClick={()=>{renderComponent('payments')}}>
    <button className=' owner-front-button '>Analytics </button>
    </li>
    <li className={activeComponents==="address" ? "active col-4 col-sm-4  col-lg-12 mt-2 mt-sm-0 col-md-2":" col-3 col-sm-4 mt-2 mt-sm-0 col-lg-12 col-md-2"} onClick={()=>{renderComponent('address')}}>
    <button className=' owner-front-button '>Rewards </button>
    </li>
    <li className={activeComponents==="settings" ? "active col-4 col-sm-4 mt-2 mt-sm-0 col-lg-12 col-md-2":" col-3 col-sm-4  mt-2 mt-sm-0 col-lg-12 col-md-2"} onClick={()=>{renderComponent('settings')}}>
    <button className=' owner-front-button  '>Feedback </button>
    </li>
   
    </ul>
  </div>
  
  <div className='content col-9  mx-auto d-flex justify-content-center align-middle mt-5'> 
  {/* <Porders/> */}
  {activeComponents==="orders" && <OwnerProducts/>}
  {activeComponents==="foodies" && <OshopDetail  shopName={ownerDetail.shopName} name={ownerDetail.name} email={ownerDetail.email} mobile_no={ownerDetail.mobile_no} contact_no={ownerDetail.contact_no} phone_no={ownerDetail.Phone_no}  address={ownerDetail.address}  city={ownerDetail.city} state={ownerDetail.state} zip={ownerDetail.zip}/>}
  {activeComponents==="favourites" && <OdocumentDetail pan={ownerDetail.pan}  gstin={ownerDetail.gstin} bankName={ownerDetail.bankName} branchName={ownerDetail.branchName} ifsc={ownerDetail.ifsc}  accountNumber={ownerDetail.accountNumber}/>}
  {activeComponents==="payments" && <Oanalytics/>}
  {activeComponents==="address" && <Ofeedback/>}
  {activeComponents==="settings" && <Ofeedback/>}
  </div>
</div>
<Footer/>
</div>
)

  
}   

