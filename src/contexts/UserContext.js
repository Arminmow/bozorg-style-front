import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";

// Create a Context for User Data
const UserContext = createContext();

// UserProvider to wrap the app and manage user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch user info and manage token expiration
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/user");
        setUser(response.data.user);
      } catch (err) {
        console.error("User not logged in or token invalid");
        localStorage.removeItem("jwtToken");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
