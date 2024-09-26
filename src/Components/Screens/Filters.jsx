import { useState } from 'react';
import "../../Styles/card.css";

export default function Filters() {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [type, setType] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState([]);

  const clear = () => {
    setCategory([]);
    setPrice([]);
    setType([]);
    setDeliveryTime([]);
  };

  const onchange = (e) => {
    const { name, value } = e.target;

    if (name === 'Category') {
      setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    } else if (name === 'Price') {
      const priceValue = parseInt(value);
      setPrice(prev => prev.includes(priceValue) ? prev.filter(item => item !== priceValue) : [...prev, priceValue]);
    } else if (name === 'Veg/NonVeg') {
      setType(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    } else if (name === 'Delivery Time') {
      const minutes = parseInt(value);
      setDeliveryTime(prev => prev.includes(minutes) ? prev.filter(item => item !== minutes) : [...prev, minutes]);
    }
  };

  const filteredData = [
    { heading: "Category", content: ['North Indian', 'South Indian', 'Punjabi', 'Gujarati', 'Marathi', 'Bengali', 'Rajasthani', 'Hyderabadi', 'Kerala', 'Tandoori', 'Street Food', 'Vegetarian', 'Sweet/Dessert', 'Snacks', 'Breads', 'Biryani', 'Starter', 'Pizza'] },
    { heading: "Price", content: [50, 100, 200, 300, 400, 500] },
    { heading: "Veg/NonVeg", content: ['Vegetarian', 'Non Vegetarian'] },
    { heading: "Delivery Time (in minutes)", content: [10, 20, 30, 40, 50] }
  ];

  return (
    <div>
      <button className="mt-2 btn filter btn-outline-primary text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Choose By Filters
      </button>

      <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title text-success font-italic" id="offcanvasExampleLabel">Foodie</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <h5 className='text-secondary'>Filter Food By your Mood!</h5>
          </div>
          <button className='btn btn-primary' onClick={clear}>Clear All</button>
          <hr />

          <div className="accordion accordion-flush" id="accordionFlushExample">
            {filteredData.map((item, index) => {
              const collapseID = `flush-collapse${index}`;
              const headingID = `flush-heading${index}`;

              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={headingID}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseID}`} aria-expanded="false" aria-controls={collapseID}>
                      {item.heading}
                    </button>
                  </h2>
                  <div id={collapseID} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      {Array.isArray(item.content) && item.content.map((point, idx) => (
                        <div className="form-check" key={idx}>
                          <input className="form-check-input" type="checkbox" name={item.heading} value={point} onChange={onchange} id={`flexCheckDefault-${idx}`} />
                          <label className="form-check-label" htmlFor={`flexCheckDefault-${idx}`}>
                            {point}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <button className='btn btn-primary mt-5 ms-2'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
