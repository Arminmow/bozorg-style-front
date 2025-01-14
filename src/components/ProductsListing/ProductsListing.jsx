import React, { useEffect, useState } from "react";
import "./ProductsListing.css";

const ProductListing = ({products}) => {
  
  return (
    
    <div className="product-listing">
      { products ? products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image-wrapper">
            <img
              src={product.images && product.images[0] ? product.images[0].image_path : ''}
              alt={`Product ${product.id}`}
              className="product-image default"
            />
            <img
              src={product.images && product.images[1] ? product.images[1].image_path : ''}
              alt={`Product ${product.id} Hover`}
              className="product-image hover"
            />
          </div>
          <div>{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">{product.price}</div>
        </div>
      )) : ''}
    </div>
  );
};

export default ProductListing;
