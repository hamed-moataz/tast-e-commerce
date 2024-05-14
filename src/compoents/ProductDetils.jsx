import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetils = () => {
  const [product, setProduct] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  const prams = useParams();
  useEffect(() => {
    fetch(`${api_url}/${prams.productId}`)
      .then((res) => res.json())
      .then((prod) => setProduct(prod));

  }, []);
  return(
    <div  className="card-detils" >
            <img src={product.image} alt="" /> 
            <h5 className='card-title'>{product.title}</h5>
            <p className='card-text'>{product.description}</p>
            <Link className='btn btn-primary' to="/">Back</Link>   
        </div>
  );
};

export default ProductDetils;
