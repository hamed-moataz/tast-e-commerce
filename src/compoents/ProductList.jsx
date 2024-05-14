import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);
  const [categorios, setCategorios] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((item) => setProduct(item));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((item) => setCategorios(item));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((item) => setProduct(item));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="contanier">
        <div className="text-center py-4">
          <button className="btn btn-info" onClick={()=>{
            getProducts()
          }}>All</button>
          {categorios.map((cat) => {
            return (
              <button
                key={cat}
                className="btn btn-info  gx-2 mx-2"
                onClick={() => {
                  getProductInCategory(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="row mx-5 gx-4 gy-2 text-center">
          {products.map((item) => (
            <div key={item.id} className="col-3">
              <Product pro={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
