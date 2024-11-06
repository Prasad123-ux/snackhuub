import { useEffect, useState, useCallback } from "react";
import Card from "../Card";
import "../../Styles/home.css";
import spinner from "../../Assets/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import { setAllFoods, setFoodCategory, setToken } from "../Redux/foodSlice";
import { useToast } from "@chakra-ui/react";
import Carousel from "../Option/Carousel";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.foods.allFoods);
  const foodCat = useSelector((state) => state.foods.foodCategory); 
  const filterFoods= useSelector((state)=>state.foods.filteredFoods)  
  const userToken= useSelector((state)=>state.foods.token)
  const toast = useToast();
  const [allFoodCategory,setAllFoodCategory]= useState([null]) 

  

  const addToast = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };  



  useEffect(()=>{       
    const token = localStorage.getItem('token') 
    dispatch(setToken(token)) 
    console.log(userToken)

    
 
    if ( filterFoods && filterFoods.length>=1){   

       const filterCategory=[...new Set(filterFoods.map((item)=>item.product_category))];   


    
    // setFoodCategory(filterCategory) 


     setAllFoodCategory(filterCategory) 
     
    // setAllFoodCategory((prevCategory)=>{
    //      return [...new Set([...prevCategory, ...filterCategory])]
    //  }) 

       console.log(setAllFoodCategory) 

      

    } else{

    
    const filterCategory = [...new Set(foodData.map((item) => item.product_category))];   
    console.log(filterCategory) 

    setAllFoodCategory(filterCategory) 



    //  setFoodCategory(filterCategory)

  //  Update `allFoodCategory` state with unique categories
    //  setAllFoodCategory((prevCategory) => {
      //  Add only new unique categories to prevent duplicates
      // return [...new Set([...prevCategory, ...filterCategory])]; 
      
    //  }); 



  }
   
  },[foodData,filterFoods])




 
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/displayData", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        setFoodItems(data.data);
        dispatch(setAllFoods(data.data));
        setLoading(false);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      addToast("Failed to fetch data. Please try again later.", "error");
      setLoading(false);
    }
  }, [dispatch]); 




  const getCatData = useCallback(async () => {
    if (!navigator.onLine) {
      addToast("Please check your internet connection", "warning");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/getCatData", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setFoodCategory(data.catData));
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      addToast("Failed to fetch category data. Please try again later.", "error");
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
    getCatData();
  }, [loadData, getCatData]); 



 
  return (  


    <div className="home">
      {loading && <img src={spinner} className="loader" alt="loading" />}

      <div className="mt-0">
        {/* Your carousel component */}
        <Carousel />
      </div>
     {filterFoods && filterFoods.length>=1  ?
      
      <div className="container-fluid">
      {allFoodCategory?.length > 0 &&
        allFoodCategory.map((cat,index) => (
          <div key={index} className="row">
            <div className="fs-4 fw-medium text-secondary text-decoration-underline mt-3 shadow">
              {cat}
            </div>
            {filterFoods
              ?.filter((foodItem) => foodItem.product_category === cat)
              .map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5"
                >
                  <Card
                    name={item.product_name}
                    description={item.product_description}
                    price={item.product_price}
                    address={item.shop_address}
                    rating={item.product_rating}
                    deliveryTime={item.product_deliveryTime}
                    discount={item.product_discount}
                    type={item.product_type}
                    id={item._id}
                    img={item.product_images.image4}
                  />
                </div>
              ))}
          </div>
        ))}
    </div> 






:









      <div className="container-fluid">
        {allFoodCategory?.length > 0 &&
          allFoodCategory.map((cat,index) => (
            <div key={index} className="row">
              <div className="fs-4 fw-medium text-secondary text-decoration-underline mt-3">
                {cat}
              </div>
              {foodData
                ?.filter((foodItem) => foodItem.product_category === cat)
                .map((item) => (
                  <div
                    key={item._id}
                    className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5"
                  >
                    <Card
                      name={item.product_name}
                      description={item.product_description}
                      price={item.product_price}
                      address={item.shop_address}
                      rating={item.product_rating}
                      deliveryTime={item.product_deliveryTime}
                      discount={item.product_discount}
                      type={item.product_type}
                      id={item._id}
                      img={item.product_images.image4}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div> 


        }


    </div>
  );
}
