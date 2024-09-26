
 import {Link} from 'react-router-dom' 

export default function Porders() {
  return (
    <div className='mx-auto text-center'>
      <h3>ORDERS</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCdxgI6xeWwh17nggjyy9T8VH03mG-o-V81ptjjRYqw&s" className=' d-block' ></img>
      <Link className='btn btn-primary mt-5  ' to="/myOrders"> Get my all orders here</Link>
    </div>
  )
}
