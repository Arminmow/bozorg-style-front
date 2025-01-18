import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import { addToCart as addToCartAPI } from "../modules/AddToCart/addToCart";
// Create a Context for Cart Data
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart data when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axiosInstance.get("/cart");
        setCart(response.data.cart || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // Add to cart handler
  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await addToCartAPI(productId, quantity); // Call the separate addToCart function
      // Re-fetch the updated cart from the backend
      const updatedCart = await axiosInstance.get("/cart");
      setCart(updatedCart.data.items || []); // Update the cart state with the latest cart data
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
