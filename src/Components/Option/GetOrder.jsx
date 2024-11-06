import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import "../../Styles/card.css"; 
import "../../Styles/getOrder.css"
import { useSelector } from "react-redux"; 
import PropTypes from 'prop-types'; 
import Mcarousel from "./Mcarousel";


export default function GetOrder({category="Maharashtrian"}) {
  const [productData, setProductData] = useState([]);
  const [tokenItem, setTokenItem] = useState(null);
  const navigate = useNavigate();
  const foodData = useSelector((state) => state.foods.allFoods);
  const [qty, setQty] = useState(1); // Default quantity
  const token= localStorage.getItem("token")

  useEffect(() => {
    // Filter products with category "Maharashtrian"
    const filterData = foodData.filter(food => food.product_category ===  category);  
    const withoutData = foodData.filter(food=>food.product_category!==category);

  const combinedData=[...filterData, ...withoutData] 

  setProductData(combinedData)
  }, [foodData,category]);  
  



  

  const addToCart = (id) => {
  const data = { id, qty, token };
    fetch('http://localhost:5000/api/addCart', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-type': "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getProductDetail = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className="row w-100 p-0 p-md-5"> 
    <Mcarousel/>
      {productData.length > 0 ? productData.map((item, index) => (
        <div key={index} className="card col-md-6 mb-3 col-sm-6 col-12 p-5 shadow">
          <div className="row g-0">
            <div className="col-md-12 col-xl-5 col-12">
              <button className="w-100 h-100 btn" onClick={() => getProductDetail(item._id)}>
                <img
                  src={item.product_images?.image2 || item.product_images?.image1||item.product_images?.image3||item.product_images?.image4}
                  className="main-image h-100 d-block w-100 rounded"
                  alt={item.product_name || "Product"}
                />
              </button>
            </div>
            <div className="col-md-12 col-xl-7 col-7 col-12">
              <div className="card-body row">
                <h5 className="card-title col-12">{item.product_name || item.product_category}</h5>
                <span className="card-text col-6">
                  <small className="text-muted">Delivered: {item.product_deliveryTime || "N/A"} Min</small>
                </span>
                <span className="col-6 fw-bolder text-gray text-center p-0">
                  <h4 className="d-inline me-1"><FcRating className="d-inline" /></h4>{item.product_rating || "N/A"}
                </span>
                <h5 className="col-6 mt-2">₹ {item.product_price || "N/A"}</h5>
                <div className="col-6">
                  <select className='m-2 h-100' onChange={(e) => setQty(parseInt(e.target.value))}>
                    {Array.from(Array(6), (e, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
                <span className="col-12 mt-4 fw-bold">Spicy shop near metro station, Hyderabad</span>
                {tokenItem ?
                  <button className="col-12 col-lg-6 btn mt-4 btn-primary" onClick={() => addToCart(item._id)}>
                    Add to cart
                  </button> :
                  <button className="btn col-12 col-lg-6 mt-4 btn-primary" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal">
                    Add to cart
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      )) : <p>No products available.</p>}
    </div>
  );
}
GetOrder.propTypes = { 
  category:PropTypes.string.isRequired,
  
};
