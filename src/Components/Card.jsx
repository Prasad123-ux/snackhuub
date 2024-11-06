import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { FcRating } from 'react-icons/fc';
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { RiSaveLine } from "react-icons/ri";
import "../Styles/card.css";  
import { useToast } from "@chakra-ui/react";  

export default function Card({
  name = "item",
  address = "N/A",
  price = "N/A",
  img,
  id = "N/A",
  rating = "N/A",
  deliveryTime = "N/A"
}) {
  const options = { 'full': 250, half: "420" };
  let priceOptions = Object.keys(options);
  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState();
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const [cartSave, setCartSave] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const addToast = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 2000,
      isClosable: true
    });
  };

  const addToCart = async () => {
    if (token === null) {
      addToast("Please login Yourself!", "warning");
    } else {
      setLoader(true);
      const data = { id, size, qty, token };
      try {
        const response = await axios.post("http://localhost:5000/api/addCart", { data ,token});
        
        if (response.status !== 200) {
          addToast(response.data.message, "error");
        } else {
          addToast(response.data.message, "success");
        }
      } catch (err) { 
        
        addToast(err.response.data.message, "error");
      } finally {
        setLoader(false);
      }
    }
  };

  const addToFavourites = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/addFavourites/${id}`); 
      console.log(response)
      if (response.status !== 200) {
        addToast(response.data.message, "error");
        
      } else { 
        addToast(response.data.message, "success");

      }
    } catch (err) { 
      addToast(err.response.data.message, "error");

      console.log(err)
      setLoader(false);
    }
  };

  const dataPrint = (id) => {
    console.log(id);
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className="mx-auto">
      <div>
        <div className="card shadow text-dark mx-auto">
          <button className="btn" onClick={() => { dataPrint(id); }} to="/productDetail">
            <img src={img} className="card-img-top rounded-5 main-image" name="name" alt={name} />
          </button>
          <div className="card-body row">
            <h5 className="card-title col-8">{name}</h5>
            <span className="col-4 mt-2 mx-auto rounded rating shadow d-inline"> <FcRating className="d-inline" /> {rating}</span>
            <span className="col-7 price"> Price:<FaRupeeSign className="d-inline" />{qty > 1 ? price * qty : price} </span>
            <span className="col-5 mt-3 delivery"> <b><MdDeliveryDining className="d-inline" /></b> {deliveryTime} min</span>
            <span className="col-12 location"> <FaLocationDot className="d-inline" /> {address}</span>
            <div className='container mt-3 d-flex justify-content-between'>
              {token && (
                <select className='h-100 bg-success' size="size" onChange={(e) => { setQty(parseInt(e.target.value)) }} data-bs-toggle="tooltip"  data-bs-placement="right" title="Choose Quantity">
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
              )}
              {token ?
                <button className="me-4 fs-5 btn btn-outline-primary" onClick={() => { addToFavourites(id) }} data-bs-toggle="tooltip"  data-bs-placement="right" title="Add to Favourites"><RiSaveLine /></button> :
                <button type="button" className="btn btn-success"  onClick={() => { addToast("Please Log in Yourself", "warning") }} ><RiSaveLine /></button>
              }
              <div className='d-inline h-100 fs-5'>
                <button type="button" className="btn btn-success" onClick={addToCart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deliveryTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
