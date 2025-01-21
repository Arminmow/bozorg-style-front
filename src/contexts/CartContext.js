import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import { addToCart as addToCartAPI } from "../modules/AddToCart/addToCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart state

  // Fetch cart data when the context initializes
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

  // Add a product to the cart
  const addToCart = async (productId, quantity = 1) => {
    try {
      await addToCartAPI(productId, quantity); // Call the backend API to add to the cart
      const updatedCart = await axiosInstance.get("/cart"); // Fetch updated cart data
      setCart(updatedCart.data.cart || []); // Update cart state
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  // Update product quantity in the cart
  const updateQuantity = async (productId, action) => {
    try {
      if (action === "add") {
        await addToCartAPI(productId, 1); // Increase quantity by 1
      } else if (action === "remove") {
        await axiosInstance.delete(`/cart/${productId}`); // Decrease or remove product
      }
      const updatedCart = await axiosInstance.get("/cart"); // Fetch updated cart data
      setCart(updatedCart.data.cart || []); // Update cart state
    } catch (error) {
      console.error("Error updating product quantity", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
