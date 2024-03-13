import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import ShopDropDown from "./ShopDropDown";
import "./Navbar.css";
import CategoriesDropDown from "./CategoriesDropDown";
import SearchPopup from "./SearchPopup";
import { CartContext } from "../../context/CartContext/cartContextProvider";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleSearchIconClick = () => {
    setSearchPopupOpen(!isSearchPopupOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center lg:pl-12 md:pl-4 pl-2 py-4 justify-between md:gap-6 ">
        <div className="flex items-center gap-5">
          <RxHamburgerMenu
            onClick={handleMobileNav}
            size={20}
            className="md:hidden"
          />
          <Link to={"/"}>
            <h1 className="lg:text-3xl md:text-2xl text-lg font-extrabold">
              SHOP.CO
            </h1>
          </Link>
        </div>
        <ul className="md:flex items-center justify-center gap-6 w-full hidden">
          <li>
            <ShopDropDown />
          </li>
          <li>On Sale</li>
          <Link to={"/newArrivals"}>New Arrivals</Link>
          <li>
            <CategoriesDropDown />
          </li>
        </ul>
        <div className="bg-gray-100 hidden sm:flex w-full px-2 py-1 ml-5 placeholder:text-[10px] rounded-full">
          <IoSearchOutline
            size={30}
            className="text-gray-500 cursor-pointer"
            onClick={handleSearchIconClick}
          />
          <div className="absolute">{isSearchPopupOpen && <SearchPopup />}</div>

          <input
            className="bg-transparent border-none rounded-none w-full  outline-none px-4 "
            type="text"
            placeholder="Search For Products..."
            name=""
            id=""
          />
        </div>
        <div className="flex gap-4  items-center justify-center px-8 ">
          <div className="bg-gray-100 flex sm:hidden w-full px-2 placeholder:text-[6px] py-1 rounded-full">
            <IoSearchOutline size={30} className="text-gray-500" />
            <input
              className="bg-transparent border-none rounded-none w-full  outline-none px-4 "
              type="text"
              placeholder="Search For Products..."
              name=""
              id=""
            />
          </div>
          <Link to={"/Cart"}>
            <div className="relative ">
              <FiShoppingCart
                size={22}
                className="hover:text-red-900 duration-200 cursor-pointer"
              />
              <div className="rounded-full bg-red-600 flex items-center justify-center absolute top-[-35%] left-[-40%] text-white w-full h-full text-sm">
                {itemCount > 0 ? itemCount : 0}
              </div>
            </div>
          </Link>
          <FaRegUserCircle
            size={22}
            className="hover:text-red-900 duration-200 cursor-pointer"
          />
        </div>
      </div>
      {mobileNav && (
        <div>
          <ul
            className={`${
              mobileNav ? "animate-slideInRight" : "animate-slideInLeft"
            } absolute flex flex-col  bg-black/70 duration-500 ease-in-out transition-all h-[90vh] text-white items-center justify-center gap-6 w-[50%]`}
          >
            <li className="flex gap-1 items-center">
              shop
              <IoMdArrowDropdown size={22} />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
