
 import { Link } from 'react-router-dom'
 import "../../Styles/footer.css"
import { GiIndiaGate } from "react-icons/gi";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { useState } from "react"

export default function Footer() {
  const countries=["India", "America", "Japan", "Russia", "French"]
  const languages=["Hindi", "English", "Japanies","Russian", "Tamil", "Telugu", "Kannada"]
  const [selectedValue, SetSelectedValue]= useState()
   const handleChange=(e)=>{
    SetSelectedValue(e.target.value)

  }
  return (
    <div className='bg-light w-100 p-5  row  text-center mt-5  '  >
      <div className='d-flex flex-sm-row flex-column justify-content-between justify-content-sm-around w-100 col-12 '> <span className='Foodie fw-italic'>Foodie</span> <span> 
        <select   value={selectedValue} onChange={handleChange} className=" mt-1 mt-sm-0 rounded p-2">

        {countries.map((item ,index)=>{
     return <option key={index} value={item} ><GiIndiaGate />{item}</option>
 } )}
 
      </select>



        <select  className="p-2 rounded ms-2 " >
          {
          languages.map((item, index)=>{
         return <option key={index} value={item}> {item}</option>
          })
          }
          
         
          </select> </span>
          </div>
          <div className="row d-flex justify-content-center">
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-5">
         <div className="heading">ABOUT FOODIE</div>
       <Link to="/blank" ><div className='content'>Who We ARE</div></Link> 
       <Link to="/blank" ><div className='content'>Blogs</div></Link>
       <Link to="/blank" ><div className='content'>Work with us</div></Link>

       <Link to="/blank" ><div className='content'>Investor relations</div></Link>

       <Link to="/blank" ><div className='content'>Report fraud</div></Link>
       <Link to="/blank" ><div className='content'>Press Kit</div></Link>
       <Link to="/blank" ><div className='content'>Contact use</div></Link>






      </div>
      <div className="col-12 col-sm-6   col-md-6 col-lg-2 p-5 ">
        <div  className="heading">FODAVERSE FOR</div> 
        <Link to="/" ><div className='content'>Foodie</div></Link>
        <Link to="/blank" ><div className='content'>Blinkit</div></Link>
        <Link to="/blank" ><div className='content'>Feeding India</div></Link> 
        <Link to="/blank" ><div className='content'>Hyperpure</div></Link> 
        <Link to="/blank" ><div className='content'>Contact use</div></Link>





       
      


      </div>
      <div className="col-12 col-sm-6   col-md-6 col-lg-2 p-5"> 
      <div  className="heading">Restaurants</div> 
        
        <Link to="/blank"><div className='content'>Partner with us</div></Link> 
        <Link to="/blank" ><div className='content'>Apps for you </div></Link>

       


      </div>
      <div className="col-12   col-sm-6 col-md-6  col-lg-2 p-5"> 
            <div  className="heading">Learn More</div> 
 
            <Link to="/blank" ><div className='content'>Privacy</div></Link> 
        <Link to="/blank"><div className='content'>Security </div></Link>
        <Link to="/blank"><div className='content'>Terms</div></Link> 
        <Link to="/blank"><div className='content'>sitemap </div></Link>


        
         

      </div>
      <div className="col-12  col-md-4 col-sm-5 col-lg-2  p-5">
        <div className="heading">SOCIAL LINKS</div>
        <div className='d-flex justify-content-center' >
          <Link  to="https://www.instagram.com/prasad.metkar.925/" className='icon  '><FaInstagramSquare  /></Link>
          <Link to="https://www.linkedin.com/in/prasad-metkar/" className='icon'><IoLogoLinkedin /></Link>
          <Link to=" https://twitter.com/PrasadMetkar5" className='icon'> <FaTwitter  /></Link>
          <Link to="" className='icon'><FaYoutube /></Link>
          <Link to="https://www.facebook.com/prasad.metkar.925/" className='icon '><FaFacebook  /></Link>
        </div>
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app store" className="d-block w-100 mt-2"/>
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" className="d-block w-100 mt-2" alt="play store"/>
        
      


      </div>
      </div>
       
      
    </div>
  )
}
