import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import StaggeredDropDown from "./StaggeredDropDown";

import "./Navbar.css";
const Navbar = () => {
  // useStates
  const [mobileNav, setMobileNav] = useState(false);

  // functions
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
    console.log(mobileNav);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-row items-center lg:pl-12 md:pl-4 pl-2 py-4 justify-between md:gap-6 ">
        <div className="flex items-center gap-5">
          <RxHamburgerMenu
            onClick={handleMobileNav}
            size={20}
            className="md:hidden"
          />
          <h1 className="lg:text-3xl md:text-2xl text-lg font-extrabold">
            SHOP.CO
          </h1>
        </div>
        <ul className="md:flex items-center justify-center gap-6 w-full hidden">
          <li>
            <StaggeredDropDown />
          </li>
          <li>On Sale</li>
          <Link to={"/newArrivals"}>New Arrivals</Link>
          <li>Brands</li>
        </ul>
        {/* searchBar */}
        <div className="bg-gray-100 hidden sm:flex w-full px-2 py-1 ml-5 placeholder:text-[10px] rounded-full">
          <IoSearchOutline size={30} className="text-gray-500" />
          <input
            className="bg-transparent border-none rounded-none w-full  outline-none px-4 "
            type="text"
            placeholder="Search For Products..."
            name=""
            id=""
          />
        </div>
        {/* end */}
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

          <FiShoppingCart size={20} />
          <FaRegUserCircle size={20} />
        </div>
      </div>
      {/* mobileNav */}
      {mobileNav && (
        <div>
          <ul
            className={`${
              mobileNav ? "animate-slideInRight" : "animate-slideInLeft"
            } absolute flex flex-col  bg-black/70 duration-500 ease-in-out transition-all h-[90vh] text-white items-center justify-center gap-6 w-[50%]`}
          >
            <li className="flex gap-1 items-center">
              shop
              <IoMdArrowDropdown size={20} />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
