import React from 'react' 
import { Link } from 'react-router-dom'

export default function Blank() {
  return (
    <div className='mt-5 text-center'>
        <span className='text-center fw-bold fs-5  mt-5 '> Please wait we are working on this Page !</span><hr></hr>
        <Link to="/">Go for Food !</Link>


      
    </div>
  )
}
