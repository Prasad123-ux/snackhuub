import  {  useState } from 'react'

export default function OshopDetail({name, shopName, address, state, email, city, zip, contact_no, Phone_no, mobile_no}) {
  const [productData, setProductData]= useState({shopName:"", ownerName:"", email:"", mobileNumber:"", contactNumber:"", phoneNumber:"",location:"", city:"", state:"", zipPin:""})



  const token= localStorage.getItem('token')
  const handleUpdatedShopData=(e)=>{
    e.preventDefault()

    fetch('  https://foodie-backend-9.onrender.com/api/updateShopDetail', {   
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({token:token, data:productData})
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
      console.error(err)

    })
  }

const onchange=(e)=>{
  setProductData({...productData, [e.target.name]:e.target.value})
}
  return (
    <div className='w-100 text-center'>
      <h2 className='text-center '>Shop Detail</h2>
      <div className='row w-100' >
      
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Shop Name</span>:-<span className=' fs-5 fw-bold'>{shopName}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Owner Name</span>:-<span className=' fs-5 fw-bold'>{name}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Email</span>:-<span className=' fs-5 fw-bold'>{email}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'> Personal Mobile Number</span>:-<span className=' fs-5 fw-bold'>{mobile_no}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Contact Number</span>:-<span className=' fs-5 fw-bold'>{contact_no}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Phone Number</span>:-<span className=' fs-5 fw-bold'>{Phone_no}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Location</span>:-<span className=' fs-5 fw-bold'>{address}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>City</span>:-<span className=' fs-5 fw-bold'>{city}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>State</span>:-<span className=' fs-5 fw-bold'>{state}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Zip pin</span>:-<span className=' fs-5 fw-bold'>{zip}</span></div>




      </div>
      <div className='edit-btn'>
            
      <button type="button" className="   text-white btn  bg-primary text-white mt-5 rounded d-block d-sm-none edit  " data-toggle="modal" data-target="#exampleModalCenters">
  EDIT
</button>
          
<button type="button" className="btn bg-primary rounded text-white mt-5 d-none d-sm-block edit   " data-toggle="modal" data-target="#exampleModalCenters">
  Make Some Changes
</button>
</div>


      <div className="modal fade" id="exampleModalCenters"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Profile Detail</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form className='needs-validation'  onSubmit={handleUpdatedShopData} >
        
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault01" className="form-label">Shop Name</label>
    <input type="text" className="form-control" id="validationDefault01" name="shopName" onChange={onchange} placeholder="e.g :Styles Shop"  required/>
    <div className="invalid-feedback">
      Please Enter Your Shop Name
    </div>
        </div>

        
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault02" className="form-label">Owner Name</label>
    <input type="text" className="form-control" id="validationDefault02"  name="ownerName" onChange={onchange} placeholder="e.g:jack kallis" required/>
    <div className="invalid-feedback">
      Please Enter Your owner Name
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault03" className="form-label">Address</label>
    <input type="address" className="form-control" id="validationDefault03" name="Address" onChange={onchange}  placeholder="e.g: Hyderabad Telangan" required/>
    <div className="invalid-feedback">
      Please Enter Your Address
    </div>
    </div> 
        
    <div className='col-12 mt-4'>
        <label htmlFor="validationDefault04" className="form-label"> Personal Mobile Number</label>
    <input type="number" className="form-control" id="validationDefault04" name="mobileNumber" onChange={onchange} placeholder="e.g:9307173845"  required/>
    <div className="invalid-feedback">
      Please Enter Your Personal Mobile Number
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault05" className="form-label">Contact Number</label>
    <input type="number" className="form-control" id="validationDefault05"  name="contactNumber" onChange={onchange} placeholder="451278" required/>
    <div className="invalid-feedback">
      Please Enter Your Contact Number
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault06" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="validationDefault06"  name="phoneNumber" onChange={onchange} placeholder="e.g:65551541" required/>
    <div className="invalid-feedback">
      Please Enter Your Contact Number
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault07" className="form-label">State</label>
    <input type="state" className="form-control" id="validationDefault07"  name="location" onChange={onchange} placeholder="e.g: Maharashtra" required/>
    <div className="invalid-feedback">
      Please Enter Your Contact Number
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault08" className="form-label">City</label>
    <input type="city" className="form-control" id="validationDefault08"  name="city" onChange={onchange} placeholder="e.g: Hyderabad" required/>
    <div className="invalid-feedback">
      Please Enter Your City
    </div>
        </div>
        <div className='col-12 mt-4'>
        <label htmlFor="validationDefault09" className="form-label">zip pin</label>
    <input type="zip pin" className="form-control" id="validationDefault09"  name="zipPin" onChange={onchange} placeholder="e.g:431712" required/>
    <div className="invalid-feedback">
      Please Enter Your Zip Pin
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
  )
}

