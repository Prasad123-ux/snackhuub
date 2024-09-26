
import PropTypes from 'prop-types';

export default function OdocumentDetail({pan, gstin, accountNumber, branchName, ifsc, bankName}) {
  return (
    <div className='text-center '>
      <h2 className=''>Documental Detail</h2>
      <div className='row w-100' >
      
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Pan Number</span>:-<span className=' fs-5 fw-bold'>{pan}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>GSTIN</span>:-<span className=' fs-5 fw-bold'>{gstin}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Bank Name</span>:-<span className=' fs-5 fw-bold'>{bankName}</span></div>
      <div className='col-lg-6 col-12  mt-5'><span className='fs-6 fw-medium'> Branch Name</span>:-<span className=' fs-5 fw-bold'>{branchName}</span></div>
      <div className='col-lg-6 col-12 mt-5'><span className='fs-6 fw-medium'>Account Number</span>:-<span className=' fs-5 fw-bold'>{accountNumber}</span></div>
      <div className='col-lg-6 col-12  mt-5'><span className='fs-6 fw-medium'>GSTIN</span>:-<span className=' fs-5 fw-bold'>{gstin}</span></div>
      <div className='col-lg-6 col-12  mt-5'><span className='fs-6 fw-medium'>IFSC code</span>:-<span className=' fs-5 fw-bold'>{ifsc}</span></div>
     



      </div>
    </div>
  )
}

OdocumentDetail.propTypes={
  pan:PropTypes.string.isRequired,
  gstin:PropTypes.string.isRequired,
  accountNumber:PropTypes.number.isRequired,
  branchName:PropTypes.string.isRequired,
  ifsc:PropTypes.string.isRequired,
  bankName:PropTypes.string.isRequired

}

// Card.defaultProps={
//   name:"Item",
//   addres:"not mentioned",
//   price:0,
//   description:"this is item",
//   discount:0,
//   type:"veg",
//   category:"general",
//   // rating:3.5,
//   // deliveryTime:5


// }