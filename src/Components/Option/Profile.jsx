import  { useEffect, useState } from 'react'
import "../../Styles/profile.css"
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import Porders from './Porders';
import Poffers from './Poffers';
import Pfavourites from './Pfavourites';
import Paddress from './Paddress';
import Psettings from './Psettings';
import Footer from './Footer';
import Ppayment from './Ppayment';
import { useSelector } from 'react-redux';
export default function Profile() {

  
  const [activeComponents, setActiveComponents]= useState('orders')
  const [userDetails, setUserDetail]= useState({name:"",lastName:"",mobile_no:"",email:"",location:""})
  const [changeDetail, setChangeDetail]= useState({first_name:"", last_name:"", mobile_number:"", location:""}) 
  const token= useSelector((state)=>state.foods.token)


  const renderComponent=(componentName)=>{
    setActiveComponents(componentName)
    
  }

  // const token= localStorage.getItem('token')
  const fetchProfileDetail=()=>{

    fetch('  https://foodie-backend-9.onrender.com/api/getUserDetail',{
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
      setUserDetail({name:data.name,lastName:data.sirName,mobile_no:data.mobile_no,email:data.email,location:data.location})

    })
  }


  const handleUpdatedData=(e)=>{
    e.preventDefault()

    fetch('  https://foodie-backend-9.onrender.com/api/updateUserDetail', {
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
fetchProfileDetail()
 },[])
 console.log(userDetails)


  return (


    
    <div className='mains mx-auto mt-5'>
      


        <div className='text-white profile_section d-flex justify-content-lg-between mt-5 justify-content-around '>
          <div className='row  profile_name mt-5'> 
          <div className=' col-lg-12 col-12 userName fw-bolder'> {userDetails.name}  {userDetails.lastName}</div>
          <div className='col-lg-3  col-12 mobile_number fw-medium'>{userDetails.mobile_no}</div> 
          <div className='col-lg-5 col-12 email fw-medium'>{userDetails.email}</div>
          

          </div>
          <div className='edit-btn mt-5'>
            {/* <button className=' text-white btn d-none d-sm-block  edit '>EDIT PROFILE</button>  */}
            



            {/* <button className=' text-white btn  d-block d-sm-none edit '>EDIT </button> */} 


            <button type="button" className="   text-white btn  d-block d-sm-none edit  " data-toggle="modal" data-target="#exampleModalCenter">
  EDIT
</button>
          
<button type="button" className="btn text-white d-none d-sm-block edit " data-toggle="modal" data-target="#exampleModalCenter">  
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
        <label htmlFor="validationDefault01" className="form-label">First Name</label>
    <input type="text" className="form-control" id="validationDefault01" name="first_name" onChange={onchange} placeholder="First Name"  required/>
    <div className="invalid-feedback">
      Please Enter Your first Name
    </div>
        </div>
        <div className='col-12'>
        <label htmlFor="validationDefault02" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="validationDefault02"  name="last_name" onChange={onchange} placeholder="Last Name" required/>
    <div className="invalid-feedback">
      Please Enter Your Last  Name
    </div>
        </div>
        {/* <div className='col-12'>
        <label htmlFor="validationDefault03" className="form-label">Email</label>
    <input type="email" className="form-control" id="validationDefault03" name="email" onChange={onchange}  placeholder="Email" required/>
    <div className="invalid-feedback">
      Please Enter Your Email
    </div>
    </div> */}
        
    <div className='col-12'>
        <label htmlFor="validationDefault04" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" id="validationDefault04" name="mobile_number" onChange={onchange} placeholder="Mobile Number"  required/>
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
       {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>  */}
      
    </div>
  </div>
</div>





        </div>
        <div className=' written mt-5 row p-lg-5 p-0 d-block flex-column  d-lg-flex'>
          <div className='btns col-12 col-lg-3 '>
            <ul className='lists row '>
              <li className={activeComponents==="orders" ? 'active col-3 col-sm-2  col-lg-12':"col-3  col-sm-2  col-lg-12"} onClick={()=>{renderComponent('orders')}}>
            <button className=' front-button '><FaPersonWalkingLuggage /> Orders</button>
            </li>
            <li className={activeComponents==="foodies"? 'active col-3 col-sm-2  col-lg-12':" col-3  col-sm-2 col-lg-12" } onClick={()=>{renderComponent('foodies')}}>
            <button className=' front-button '><BiSolidOffer />Foodies</button>
            </li>
            <li className={activeComponents==="favourites"? 'active col-3 col-sm-2  col-lg-12':" col-3 col-sm-2  col-lg-12"} onClick={()=>{renderComponent('favourites')}}>
            <button className=' front-button '><FaPersonWalkingLuggage className='' /> Favourites</button>              
            </li>
            <li className={activeComponents==="payments" ? "active col-3 col-sm-2  col-lg-12 ":" col-3 col-sm-2  col-lg-12"} onClick={()=>{renderComponent('payments')}}>
            <button className=' front-button '><MdPayments className=''/> Payments</button>
            </li>
            <li className={activeComponents==="address" ? "active col-3 col-sm-2  col-lg-12":" col-3 col-sm-2  col-lg-12"} onClick={()=>{renderComponent('address')}}>
            <button className=' front-button '><FaAddressBook /> Address</button>
            </li>
            <li className={activeComponents==="settings" ? "active col-3 col-sm-2  col-lg-12":" col-3 col-sm-2  col-lg-12"} onClick={()=>{renderComponent('settings')}}>
            <button className=' front-button '><IoMdSettings />Settings</button>
            </li>
           
            </ul>
          </div>
          
          <div className='content col-9  mx-auto d-flex justify-content-center align-middle mt-5'> 
          {/* <Porders/> */}
          {activeComponents==="orders" && <Porders/>}
          {activeComponents==="foodies" && <Poffers/>}
          {activeComponents==="favourites" && <Pfavourites/>}
          {activeComponents==="payments" && <Ppayment/>}
          {activeComponents==="address" && <Paddress location={userDetails.location}/>}
          {activeComponents==="settings" && <Psettings/>}
          </div>
        </div>
      


       {/* <Footer/> */}
    
    </div>
  )
}

