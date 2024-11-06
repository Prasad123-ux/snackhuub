
import all from "../../Assets/all.webp" 
import pizza from "../../Assets/pizza.webp" 
import vada from "../../Assets/vada.webp"

 
 export default function Mcarousel() {    
 
  
 
  




 


  
  
 
  return (  

    <div className="carousel-section">
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img
              src={all}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "100%" }}
            />
          
          </div>
          <div className="carousel-item">
            <img
              src={pizza}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "100%" }}
            />
            
          </div>
          <div className="carousel-item">
            <img 
            src={vada}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "100%" }}
            />
           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 

    <div className="d-flex justify-content-center">   
    <div className=" search-item mx-auto ">

    
    </div>  


    </div>


    </div> 
  );

 }