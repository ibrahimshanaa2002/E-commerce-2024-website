import React, { createContext, useState } from "react";

// Create a new context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to set the logged-in user
  const loginUser = (userData) => {
    setUser(userData);
  };

  // Function to logout the user
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
