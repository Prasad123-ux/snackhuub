import { useState } from 'react'
 import PropTypes from 'prop-types';
 import { Link } from 'react-router-dom';



export default function Modals({userDetail}) {
  console.log(userDetail)
  const [userData, setUserData]= useState({name:"",email:"", mobile_no:"", location:""})              




  const onChange=(e)=>{                   
             
       setUserData({...userData, [e.target.name]:e.target.value}) 
  
      }
    
    
      const handleFormSubmit=(e)=>{    
        e.preventDefault()
        console.log(userDetail)
       
      
         }
       const conformOrder=(id)=>{
         const token=localStorage.getItem('token')
         fetch('https://foodie-backend-4.onrender.com/api/setOrders', {
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify({token:token, id:id})
         }).then((response)=>{
           if(response.ok){
             return response.json()
           }
    
         }).then((data)=>{
            console.log(data)
    
         }).catch((err)=>{
         console.error(err)
    
         })
       }
        // console.log(userDetail)
    
  return (
    <>
    <div>
      <div className="container">
  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Check Your Detail </h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
          <h6>Name: <span   className="text-md-end">{userDetail} {userDetail.sirName}</span>  </h6>
          <hr/>
          <h6>Mobile no:           <span>{userDetail.mobile_no}  </span></h6>
          <hr/>
          <h6>Email:        <span> {userDetail.email}</span>      </h6>
          <hr/>
          <h6>Location:        <span> {userDetail.location}</span>    </h6>
          <hr/>
          </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer d-flex justify-content-between">
          {/* <button type="button" className="btn btn-success" >Conform order</button> */}
          <button type="button justify-left" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info-update-modal" data-dismiss="modal" >Update Detail </button> 
          {/* <button type="button" className="btn btn-success" data-bs-toggle="modal"  data-bs-target="#info-update-modal">Conform order</button> */}


           <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button> 
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" onClick={()=>{conformOrder()}} > Conform order</button>
        </div>
        
      </div>
    </div>
  </div>








  
  
</div>
    </div>
    {/* <!-- Button trigger modal -->   here is first modal copied*/}


{/* <!-- Modal --> */}
<div className="modal fade " id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Order Successfully Placed !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">🎊🎊Thank You! We will deliver your order soon.. 🎉🎉🎉</span>
      <h6> For more update check on order</h6>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <Link   className="btn btn-secondary"  to="/orders">Check my order </Link>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">We are waiting...</button>
      </div>
    </div>
  </div>
</div>   


<div className=" modal fade" id="info-update-modal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex">
        <h1 className="modal-title fs-2" > Enter A new delivery Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>
      <div className="modal-body">
        <h4 id="exampleModal">Add a New Address</h4>
        
        <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
      <label  className="form-label">Full Name (first Name and Last Name)</label>
      <input type="text" id="disabledTextInput" name="name" onChange={onChange} className="form-control"/>
    </div>
    
    <div className="mb-3">
      <label  className="form-label">City</label>
      <input type="text" id="disabledTextInput" name="location" onChange={onChange} className="form-control" placeholder="Hyderabad"/>
    </div>
    <div className="mb-3">
      <label  className="form-label">Mobile Number</label>
      <input type="Number" id="disabledTextInput" name="mobile_no"onChange={onChange} className="form-control" placeholder="+91000000"/>
    </div>
    <div className="mb-3">
      <label  className="form-label">Email</label>
      <input type="email" id="disabledTextInput" name="email" onChange={onChange} className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary" data-target="#myModal" data-toggle="modal" data-bs-dismiss="modal">Change for Order</button>

        </form>


      </div>
      <div className="modal-footer">
         <Link   className="btn btn-secondary"  >Change for my Profile </Link>
      {/* <button type="submit" className="btn btn-primary" data-target="#myModal" data-toggle="modal" data-bs-dismiss="modal">Change for Order</button> */}
      </div>
    </div>
  </div>


</div>
</>

  )
}

Modals.propTypes = {
  userDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sirName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile_no: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired
};