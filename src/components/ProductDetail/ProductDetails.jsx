import React from "react";
import "./ProductDetails.css";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

function ProductDetails({ productId, name, description, price, onAddToCart }) {
  const { cart } = useContext(CartContext);

  const productInCart = cart?.items?.find(
    (item) => item.product_id === String(productId)
  );
  console.log(productInCart);

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
          >
            -
          </button>
          <span className="quantity-display">{productInCart.quantity}</span>
          <button
            className="quantity-btn"
            style={{ backgroundColor: "#d9384a" }}
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
