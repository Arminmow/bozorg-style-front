import React from "react";
import "./ProductDetails.css";

function ProductDetails({ name, description, price, onAddToCart }) {
  return (
    <div className="col-md-6 rtl-text">
      <h1 className="rtl-text">{name}</h1>
      <p className="rtl-text">{description}</p>
      <p className="text-success fw-bold">قیمت: {price} تومان</p>
      <button className="btn btn-primary mt-3" onClick={onAddToCart}>
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductDetails;
