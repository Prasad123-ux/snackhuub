import{ useState } from 'react'
import Footer from './Option/Footer'
import "../Styles/login.css"

export default function RegisterProduct() {
  const [productData, setProductData]= useState({name:"",category:"", description:"", price:"" , address:"", discount:"",deliveryTime:"", type:"", availability:"", flavour:"", weight:"", ingredients:"", packagingType:"", storage:"", refundPolicy:"", rating:"", email:"", mobile_number:"" , shopName:""})
  const [images, setImages]= useState({image1:"", image2:"" , image3:"", image4:"", image5:""})
  const [productCat,setProductCat]= useState(['North Indian','South Indian', 'Punjabi', 'Gujarati', 'Maharashtrian','Bengali', 'Rajasthani','Hyderabadi','Kerala', 'Tandoori', 'Street Food', 'Vegetarian', 'Sweet/Dessert','Snacks', 'Breads','Biryani/Rice', 'Starter','Pizza', "General", 'additional_detail'])
  const [alert, setAlert]= useState()


  const onClick=(e)=>{
    setProductData({...productData, [e.target.name]:e.target.value})
  }
  const onImageClick=(e)=>{
    setImages({...images,[e.target.name]:e.target.value })
  }
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(productData)
    // console.log(images)
    const token= localStorage.getItem('token')
    try{

    fetch('https://foodie-backend-4.onrender.com/api/addProductData', {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({token:token, productData:productData, images:images})
    

    }).then((response)=>{
     if(response.ok){
      setAlert("Product Added Successfully ")
      return response.json()
     }else{
      
       setAlert("Sorry there is some problem! Try again")
  
      
    throw new Error(response.statusText) 
     }
      
    }).then((data)=>{
      console.log(productData)
      setProductData({name:"",category:"", description:"", price:"" , address:"", discount:"",deliveryTime:"", type:"", availability:"", flavour:"", weight:"", ingredients:"", packagingType:"", storage:"", refundPolicy:"", rating:"", email:"", mobile_number:"" , shopName:""})
      console.log(data)

    }).catch((err)=>{
      console.error(err)

    })}catch(err){
      console.log(err)

    }
  }
  return (
    <>
    <div className='p-0 p-lg-5   text-center mx-auto input'>
      <form onSubmit={handleChange}>
        <div className='row text-center mx-auto'>
        <div className='col-12 col-md-6  mt-4 ' > 
            <label htmlFor="validationDefault01" className='form-label'>Product Name</label>
            <input type="text" className='form-control shadow ' onChange={onClick} name="name"  id="validationResult01" placeholder="e.g. Gulab Jamun" required/>
        </div>
        <div className='col-12 col-md-6  mt-4 '> 
            <label htmlFor="validationDefault22" className='form-label'>Shop Name</label>
            <input type="numeric" className='form-control ' onChange={onClick} name="shopName" id="validationResult22" placeholder="e.g. Sweet Saloon" required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault04" className='form-label'>Product Price</label>
            <input type="numeric" className='form-control' onChange={onClick} name="price" id="validationResult04" placeholder="e.g. 54" required/>
        </div>

        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault06" className='form-label'>Discount on Product in percentage(if not leave empty) </label> 
            <input type="number" className='form-control' onChange={onClick} name="discount" id="validationResult06"  placeholder="e.g. 20" />
        </div>
        <div className=' col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault06" className='form-label'>Delivery Time (in Minutes) </label> 
            <input type="Number" className='form-control' onChange={onClick} name="deliveryTime" id="validationResult06" placeholder='e.g. 20' required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault09" className='form-label'>Product Flavour </label> 
            <input type="text" className='form-control' onChange={onClick} name="flavour" id="validationResult09" placeholder='e.g. Sweet' />
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault10" className='form-label'>Weight/Volume (in grams)  </label> 
            <input type="Number" className='form-control' onChange={onClick} name="weight" id="validationResult10" placeholder='e.g. 20' required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault11" className='form-label'>Ingredients </label> 
            <input type="text" className='form-control' onChange={onClick} name="ingredients" id="validationResult11" placeholder="e.g. Mailda , sugar, oil, etc" required/>
        </div> 
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault12" className='form-label'>Packaging type </label> 
            <input type="text" className='form-control' onChange={onClick} name="packagingType" id="validationResult12" placeholder="Plastic Box" required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault13" className='form-label'>Storage Instruction </label> 
            <input type="text" className='form-control' onChange={onClick} name="storage" id="validationResult13" placeholder="Store in cool place" required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault15" className='form-label'>Customer Rating out of 5 </label> 
            <input type="text" className='form-control' onChange={onClick} name="rating" id="validationResult15" placeholder="e.g. 4.2" />
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault15" className='form-label'>Shop Open Timing  </label> 
            <input type="time" className='form-control' onChange={onClick} name="openTiming" id="validationResult15" placeholder='e.g. 9:00 AM' />
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault15" className='form-label'>Shop Closing Timing </label> 
            <input type="time" className='form-control' onChange={onClick} name="closeTiming" id="validationResult15" placeholder='e.g. 8:00 PM' />
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault16" className='form-label'> Email (for accepting Queries)  </label> 
            <input type="text" className='form-control' onChange={onClick} name="email" id="validationResult16" placeholder='e.g. prasadmetkar333@gmail.com' required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault17" className='form-label'> Mobile Number (for accepting Queries)  </label> 
            <input type="text" className='form-control' onChange={onClick} name="mobile_number" id="validationResult17" placeholder="e.g. 9307173845" required/>
        </div>
        <div className='col-12 col-md-6  mt-4'> 
            <label htmlFor="validationDefault18" className='form-label'> Additional Detail </label> 
            <input type="text" className='form-control' onChange={onClick} name="additional_detail" id="validationResult18" placeholder="e.g. This product is good for health there is not any side effect of this product and we have already tested it." required/>
        </div>
        <div className='col-12 col-md-6 '> 
            <label htmlFor="validationDefault05" className='form-label'>Shop Address</label>
            <input type="text" className='form-control' onChange={onClick} name="address" id="validationResult05" placeholder="e.g. Adilabad in india" required/>
        </div>
        <div className='col-12 col-md-6    mt-4'>
        <label htmlFor="validationDefault02" className='input-group-text'>Product Category</label>
        <select className='form-select' name="category" onChange={onClick} id="validationDefault02"  required>  


          {
            productCat.map((item, index)=>{
              return <option key={index} selected>{item}</option>
            })
          }
        </select>

        </div>
      
        
        <div className='col-6  col-12 col-md-6 mt-4'>
            <label htmlFor="validationResult07" className='input-group-text'> Food Type</label>
            <select className='form select' name="type" onChange={onClick} id="validationResult07" aria-label="Default select Example" >  
            <option selected>Veg</option> 
            <option>Non veg</option></select>
        </div>
        <div className='col-6 col-12 col-md-6 mt-4'>
          <label  className='input-group-text'>Product Availability</label>
          <select className='form-select' name="availability" onChange={onClick}  aria-label="Default select Example">
            <option selected>Yes</option>
            <option>No</option>
            <option>Upcoming</option>
          </select>
        </div>
        <div className='col-6 col-12 col-md-6 mt-4'> 
        <label htmlFor="validationDefault08" className='input-group-text'>Refund Policy</label>
        <select className='form-select' name="refundPolicy" onChange={onClick} id="validationDefault08" aria-label="Default select Example" >
            <option selected>Refundable</option>
            <option>Non Refundable</option>
            <option>Refundable before Opening packaging</option>
          </select>

        </div>
        
        
      
       
       
       
      
       
        
        
       
       
        
       
       
        
       
      

        

        <div className='col-12 col-md-6 mt-4  '> 
          <label htmlFor="validationDefault17" className='input-group-text'>Product image</label>
          <input type='text' className='form-control' onChange={onImageClick} name="image1" id="validationDefault17" required/>
        </div>
        <div className='col-12 col-md-6 mt-4 '>
          <label htmlFor="validationDefault18" className='input-group-text'>Product image</label>
          <input type='text' className='form-control' onChange={onImageClick} name="image2" id="validationDefault18" required/>
        </div >
        <div className='col-12 col-md-6 mt-4 '>
          <label htmlFor="validationDefault19" className='input-group-text'>Product image</label>
          <input type='link' className='form-control' onChange={onImageClick} name="image3" id="validationDefault19" required/>
        </div>
        <div className='col-12 col-md-6 mt-4 '>
          <label htmlFor="validationDefault20" className='input-group-text'>Product image</label>
          <input type='link' className='form-control' onChange={onImageClick} name="image4" id="validationDefault20" required/>
        </div>
        <div className='col-12 col-md-6 mt-4 '>
          <label htmlFor="validationDefault21" className='input-group-text'>Product image</label>
          <input type='link' className='form-control' onChange={onImageClick} name="image5" id="validationDefault21" required/>
        </div>
        <div className='col-12 col-md-6 mt-4 '> 
            <label htmlFor="validationDefault03" className='form-label'>Product Description</label>
            <textarea type="text" className='form-control' onChange={onClick} name="description" id="validationResult03" required/>
        </div>
        
        
        <button type="submit" className='btn btn-primary col-12 col-md-7 mt-4'   data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal1" >Submit</button>
        </div>
      </form>

      {/* <button className=" col-md-2 col-5  btn btn-danger text-white fw-bold rounded mt-3  " data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#exampleModal1"  >Add to cart</button>  */}

    </div>
    <div className="modal fade " id="exampleModal1"  aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="modal-header bg-success">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel"> Message  </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      <span className="fw-bold">{alert}</span>
      {/* <h6> For more update check on order</h6> */}
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
  </div>
    <Footer/>
    </>
  )
}
