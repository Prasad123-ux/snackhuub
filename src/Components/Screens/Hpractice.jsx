import  { useEffect, useState } from "react";
import Card from "../Card";
import Footer from "../Option/Footer";

export default function Home() {
    const [foodCat, setFoodCat] = useState([]); 
    const [foodItems, setFoodItems] = useState([]);
     const [search, setSearch] = useState("");
     const [searchValue, setSearchValue] = useState(true);
    //  const [catValue, setCatValue]= useState(false)
     const [filteredValue,setFilteredValue]= useState(true)

    const loadData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/getProductData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            // console.log(data.message);
              setFoodItems(data.message)
            //   console.log(data.foodCategory)
            //    setFoodCat(data.foodCategory)
            // foodItems.length 
            // foodCat.length
            
            //  setFoodCat(data.foodItemData[1]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

const getCatData=()=>{
  fetch('http://localhost:5000/api/getCatData', {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },


  }).then((response)=>{
    if(response.ok){
      return response.json()  
    }else{
       throw new Error(response.statusText) 
    }

  }).then((data)=>{
    // console.log(data.catData)
    setFoodCat(data.catData)

  }).catch((err)=>{
    console.log(err)

  })

    }


    useEffect(() => {
      window.scrollTo(0,0)
        loadData();
        getCatData()
    }, []);

    
    

     const handleSearchSubmit = () => {
         setSearchValue(search !== "");
     };

     
    //  console.log(foodItems)
    // console.log(foodItems.length)
      // foodItems.filter(data)=>{console.log(data.product_category===foodCat[4].CategoryName)})
       foodItems.filter(data => {
        // console.log(data);
        return data.product_category === "Nast";
    }).map((item)=>{
    return  console.log(item)})
    
       
    //  console.log(foodCat)
    return (
        <div style={{ "height": "100px" }}>
            <div>
                {/* Your carousel code here */}
                <div id="carouselExampleCaptions" className="carousel slide" style={{'objectFit':"fill !important"}}>
   <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="carousel">
    <div className='carousel-caption' style={{'zIndex':"10"}}>
    <div  className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button className="btn btn-outline-success text-white bg-info" onClick={handleSearchSubmit} type="submit">Search</button>
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900*700/?burger" className="d-block h-50 w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900*700/?icecream" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900*700/?pizza" className="d-block w-100"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

            </div>
        {
          foodCat && foodCat.length >0 ?  foodCat.map((catItem, catIndex)=>{
            return <div key={catIndex} className="row"><h3> { filteredValue  ?catItem.CategoryName:"not item"}</h3> 
            {foodItems && foodItems.length>0 ? foodItems.filter(data=>
            {
              if(searchValue && searchValue.length>0){
                return data.product_name.toLowerCase().includes(search && search.toLowerCase())

            }else{
              return data.product_category===catItem.CategoryName
            }
          }).map((filteredElement)=>{
            
            return <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5" key={filteredElement.id}><Card name={filteredElement.product_name} category={filteredElement.product_category} price={filteredElement.product_price} rating={filteredElement.product_rating}  address={filteredElement.shop_address} img={filteredElement.images[0]}  deliveryTime={filteredElement.product_deliveryTime}/></div>
                 
            }):"data not found"}
          
            
            
            </div>
          }):""
        }
          {/* <div>
            { foodItems && foodItems.length> 0 ? foodItems.map((item ,index)=>{
                return <div key={index}> <Card name={item.product_name} description={item.product_description} price={item.description} address={item.shop_address} discount={item.product_discount}  type={item.product_type} /></div>
            }):""}
          </div> */}
            <Footer />
        </div>
        </div>
    );
}
 