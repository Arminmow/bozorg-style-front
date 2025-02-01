import React, { useEffect, useState } from "react";
import "./ProductsListing.css";
import { Link } from "react-router-dom";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products
        ? products.map((product) => (
            <div key={product.id} className="product">
              <Link
                to={`/product/${product.id}`}
                className="product-image-wrapper"
              >
                <img
                  src={
                    product.images && product.images[0]
                      ? product.images[0].image_path
                      : ""
                  }
                  alt={`Product ${product.id}`}
                  className="product-image default"
                  loading="lazy"
                />
                <img
                  src={
                    product.images && product.images[1]
                      ? product.images[1].image_path
                      : ""
                  }
                  alt={`Product ${product.id} Hover`}
                  className="product-image hover"
                  loading="lazy"
                />
              </Link>
              <div>{product.name}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-price">{product.price}</div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ProductListing;
