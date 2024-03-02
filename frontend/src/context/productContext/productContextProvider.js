import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext({});

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/product/newArrivals");
        setNewArrivals( await response.data);
       // Assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };

    fetchNewArrivals();
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/product/allProducts");
        setProducts( await response.data);
        // Assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  const contextValue = {
    products: products,
    newArrivals: newArrivals
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
