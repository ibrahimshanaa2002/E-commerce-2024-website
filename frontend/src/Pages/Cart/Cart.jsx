import React from "react";
import "./Cart.css";
import image from "../../assets/Brands/tshirt.jpg";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      <div className="title px-5">
        <h1>Your Cart</h1>
      </div>
      <div className="full-container  w-full flex px-5 gap-5">
        <div className="left-side border-2 overflow-y-auto border-gray-400 rounded-2xl w-1/2 h-screen flex flex-row">
          <div>
            <div className="md:flex items-center p-5 border-t border-gray-200">
              <div className="w-1/4 ">
                <img
                  src={image}
                  alt
                  className="w-full h-full object-center object-cover rounded-xl"
                />
              </div>
              <div className="md:pl-3  w-full">
                <div className="flex items-center justify-between w-full pt-1">
                  <div className="product-title flex justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800 pb-4">
                      North wolf bag
                    </p>
                    <FaTrashCan className="hover:text-red-600 duration-200 cursor-pointer" />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 py-2 pt-3">
                  Size: large
                </p>
                <p className="text-xs leading-3 text-gray-600 py-2 pb-3">
                  Color: Black
                </p>

                <div className="flex items-center justify-between  pr-6">
                  <div className="price flex items-center pt-3">
                    <h1 className="mr-2 text-base font-black leading-none text-gray-800">
                      Price:
                    </h1>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex items-center p-5 border-t border-gray-200">
              <div className="w-1/4 ">
                <img
                  src={image}
                  alt
                  className="w-full h-full object-center object-cover rounded-xl"
                />
              </div>
              <div className="md:pl-3  w-full">
                <div className="flex items-center justify-between w-full pt-1">
                  <div className="product-title flex justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800 pb-4">
                      North wolf bag
                    </p>
                    <FaTrashCan className="hover:text-red-600 duration-200 cursor-pointer" />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 py-2 pt-3">
                  Size: large
                </p>
                <p className="text-xs leading-3 text-gray-600 py-2 pb-3">
                  Color: Black
                </p>

                <div className="flex items-center justify-between  pr-6">
                  <div className="price flex items-center pt-3">
                    <h1 className="mr-2 text-base font-black leading-none text-gray-800">
                      Price:
                    </h1>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex items-center p-5 border-t border-gray-200">
              <div className="w-1/4 ">
                <img
                  src={image}
                  alt
                  className="w-full h-full object-center object-cover rounded-xl"
                />
              </div>
              <div className="md:pl-3  w-full">
                <div className="flex items-center justify-between w-full pt-1">
                  <div className="product-title flex justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800 pb-4">
                      North wolf bag
                    </p>
                    <FaTrashCan className="hover:text-red-600 duration-200 cursor-pointer" />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 py-2 pt-3">
                  Size: large
                </p>
                <p className="text-xs leading-3 text-gray-600 py-2 pb-3">
                  Color: Black
                </p>

                <div className="flex items-center justify-between  pr-6">
                  <div className="price flex items-center pt-3">
                    <h1 className="mr-2 text-base font-black leading-none text-gray-800">
                      Price:
                    </h1>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex items-center p-5 border-t border-gray-200">
              <div className="w-1/4 ">
                <img
                  src={image}
                  alt
                  className="w-full h-full object-center object-cover rounded-xl"
                />
              </div>
              <div className="md:pl-3  w-full">
                <div className="flex items-center justify-between w-full pt-1">
                  <div className="product-title flex justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800 pb-4">
                      North wolf bag
                    </p>
                    <FaTrashCan className="hover:text-red-600 duration-200 cursor-pointer" />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 py-2 pt-3">
                  Size: large
                </p>
                <p className="text-xs leading-3 text-gray-600 py-2 pb-3">
                  Color: Black
                </p>

                <div className="flex items-center justify-between  pr-6">
                  <div className="price flex items-center pt-3">
                    <h1 className="mr-2 text-base font-black leading-none text-gray-800">
                      Price:
                    </h1>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side border-2 border-gray-400 rounded-2xl w-1/2"></div>
      </div>
    </div>
  );
};

export default Cart;
