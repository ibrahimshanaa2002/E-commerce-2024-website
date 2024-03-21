import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context for Product data
export const ProductContext = createContext({});

// Provider component for ProductContext
const ProductContextProvider = (props) => {
  // State for products and new arrivals
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  // Filtering functions

  // for sex
  const filterProductsForWomen = () => {
    return products.filter((product) => product.sex === "Women");
  };
  const filterProductsForMen = () => {
    return products.filter((product) => product.sex === "Men");
  };
  const filterProductsForKids = () => {
    return products.filter((product) => product.sex === "Kids");
  };
  // for seasen
  const filterProductsForfall = () => {
    return products.filter((product) => product.season === "fall");
  };
  const filterProductspring = () => {
    return products.filter((product) => product.season === "spring");
  };
  const filterProductsForsummer = () => {
    return products.filter((product) => product.season === "summer");
  };
  const filterProductsForwinter = () => {
    return products.filter((product) => product.season === "winter");
  };
  // for styling
  const filterProductsForCasual = () => {
    return products.filter((product) => product.style === "Casual");
  };
  const filterProductsForFormal = () => {
    return products.filter((product) => product.style === "Formal");
  };
  const filterProductsForParty = () => {
    return products.filter((product) => product.style === "Party");
  };

  const filterProductsForGym = () => {
    return products.filter((product) => product.style === "Gym");
  };

  // Effect hook to fetch new arrivals
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/product/newArrivals"
        );
        setNewArrivals(response.data);
        // Assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };

    fetchNewArrivals();
  }, []);

  // Effect hook to fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/product/allProducts"
        );
        setProducts(response.data);
        // Assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  const contextValue = {
    products: products,
    newArrivals: newArrivals,
    filterProductsForWomen: filterProductsForWomen,
    filterProductsForMen: filterProductsForMen,
    filterProductsForKids: filterProductsForKids,
    filterProductsForfall: filterProductsForfall,
    filterProductspring: filterProductspring,
    filterProductsForsummer: filterProductsForsummer,
    filterProductsForwinter: filterProductsForwinter,
    filterProductsForCasual: filterProductsForCasual,
    filterProductsForFormal: filterProductsForFormal,
    filterProductsForParty: filterProductsForParty,
    filterProductsForGym: filterProductsForGym,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
