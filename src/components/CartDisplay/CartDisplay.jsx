import React from "react";
import { Button } from "reactstrap";
import "./CartDisplay.css";

const CartDisplay = ({ cartItems, onIncrease, onDecrease }) => {
  return (
    <div className="cart-container container my-4" dir="rtl">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex align-items-center justify-content-between mb-4"
            >
              {/* Cart Item Image */}
              <img
                src={item.image}
                className="cart-item-image"
                alt={item.name}
              />

              {/* Cart Item Info */}
              <div className="cart-item-info d-flex flex-column">
                <h5 className="cart-item-name">{item.name}</h5>
                <span className="cart-item-price">Price: ${item.price}</span>
              </div>

              {/* Quantity and Total Price Section */}
              <div className="cart-item-quantity d-flex align-items-center">
                <Button
                  size="sm"
                  color="primary"
                  className="quantity-btn"
                  onClick={() => onDecrease(item.id)}
                >
                  -
                </Button>
                <span className="quantity-value mx-3">{item.quantity}</span>
                <Button
                  size="sm"
                  color="primary"
                  className="quantity-btn"
                  onClick={() => onIncrease(item.id)}
                >
                  +
                </Button>
                <span className="total-price mx-3">
                  Total: ${item.price * item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
