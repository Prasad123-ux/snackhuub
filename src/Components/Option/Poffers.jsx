
export default function Poffers() {
  return (
    <div className='row mx-auto' >
      <h3 className='col-12 d-flex justify-content-center'>OFFERS</h3>
      <div className='col-7 mt-5'> 
        <h4>Foodie one</h4> 
        <p>Get free delivery and extra discounts all across Foodie.</p>
        <br></br>
        <p>Your Swiggy One benefits can be availed only on the Foodie App.</p>
        <div className='row'>
          <button className='btn  col-6'>
          <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app store" className="d-block w-50 mt-2"/>
          </button>
          <button className='btn col-6'>
          <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" className="d-block w-50 mt-2" alt="play store"/>

          </button>
        </div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYET5rn5bpm6zMbufAkTuEdWu2OWNWjlKmHg&s" className="d-block  w-sm-75 w-lg-25  mt-2 rounded col-lg-5 col-12 " alt="play store"/>


    </div>
  )
}
