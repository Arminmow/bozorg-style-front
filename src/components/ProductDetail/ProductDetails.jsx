import React from "react";
import "./ProductDetails.css";

function ProductDetails({ product, productInCart, onAddToCart, onUpdateQuantity }) {
  const { name, description, price } = product;

  return (
    <div className="col-md-6 rtl-text">
      <h1 className="rtl-text">{name}</h1>
      <p className="rtl-text">{description}</p>
      <p className="text-success fw-bold">قیمت: {price} تومان</p>

      {productInCart ? (
        <div className="quantity-container">
          <button
            className="quantity-btn"
            style={{ backgroundColor: "#d9384a" }}
            onClick={() => onUpdateQuantity("remove")}
          >
            -
          </button>
          <span className="quantity-display">{productInCart.quantity}</span>
          <button
            className="quantity-btn"
            style={{ backgroundColor: "#d9384a" }}
            onClick={() => onUpdateQuantity("add")}
          >
            +
          </button>
        </div>
      ) : (
        <button className="btn btn-primary mt-3" onClick={onAddToCart}>
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}

export default ProductDetails;
