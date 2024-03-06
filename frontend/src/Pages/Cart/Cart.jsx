import React from "react";
import "./Cart.css";
import image from "../../assets/Browse/b1.png";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      <div className="title">
        <h1>Your Cart</h1>
      </div>
      <div className="full-container w-full flex">
        <div className="left-side border-2 border-gray-400 w-1/2 flex flex-row">
          <div className="cart-product">
            <div className="main">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="information">
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
