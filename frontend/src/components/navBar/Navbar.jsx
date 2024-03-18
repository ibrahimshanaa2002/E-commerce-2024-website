import React, { useContext, useState, useRef, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import ShopDropDown from "./ShopDropDown";
import "./Navbar.css";
import CategoriesDropDown from "./CategoriesDropDown";
import SearchPopup from "./SearchPopup";
import { CartContext } from "../../context/CartContext/cartContextProvider";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { TbMoodKid, TbPlaneArrival, TbProgressAlert } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { LiaFemaleSolid, LiaMaleSolid } from "react-icons/lia";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const { itemCount } = useContext(CartContext);
  const navbarRef = useRef(null);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileNav(false);
      }
    };

    if (mobileNav) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileNav]);

  return (
    <div className="relative" ref={navbarRef}>
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
        <ul
          className={`md:flex hidden items-center justify-center gap-6 w-full ${
            mobileNav ? "" : "hidden"
          }`}
        >
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
      {mobileNav && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 w-fit"></div>
      )}
      <div
        className={`md:hidden inset-y-0 left-0 w-2/3 bg-white z-50 transition-transform transform absolute h-screen top-16 ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mobileNav-container p-5">
          <ul>
            <li class="py-3 flex items-center gap-2">
              <IoHomeOutline />
              Home
            </li>
            <li class="py-3 flex items-center gap-2 font-bold">
              <FaRegCircleDot />
              Shop
            </li>
            <li class="py-3 flex items-center gap-2">
              <BiShoppingBag />
              All Products
            </li>
            <li class="py-3 flex items-center gap-2">
              <TbPlaneArrival />
              New Arrivals
            </li>
            <li class="py-3 flex items-center gap-2">
              <FaArrowTrendUp />
              Top Selling
            </li>
            <li class="py-3 flex items-center gap-2">
              <TbProgressAlert />
              On Sale
            </li>
            <li class="py-3 flex items-center gap-2 font-bold">
              <FaRegCircleDot />
              Categories
            </li>
            <li class="py-3 flex items-center gap-2">
              <LiaMaleSolid />
              Men
            </li>
            <li class="py-3 flex items-center gap-2">
              <LiaFemaleSolid />
              Women
            </li>
            <li class="py-3 flex items-center gap-2">
              <TbMoodKid />
              Kids
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
