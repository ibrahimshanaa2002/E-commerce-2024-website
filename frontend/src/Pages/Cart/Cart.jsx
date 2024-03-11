import React from "react";
import "./Cart.css";
import image from "../../assets/Brands/tshirt.jpg";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      <div className="title px-5 py-5">
        <h1 className="text-5xl font-bold">Your Cart</h1>
      </div>
      <div className="full-container  w-full flex px-5 py-5 gap-5">
        <div className="left-side border-[1px] overflow-y-auto border-gray-300 rounded-2xl w-[70%] h-[50vh] flex flex-row ">
          <div className="w-full">
            <div className="md:flex items-center p-5 border-t border-gray-200">
              <div className="w-[17%] ">
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
              <div className="w-[17%] ">
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
              <div className="w-[17%] ">
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
              <div className="w-[17%] ">
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

        <div className="right-side border-[1px] border-gray-300 rounded-2xl w-1/2 p-5">
          <div>
            <h1 className="text-3xl font-semibold pb-5">Order Summary</h1>

            <div className="subtotal flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Subtotal</h1>
              <h2 className="text-xl font-bold">$565</h2>
            </div>
            <div className="discount flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Discount (-20%)</h1>
              <h2 className="text-xl text-red-500 font-bold">-$113</h2>
            </div>
            <div className="fees flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Delivery Fee</h1>
              <h2 className="text-xl  font-bold">$15</h2>
            </div>
            <hr />
            <div className="total flex items-center justify-between py-2">
              <h1 className="text-xl text-gray-700">Total</h1>
              <h2 className="text-2xl  font-bold">$467</h2>
            </div>
            <div className="promo flex items-center gap-2">
              <div class="relative w-[70%] py-5">
                <input
                  type="text"
                  class="pl-10 pr-4 py-2 border rounded-3xl w-full bg-[#F0F0F0]"
                  placeholder="Enter your email"
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3  
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
            <div className="checkout flex items-center justify-center bg-black text-white py-2 rounded-3xl cursor-pointer hover:bg-orange-500 duration-300 font-semibold gap-2">
              <span>Go to Checkout</span>
              <FaArrowRight />
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
