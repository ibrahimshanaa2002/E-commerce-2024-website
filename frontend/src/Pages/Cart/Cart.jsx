import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { UserContext } from "../../context/userContext/userContextProvider";
import axios from "axios";

const Cart = () => {
  const { user } = useContext(UserContext);
  const [productsInCart, setProductsInCart] = useState([]);
  const DISCOUNT_RATE = 0.2;
  const DELEVARY = 15;

  useEffect(() => {
    const fetchProductsInCart = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        const userToken = userData ? userData.token : null;
        const response = await axios.get(
          "http://localhost:4001/api/cart/cart",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        setProductsInCart(response.data.productsInCart);
      } catch (error) {
        console.error("Error fetching products in cart:", error);
      }
    };

    fetchProductsInCart();
  }, []);

  // Function to calculate total cost for a product
  const calculateTotalCost = (quantity, price) => {
    return quantity * price;
  };

  // Calculate subtotal for all products in the cart
  const subtotal = productsInCart.reduce(
    (total, product) =>
      total + calculateTotalCost(product.quantity, product.newprice),
    0
  );

  const TOOTAL = subtotal - subtotal * DISCOUNT_RATE + DELEVARY;

  return (
    <div>
      <div className="title px-5 py-5">
        {user ? (
          <h1 className="text-5xl font-bold">
            <span className="text-red-700">{user.username}'s</span> Cart
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="full-container w-full flex px-5 py-5 gap-5">
        <div className="left-sidess border-[1px] overflow-y-auto border-gray-300 rounded-2xl flex flex-row ">
          <div className="w-full">
            {productsInCart.map((product) => (
              <div key={product._id} className="md:flex items-center p-5 ">
                <div className="flex items-center">
                  <div className="w-[17%] h-full">
                    <div className="h-full">
                      <img
                        src={product.img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="pl-3 w-full">
                    <div className="flex items-center justify-between w-full pt-1">
                      <div className="product-title flex justify-between w-full">
                        <p className=" font-extrabold leading-none  ">
                          {product.title}
                        </p>
                        <FaTrashCan className="hover:text-red-600 duration-200 cursor-pointer" />
                      </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600  pt-3">
                      Size: {product.size}
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-2 pb-3">
                      Color: {product.color}
                    </p>
                    <div className="flex flex-col  justify-between  ">
                      <div className="price flex items-center py-1">
                        <h1 className="mr-2 text-base font-bold leading-none ">
                          Price:
                        </h1>
                        <p className="  leading-none  text-gray-800">
                          ${product.newprice}
                        </p>
                      </div>
                      <div className="price flex items-center py-1">
                        <h1 className="mr-2 text-base font-bold  leading-none ">
                          Quantity:
                        </h1>
                        <p className=" leading-none text-gray-800">
                          {product.quantity}
                        </p>
                      </div>
                      <div className="price flex items-center py-1">
                        <h1 className="mr-2 text-base font-bold  leading-none ">
                          Total Cost:
                        </h1>
                        <p className="leading-none text-gray-800">
                          $
                          {calculateTotalCost(
                            product.quantity,
                            product.newprice
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-sidess border-[1px] border-gray-300 rounded-2xl w-1/2 p-5">
          <div>
            <h1 className="text-3xl font-semibold pb-5">Order Summary</h1>
            <div className="subtotal flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Subtotal</h1>
              <h2 className="text-xl font-bold">${subtotal}</h2>
            </div>
            <div className="discount flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Discount (-20%)</h1>
              <h2 className="text-xl text-red-500 font-bold">
                ${(subtotal * DISCOUNT_RATE).toFixed(2)}
              </h2>
            </div>
            <div className="fees flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Delivery Fee</h1>
              <h2 className="text-xl  font-bold">${DELEVARY}</h2>
            </div>
            <hr />
            <div className="total flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Total</h1>
              <h2 className="text-2xl  font-bold">${TOOTAL}</h2>
            </div>
            <div className="promo flex items-center gap-2">
              <div className="relative w-[70%] py-5">
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border rounded-3xl w-full bg-[#F0F0F0]"
                  placeholder="Enter your email"
                />
                <div
                  className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                >
                  <MdOutlineDiscount />
                </div>
              </div>
              <div className="w-[30%] flex items-center justify-center bg-black text-white py-2 rounded-3xl cursor-pointer hover:bg-orange-500 duration-300 font-semibold">
                <span>Apply</span>
              </div>
            </div>
          </div>

          <div className="logo h-[10vh]  flex justify-center items-center text-5xl font-extrabold uppercase">
            <h1>Shop.co</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
