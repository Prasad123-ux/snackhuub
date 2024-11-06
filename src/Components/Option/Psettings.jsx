
import { useNavigate } from "react-router-dom";
export default function Psettings() {  
  const navigate= useNavigate()
  


  const handleLogOut=()=>{
    localStorage.removeItem('token');
 
     navigate('/login')
     
   }
  return (
    <div className='text-center'>
    <h2 >Settings</h2>
    <div className='text-start row'>
      <h3 className=''>SMS Preference</h3>
      <div className='fw-lighter rounded-2 rounded-secondary mt-5 '> Order related SMS cannot be disabled as they are critical to provide service</div>
      <div className='row mt-4'> 
      
        <span className='form-check form-switch mt-2  col-lg-5 col-12' >
          <input className='form-check-input'  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className='form-check-label fw-bolder' htmlFor='flexSwitchCheckDefault'>Recommendation and Reminders</label>
        </span>
        <span className='col-lg-7 col-12'> Keep this on to receive offer recommendations & timely reminders based on your interests</span> accordion  

      </div> 
      {/* <div className="btn btn-primary bg-white mx-1 text-danger "  data-bs-toggle="modal" data-bs-target="#exampleModal1"   >Logout</div> */}

    
    </div>
    </div>
  )
}
