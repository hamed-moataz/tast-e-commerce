import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({pro}) => {
  return (
    <>
         <div  className="card" >
            <img src={pro.image} alt="" /> 
            <h5 className='card-title'>{pro.title.substring(0,20)}...</h5>
            <p className='card-text'>{pro.description.substring(0, 150)}...</p>
            <div className='links'>
              <Link className='btn btn-primary' to={`/product/${pro.id}`}>Detils</Link>   
              <Link className='btn btn-danger' to="/cart">Add To Cart</Link>   
            </div>
        </div>
    </>
  )
}

export default Product
