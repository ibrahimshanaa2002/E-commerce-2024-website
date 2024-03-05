import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import "./Product.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext/productContextProvider";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((e) => e._id === productId);
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500"];

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Loading...</div>; // Or you can return a loading spinner or component
  }

  return (
    <div className="main w-full h-screen flex justify-around gap-6 p-10 ">
      <div className="left-container w-1/2 h-1/2 flex justify-center gap-6">
        <div className="big-image img-hover-zoom ">
          <img
            src={product.img}
            alt="Brand 1"
            className="h-full hover:cursor-pointer"
          />
        </div>
        <div className="column-img h-full justify-between  flex flex-col overflow-auto gap-6">
          <img
            src={product.img}
            alt=""
            className="border h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer  "
          />
          <img
            src={product.img}
            alt=""
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
          <img
            src={product.img}
            alt=""
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
          <img
            src={product.img}
            alt=""
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
          <img
            src={product.img}
            alt=""
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="right-container w-1/2 h-1/2">
        <h1 className="text-5xl font-extrabold uppercase title">
          {product.title}
        </h1>
        <div className="Main-starts flex justify-start items-center text-center gap-3 py-5">
          <div className="stars flex text-yellow-400 text-2xl">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="rate">4.5/ 5</div>
        </div>
        <div className="price-container flex justify-start items-center gap-4">
          <div className="price">
            <h1 className="font-bold text-3xl">${product.newprice}</h1>
          </div>
          <div className="old-price">
            <h1 className="font-bold text-3xl text-gray-400">
              ${product.oldprice}
            </h1>
          </div>
          <div className="discount">
            <h1 className="bg-red-100 text-[#FF3333] rounded-3xl px-5 py-1">
              40%
            </h1>
          </div>
        </div>
        <div className="product-desc border-b-2 py-2">
          <p className="py-5">{product.desc}</p>
        </div>
        <div className="color-container border-b-2">
          <h1 className="text-gray-500">Select Color</h1>

          <div className="colors-circle py-5 gap-2 flex  items-center ">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full cursor-pointer relative ${color} ${
                  selectedColor === color
                }`}
                onClick={() => selectColor(color)}
              >
                {selectedColor === color && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FaCheck className="text-white w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="size-container">
          <h1>Select Size</h1>
          <div className="sizes"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
