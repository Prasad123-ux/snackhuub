import React, { useEffect, useState } from 'react'
import { MdVerified } from "react-icons/md";
import PropTypes from 'prop-types'

export default function Paddress({location}) {
  console.log(location)
  const [address, setAddress]= useState([])
  const [value, setValue]= useState({address:""})


  useEffect(()=>{
    setAddress([location])
  },[location,value])
 

 const saveValue=(e)=>{  
  setValue(e.target.value)

 }
 
 const fitValue=()=>{
  setAddress([...address,value])
  // setValue(" ") 
 }
  console.log(address)
  return (
    <div className='row text-center'>
        <h2 className='col-12'>Addresses</h2>
        {address && address.length>0 ? 
            address.map((item, index)=>{
              return <div key={index} className='col-12 row mt-5'>
                {

index===0 ? <span className='col-1 icon'><MdVerified /></span>:" "
                }
                
              
                <span className='fw-bold text-secondary  col-'>{item}</span>
             {/* <button className='col-2 btn btn-primary text-warning bg-transparent border-secondary  fw-bold'> Edit Address</button> */}
             </div>   
              
            })
          

         
        :<div className='mx-auto' >
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_252/NoSavedAddress_ttsdqs" className="d-block w-50 mt-2 mx-auto" alt="play store"/>
              <span className='d-block fw-bolder mt-2'>Cant find a door to knock</span>
              <span>You dont have an address to deliver.</span>

        </div>
      }
       
        {/* <button className='  btn btn-primary w-50 fw-bold bg-transparent text-primary  '  data-dismiss="modal" aria-label="close" aria-hidden> Add New Address </button> */}
       
      
      <div className='mx-auto mt-5 '>
        
<button type="button" className="btn btn-primary w-50 fw-bold bg-transparent text-primary" data-toggle="modal" data-target="#exampleModal">
add another address
</button>
</div>
<div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New Address</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input type="text" placeholder='enter your New address' onChange={saveValue} ></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={fitValue}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

Paddress.propTypes={
  location:PropTypes.string.isRequired
}