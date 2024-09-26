
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { SiSimpleanalytics } from "react-icons/si";
import { LuUserCheck } from "react-icons/lu";


export default function Navbar() {
  const [item, setItem]= useState()
  
  // console.log(cartLength)
  const navigate= useNavigate()
  const handleLogOut=()=>{
   localStorage.removeItem('token');

    navigate('/login')
    
  }
useEffect(()=>{
  const token= localStorage.getItem('token')
  setItem(token)
}, [])
console.log(item)
const token =localStorage.getItem('token')
const user= localStorage.getItem('user')

console.log(token)

  
  
  return (
    <div  >
      <nav className= { window.scrollY<250 ?"navbar navbar-expand-lg navbar-dark bg-success  fixed-top " :" navbar navbar-expand-lg navbar-dark bg-success "}>
  <div className="container-fluid d-lg-block d-flex flex-row">
    <Link className="navbar-brand fs-1 fst-italic "  to="/">Foodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
          
        </li>
        {(token && token!=='undefined')? (
           <li className="nav-item">
          <Link className="nav-link active fs-5"  to="/myOrders">myOrders</Link>
        </li>):"" }
        
      
      </ul>
      {/* <Filters/> */}
      {/* <Filters/> */}
      <div className='flex'>
      
    {(!token || token==='undefined') ?(<div>
    <Link className="btn  bg-white  mx-1 text-success" to="/login">Login </Link>
        
        <Link className="btn bg-white mx-1 text-success" to="/createUser">SingUp</Link></div>
        ): <div>
         
        <Link  className="btn bg-white mx-1 text-success" to='/myCart'>my Cart 
        
        <span className="position-absolute translate-top badge rounded  mt-4 me-5 p-1  bg-danger"></span>
        </Link>
    <div className="btn bg-white mx-1 text-danger "  data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal"    >Logout</div>
   </div> }
        
          </div>
          {/* <button  className=" btn bg-primary mt-3 fs-6 fw-bolder" onClick={handleSubmitReview}    data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > Submit</button> */}

          <div className="modal fade " id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Log Out !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">After Log Out you have to enter your login credentials again for login !</span>
      {/* <h6> For more update check on order</h6> */}
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <Link   className="btn btn-secondary"  to="/orders">Check my order </Link> */}
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" >Cancel</button>


        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleLogOut}>I Know...</button>
      </div>
    </div>
  </div>
</div>  


          <div className='mt-3 mt-lg-0'>
      <Link className="btn btn-secondary" to="/owner">
      Register Shop 
      </Link>  

{ (token && token!=='undefined')?
    <Link className='btn bg-white ms-2 ' to="/profile"><LuUserCheck className='fs-4' /></Link>:""
}
{
(user && user!=='undefined')?
    <Link className='btn btn-dark ms-2' to="/ownerProfile"><SiSimpleanalytics /></Link>:""
}
</div>

    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
  // cartLength:PropTypes.number.isRequired
}