import React from "react";
import "./Cart.css";
import image from "../../assets/Brands/tshirt.jpg";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      <div className="title">
        <h1>Your Cart</h1>
      </div>
      <div className="full-container w-full flex">
        <div className="left-side border-2 border-gray-400 w-1/2 h-screen flex flex-row">
          <div className="cart-product w-full h-1/2">
            <div className="main flex justify-around items-center h-1/2">
              <div className="image w-1/2">
                <img src={image} alt="" />
              </div>
              <div className="information w-1/2 flex flex-col justify-between">
                <div className="title flex items-center justify-between">
                  <h1 className="font-bold text-2xl">Product Name</h1>
                  <FaTrashCan className="text-lg hover:text-red-600 cursor-pointer duration-200" />
                </div>

                <div className="size flex items-center">
                  <h1 className="mr-2">Size:</h1>
                  <h2>xxx</h2>
                </div>
                <div className="color flex" items-center>
                  <h1 className="mr-2">Color:</h1>
                  <h2>xxx</h2>
                </div>
                <div className="price flex items-center">
                  <h1 className="font-bold text-xl mr-2 ">Price:</h1>
                  <h2>xxx</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side border-2 border-gray-400  w-1/2"></div>
      </div>
    </div>
  );
};

export default Cart;
