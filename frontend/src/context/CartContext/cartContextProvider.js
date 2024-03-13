import React, { createContext, useState} from "react";


export const CartContext = createContext([]);

const CartContextProvider = (props) => {
  const [itemCount, setItemCount] = useState();

  // useEffect(() => {
  //   const fetchCartItemCount = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4001/api/cart/cart/item-count"
  //       );
  //       setItemCount(response.data.itemCount);
  //     } catch (error) {
  //       console.error("Error fetching cart item count:", error);
  //     }
  //   };

  //   fetchCartItemCount();
  // }, []);

  return (
    <CartContext.Provider value={{ itemCount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
