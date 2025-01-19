import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./CartDisplay.css";
import getCart from "../../modules/GetCart/getCart";
import { getProductById } from "../../modules/GetProductById/getProductById";

const CartDisplay = ({ onIncrease, onDecrease }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await getCart();
        const itemsWithDetails = [];

        for (const item of cart) {
          const productDetail = await getProductById(item.product_id);
          itemsWithDetails.push({
            id: productDetail.id,
            name: productDetail.name,
            image: productDetail.images[0]?.image_path || "",
            price: productDetail.price,
            quantity: item.quantity,
          });
        }

        setCartItems(itemsWithDetails);
      } catch (error) {
        alert("Error fetching cart:", error)
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="cart-container container my-4" dir="rtl">
      <h2 className="text-center mb-4">سبد خرید شما</h2>
      {loading ? (
        <p className="text-center">صبر کن...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex flex-column flex-md-row align-items-center justify-content-between mb-4"
            >
              {/* Cart Item Image */}
              <img
                src={item.image}
                className="cart-item-image"
                alt={item.name}
              />

              {/* Cart Item Info */}
              <div className="cart-item-info">
                <h5 className="cart-item-name">{item.name}</h5>
                <span className="cart-item-price">قیمت: {item.price}</span>
              </div>

              {/* Quantity and Total Price Section */}
              <div className="cart-item-quantity">
                <div className="quantity-controls d-flex align-items-center">
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
                </div>
                <span className="total-price">
                  جمع: {item.price * item.quantity}
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
