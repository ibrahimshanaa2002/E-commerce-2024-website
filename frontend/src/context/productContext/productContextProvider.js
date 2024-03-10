import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext({});

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const filterProductsForWomen = () => {
    return products.filter((product) => product.sex === "Women");
  };
  const filterProductsForMen = () => {
    return products.filter((product) => product.sex === "Men");
  };
  const filterProductsForKids = () => {
    return products.filter((product) => product.sex === "Kids");
  };
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
  const filterProductsForCasual = () => {
    return products.filter((product) => product.style === "Casual");
  };
  const filterProductsForFormal = () => {
    return products.filter((product) => product.season === "Formal");
  };
  const filterProductsForParty = () => {
    return products.filter((product) => product.season === "Party");
  };

  const filterProductsForGym = () => {
    return products.filter((product) => product.season === "Gym");
  };


  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/product/newArrivals"
        );
        setNewArrivals(await response.data);
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
        const response = await axios.get(
          "http://localhost:4001/api/product/allProducts"
        );
        setProducts(await response.data);
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
    filterProductsForCasual:filterProductsForCasual,
    filterProductsForFormal:filterProductsForFormal,
    filterProductsForParty:filterProductsForParty,
    filterProductsForGym:filterProductsForGym



  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
