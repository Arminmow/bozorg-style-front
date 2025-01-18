import React from "react";
import { UserProvider } from "../contexts/UserContext";
import { CartProvider } from "../contexts/CartContext";

const Providers = ({ children }) => {
    return (
      <UserProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </UserProvider>
    );
  };
  
  export default Providers;