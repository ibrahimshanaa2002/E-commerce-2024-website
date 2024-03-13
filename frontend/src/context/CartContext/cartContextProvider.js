import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext([]);

const CartContextProvider = (props) => {
  const [itemCount, setItemCount] = useState();

  useEffect(() => {
    const fetchItemCount = async () => {
      try {
        const initialUser = JSON.parse(localStorage.getItem("user")) || null;
        const token = initialUser?.token || "";
        const response = await axios.get(
          "http://localhost:4001/api/cart/cart/item-count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setItemCount(response.data.itemCount);
      } catch (error) {
        console.error("Error fetching item count:", error);
      }
    };

    fetchItemCount();
  }, []); 

  return (
    <CartContext.Provider value={{ itemCount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
