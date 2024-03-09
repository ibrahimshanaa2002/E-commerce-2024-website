import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import "./Product.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext/productContextProvider";
import Loader from "../../components/Loader/Loader";
const convertColorToHex = (colorName) => {
  const tempColor = document.createElement("div");
  tempColor.style.color = colorName;
  document.body.appendChild(tempColor);
  const computedColor = window.getComputedStyle(tempColor).color;
  document.body.removeChild(tempColor);
  // Convert the computed color value to hexadecimal
  return computedColor;
};
const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((e) => e._id === productId);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const isWhite = (color) => {
    return color.toLowerCase() === "white";
  };

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!product) {
    return (
      <div className="h-screen flex w-full justify-center items-center">
        <Loader />
      </div>
    ); // return a loading spinner or component
  }

  return (
    <div className="main w-full h-screen flex justify-around gap-6 p-10 ">
      <div className="left-container w-1/2  flex justify-center gap-6">
        <div className="big-image img-hover-zoom ">
          <img
            src={product.img}
            alt="Brand 1"
            className="h-full hover:cursor-pointer"
          />
        </div>
        <div className="column-img px-2 h-full justify-between  flex flex-col overflow-auto gap-3">
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
      <div className="right-container w-1/2 h-full flex flex-col  justify-center">
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
            <h1 className="font-bold text-3xl text-gray-400 line-through">
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
        <div className="color-container border-b-2 py-2">
          <h1>Select Color</h1>
          <div className="colors-circle py-5 gap-2 flex flex-wrap  items-center">
            {product.color.map((color, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full border border-gray-400 cursor-pointer relative ${
                  selectedColor === color ? "border-4 border-white" : ""
                } transition duration-300 ease-in-out mb-2 sm:mb-0 sm:mr-2`}
                onClick={() => selectColor(color)}
                style={{
                  backgroundColor: color,
                  color: isWhite(color) ? "black" : convertColorToHex(color),
                }}
              >
                {selectedColor === color && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FaCheck
                      className={`w-4 h-4 ${
                        isWhite(color) ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="size-container border-b-2 py-2">
          <h1>Select Size</h1>
          <div className="sizes flex flex-wrap gap-2 md:gap-4 py-2">
            {product.size.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSizeClick(size)}
                className={`py-2 px-4 hover:bg-gray-200 border rounded-xl cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="Counter flex text-center items-center w-full py-5 gap-4">
          <div className="counter-container w-[30%]  bg-[#F0F0F0] rounded-full gap-5 p-3 flex items-center justify-around">
            <div className="Negative">
              <button className=" text-3xl" onClick={decrementCount}>
                -
              </button>
            </div>
            <div className="number-count w-[50%]">
              <p>{count}</p>
            </div>

            <div className="positive">
              <button className="text-3xl" onClick={incrementCount}>
                +
              </button>
            </div>
          </div>
          <div className="Add-To-Cart-container w-[70%] bg-black text-white rounded-full gap-5 p-3 flex items-center justify-center hover:text-black hover:bg-orange-400 duration-300 cursor-pointer">
            <button className="cart-button text-3xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
