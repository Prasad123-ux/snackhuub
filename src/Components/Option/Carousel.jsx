

export default function Carousel() {
  return (
    <div  >
   <div id="carouselExampleCaptions" className="carousel slide"  style={{height:"100px !important"}}>
   <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner "  id="carousel ">
    <div className='carousel-caption' >
   
    </div>
    <div className="carousel-item active">
    

      <img src="https://source.unsplash.com/random/?burger" className="d-block  w-100 " alt="..." style={{height:"500px", width:"100%"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>   
      </div>
    </div>
    <div className="carousel-item " >
      <h6 className="position-absolute text-info" > lets make your store global </h6>
      <img src="https://source.unsplash.com/random/?icecream" className="d-block w-100  " alt="..."  style={{height:"500px", width:"100%"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item"  >
      <img src="https://source.unsplash.com/random/?pizza" className="d-block w-100 h-0"  alt="..." style={{height:"500px", width:"100%"}}/>
     
      <div className="carousel-caption d-none d-md-block">
        <h6 className="fs-5">Third slide label</h6>
        <h6>Some representative placeholder content for the third slide.</h6>
      </div>
    </div>
    
  </div>
  
</div>
    </div>
  )
}


