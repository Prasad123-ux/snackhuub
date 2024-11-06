
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { SiSimpleanalytics } from "react-icons/si";
import { LuUserCheck } from "react-icons/lu";
import { useRef } from 'react';  
import { RiCloseLargeLine } from "react-icons/ri"; 
import { GiHamburger } from "react-icons/gi";
import "../../Styles/Navbar.css" 
import burger from  "../../Assets/burger.png"
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [item, setItem]= useState() 
  const collapseRef = useRef(null)
  
  const token = useSelector((state)=>state.foods.token)
  const navigate= useNavigate() 

  
 


const user= localStorage.getItem('user')

console.log(token)


const handleMenuClose = () => {
  if (collapseRef.current) {
    const bsCollapse = new window.bootstrap.Collapse(collapseRef.current);
    bsCollapse.hide();
  }
};

  
  
  return (
    <div  >
      <nav className= { window.scrollY<250 ?"navbar navbar-expand-lg navbar-dark bg-success  fixed-top " :" navbar navbar-expand-lg navbar-dark bg-success "}>
  <div className="container-fluid d-lg-block d-flex flex-row">
    <Link className="navbar-brand fs-1 fst-italic "  to="/">Foodie</Link>
    {/* <button onClick={handleMenuClose} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   */}
    {/* <button className='d-sm-block  d-lg-none toggle-button ' onClick={handleMenuClose} >  */}
      <img  onClick={handleMenuClose} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWYzR-ubJ7Mhb500_5gj9duuxj46_w8ruJw&s" className='side-img d-block d-block d-lg-none' alt="Navbar Menu"/>
      {/* </button> */}

   
    <div className="collapse navbar-collapse" id="navbarText" ref={collapseRef}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/"  >Home</Link>
          
          
        </li>
        {(token && token!=='undefined')? (
           <li className="nav-item">
          <Link className="nav-link active fs-5"  data-bs-toggle="tooltip"  data-bs-placement="right" title="Your Placed Orders" to="/myOrders" >myOrders</Link>
        </li>):"" } 
       
        
      
      </ul>
      {/* <Filters/> */}
      {/* <Filters/> */}
      <div className='flex'>
      
    {(!token || token==='undefined') ?(<div>
    <Link className="btn  bg-white  mx-1 text-success" to="/login" >Login </Link>
        
        <Link className="btn bg-white mx-1 text-success" to="/createUser" >SingUp</Link></div>
        ): <div>
         
        <Link  className="btn bg-white mx-1 text-success" to='/myCart' data-bs-toggle="tooltip"  data-bs-placement="right" title="cart added item" >my Cart 
        
        <span className="position-absolute translate-top badge rounded  mt-4 me-5 p-1  bg-danger"></span>
        </Link>
   </div>  }   
        
          </div>
          {/* <button  className=" btn bg-primary mt-3 fs-6 fw-bolder" onClick={handleSubmitReview}    data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal" > Submit</button> */}

      





          <div className='mt-3 mt-lg-0'>
      <Link className="btn btn-secondary" to="/owner" data-bs-toggle="tooltip"  data-bs-placement="right" title="Be a Seller">
      Register Shop 
      </Link>  

{ (token && token!=='undefined')?
    <Link className='btn bg-white ms-2 ' to="/profile"><LuUserCheck className='fs-4' data-bs-toggle="tooltip"  data-bs-placement="right" title="Profile Section" /></Link>:""
}
{
(user && user!=='undefined')?
    <Link className='btn btn-dark ms-2' to="/ownerProfile" ><SiSimpleanalytics /></Link>:""
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