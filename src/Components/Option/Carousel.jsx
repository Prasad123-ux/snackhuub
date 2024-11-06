import { useDispatch, useSelector } from "react-redux";
import "../../Styles/carousel.css" 
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { setAllFilteredFoods,  } from "../Redux/foodSlice"; 
import data from "../data.json" 
import all from "../../Assets/all.webp" 
import pizza from "../../Assets/pizza.webp" 
import vada from "../../Assets/vada.webp"

 
 export default function Carousel() {    
  const dispatch= useDispatch() 
  const [inputItem,setInputItem]= useState() 
  const toast= useToast() 
  const [category,setCategory]= useState()
 
  const filteredFoods= useSelector((state)=>state.foods.filteredFoods)    
  const foodData= useSelector((state)=>state.foods.allFoods)  
  const foodCat = useSelector((state) => state.foods.foodCategory);  
  

  const addToast = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };    
  




  const handelFilter = () => { 

    // console.log(e.target.value)
    if (inputItem && inputItem.trim().length >= 1) {
      const itemName = inputItem[0].toUpperCase() + inputItem.slice(1);
  
      // Filter synchronously
      const filterData = foodData.filter((item) =>
        item.product_name.includes(itemName)
      );
  
      
  
      if (filterData.length > 0) { 
      console.log(filterData)
      
        dispatch(setAllFilteredFoods(filterData)) 
        console.log(filteredFoods)
      } else {
        dispatch(setAllFilteredFoods(null)) 
        addToast("No matching items found", "info");
      }
    } else { 
      dispatch(setAllFilteredFoods(null)) 
      addToast("Please enter proper data", "warning");
    }
  }; 

  const changeCategory=(e)=>{   
     console.log(e.target.value)
    setCategory(e.target.value)  
    console.log(category)  
    
     const filterFood=foodData.filter(item=> item.product_category===category) 
      console.log(filterFood.length)
      if(filterFood.length===0){
        dispatch(setAllFilteredFoods([])) 
        addToast(`Items not found for ${e.target.value} category`)
      }else{
        dispatch(setAllFilteredFoods(filterFood)) 



      }
  



  }
  
 
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

      <div className="input-group mb-3  mx-auto  ">
  <button type="button" class="btn btn-outline-secondary d-sm-block bg-light text-black d-none  fw-bold"  >Choose Category</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split d-sm-block d-none  text-white fw-700" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden"  data-bs-toggle="tooltip"  data-bs-placement="right" title="Choose Category">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu"> 
    {
      data.category.map((category,index)=>{
        return      <li key={category._id} className="category-name"><button className="dropdown-item fs-6"  value={category.CategoryName} onClick={changeCategory}>{category.CategoryName}</button></li>


      })
    }
    
  </ul>  


  <input type="text" className="form-control search-input " onChange={(e)=>{setInputItem(e.target.value)}}  placeholder="Find Your Favourite Foods" aria-label="Text input with segmented dropdown button"     data-bs-toggle="tooltip"  data-bs-placement="right" title="Search your Favourite foods"/> 
  <button className="btn btn-primary" onClick={handelFilter}>Submit</button>
</div>
    </div>  


    </div>


    </div> 
  );

 }