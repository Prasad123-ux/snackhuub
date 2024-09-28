import { useEffect, useState } from "react";
import Card from "../Card";
import Footer from "../Option/Footer";
import "../../Styles/home.css"

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');
  const [valueLength, setValueLength] = useState(0);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [type, setType] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState([]);

  const filteredData = [
    { heading: "Category", content: ['North Indian', 'South Indian', 'Punjabi', 'Gujarati', 'Marathi', 'Bengali', 'Rajasthani', 'Hyderabadi', 'Kerala', 'Tandoori', 'Street Food', 'Vegetarian', 'Sweet/Dessert', 'Snacks', 'Breads', 'Biryani', 'Starter', 'Pizza'] },
    { heading: "Price", content: [50, 100, 200, 300, 400, 500] },
    { heading: "Veg/NonVeg", content: ['Vegetarian', 'Non Vegetarian'] },
    { heading: "Delivery Time (in minutes)", content: [10, 20, 30, 40, 50] }
  ];

  const loadData = async () => {
    try {
      const response = await fetch('https://foodie-backend-4.onrender.com/api/displayData', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setFoodItems(data.data);
        // console.log(foodItems[0])
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCatData = async () => {
    try {
      const response = await fetch('https://foodie-backend-4.onrender.com/api/getCatData', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFoodCat(data.catData);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
    getCatData();
    if (checkTokenExpires()) {
      removeToken();
    }
  }, []);

  const clear = () => {
    setCategory([]);
    setPrice([]);
    setType([]);
    setDeliveryTime([]);
    setValueLength(0);
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    if (name === 'Category') {
      if (category.includes(value)) {
        setCategory(category.filter(preValue => preValue !== value));
      } else {
        setCategory([...category, value]);
      }
    } else if (name === 'Price') {
      const priceValue = parseInt(value);
      if (price.includes(priceValue)) {
        setPrice(price.filter(preValue => preValue !== priceValue));
      } else {
        setPrice([...price, priceValue]);
      }
    } else if (name === "Veg/NonVeg") {
      if (type.includes(value)) {
        setType(type.filter(preValue => preValue !== value));
      } else {
        setType([...type, value]);
      }
    } else {
      const minutes = parseInt(value);
      if (deliveryTime.includes(minutes)) {
        setDeliveryTime(deliveryTime.filter(preValue => preValue !== minutes));
      } else {
        setDeliveryTime([...deliveryTime, minutes]);
      }
    }
  };

  useEffect(() => {
    const lengthNumber = category.length + type.length + deliveryTime.length + price.length;
    setValueLength(lengthNumber);
  }, [category, price, type, deliveryTime]);

  const checkTokenExpires = () => {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      return Date.now() > parseInt(expiresIn);
    }
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
  };



  (foodItems.map((item)=>{
    return console.log(item) 
  }))

  console.log(foodItems.length)
  return (
    <div className="home">
      
      <div >
        {/* Your carousel component */}
      </div>
  

      <div className="container-fluid">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((item) => {
            return (
              <div key={item._id} className="row">
                <div className="fs-3 m-3">{item.CategoryName}</div>
                <hr />
                {valueLength > 0 ? (
                  foodItems.filter(data => 
                    category.includes(data.product_category) ||
                    price.includes(data.product_price) ||
                    type.includes(data.product_type) ||
                    deliveryTime.includes(data.product_deliveryTime)
                  ).map(filteredElement => (
                    <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
                      <Card 
                        name={filteredElement.product_name}
                        description={filteredElement.product_description}
                        price={filteredElement.product_price}
                        address={filteredElement.shop_address}
                        rating={filteredElement.product_rating}
                        deliveryTime={filteredElement.product_deliveryTime}
                        discount={filteredElement.product_discount}
                        type={filteredElement.product_type}
                        id={filteredElement._id}
                        img={filteredElement.product_images.image4}
                      />
                    </div>
                  ))
                ) : (
                  foodItems && foodItems.length > 0 ? (
                    search && search.length > 0 ? (
                      foodItems
                        .filter(data => data.product_name.toLowerCase().includes(search.toLowerCase()))
                        .map(filteredElement => (
                          <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
                            <Card 
                              name={filteredElement.product_name}
                              description={filteredElement.product_description}
                              price={filteredElement.product_price}
                              address={filteredElement.shop_address}
                              rating={filteredElement.product_rating}
                              deliveryTime={filteredElement.product_deliveryTime}
                              discount={filteredElement.product_discount}
                              type={filteredElement.product_type}
                              id={filteredElement._id}
                              img={filteredElement.product_images.image4}
                            />
                          </div>
                        ))
                    ) : (
                      foodItems
                        .filter(data => data.product_category === item.CategoryName)
                        .map(filteredElement => (
                          <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
                            <Card 
                              name={filteredElement.product_name}
                              description={filteredElement.product_description}
                              price={filteredElement.product_price}
                              address={filteredElement.shop_address}
                              rating={filteredElement.product_rating}
                              deliveryTime={filteredElement.product_deliveryTime}
                              discount={filteredElement.product_discount}
                              type={filteredElement.product_type}
                              id={filteredElement._id}
                              img={filteredElement.product_images.image4}
                            />
                          </div>
                        ))
                    )
                  ) : null
                )}
              </div>
            );
          })
        ) : "No data"}
      </div>
    </div>
  );
}
