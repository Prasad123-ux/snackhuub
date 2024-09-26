
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import Login from './Components/Screens/Login'
import Sign from './Components/Screens/Sign'
import Cart from './Components/Cart'
import Order from './Components/Order'
import Owner from './Components/Owner'
import Navbar from './Components/Option/Navbar'
import ShopRegister from './Components/ShopRegister'
import RegisterProduct from './Components/RegisterProduct'
import ProductDetail from './Components/Option/ProductDetail'

   import Profile from './Components/Option/Profile'
import Porders from './Components/Option/Porders'
import OwnerProfile from './Components/OwnerProfile'
import Summary from './Components/Option/Summary'
import Payments from './Components/Option/Payments'
import Ratings from './Components/Option/Ratings'
import Footer from './Components/Option/Footer'


export default function App() {
  return (
   
   
  
    
    <Router>
    <div>
      
      <Navbar/>
      
      <Routes>
       <Route exact path="/" element={<Home/>}/> 
       <Route exact path="/login" element={<Login/>}/> 
       <Route exact path="/createUser" element={<Sign/>}/>
       <Route exact path="/myCart" element={<Cart/>}/>
       <Route exact path="/myOrders" element={<Order/>}/>
       <Route exact path="/Owner" element={<Owner/>}/>
       <Route exact path="/shopRegister" element={<ShopRegister/>}/>
       <Route exact path="/productDetail/:id" element={<ProductDetail/>}/> 
       <Route exact path="/profile" element={<Profile/>}/>
       <Route exact path="/RegisterProduct"  element={<RegisterProduct/>}/>
       <Route exact path="profile/orders" element={<Porders/>}/>
       <Route exact path="/ownerProfile" element={<OwnerProfile/>}/>
       <Route exact path="/summary/:id" element={<Summary/>}/>
       <Route exact path="/payments" element={<Payments/>}/>
       <Route exact path="/rateProduct/:id" element={<Ratings/>}/> 
       

       


      
    
 </Routes>

 
    </div>
    <Footer/>
    </Router>

    
  )
}
