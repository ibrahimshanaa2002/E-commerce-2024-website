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
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useContext(CartContext);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchPopupOpen(event.target.value.trim() !== ""); // Open search popup only if there's a search query
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
        <SearchPopup />
        <div className="flex gap-4  items-center justify-center px-8 ">
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
      {mobileNav && <div></div>}
    </div>
  );
}

export default Navbar;
