import React, { useState, useEffect, useMemo, useContext } from "react";
import "./Welcome.css";
import StatisticCard from "../Cards/StaticCard/StaticCard";
import personImage from "../../assets/Background/bg-persons.png";
import Brand1 from "../../assets/Brands/Brand1.png";
import Brand2 from "../../assets/Brands/Brand2.png";
import Brand3 from "../../assets/Brands/Brand3.png";
import Brand4 from "../../assets/Brands/Brand4.png";
import Brand5 from "../../assets/Brands/Brand5.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContextProvider";

const Welcome = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const brands = useMemo(() => [Brand1, Brand2, Brand3, Brand4, Brand5], []);

  return (
    <>
      <div className="bg-image bg-cover bg-center h-full flex justify-start items-start flex-col w-full p-12 ">
        <div className="left-container flex justify-start flex-col xl:w-[50%] py-12 sm:w-full">
          {user ? (
            <h1 className="font-extrabold text-8xl xl:py-9 xl:w-[70%] flex sm:w-full pb-4 title up">
              Welcome, {user.username}!
            </h1>
          ) : (
            <h1 className="font-extrabold text-8xl xl:py-9 xl:w-[70%] flex sm:w-full pb-4 title">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
          )}
          <p className="xl:w-[65%] text-2xl pb-8 sm:w-full description">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to={"/allproducts"}>
            <span className="flex justify-center items-center xl:w-[20%] sm:w-full bg-black hover:bg-orange-500 text-white font-semibold p-5 rounded-full cursor-pointer duration-300">
              Shop Now
            </span>
          </Link>
        </div>
        <div className="w-[50%] static-cards">
          <StatisticCard />
        </div>
      </div>
      <div className="mobile flex flex-col-reverse">
        <div className="brands flex flex-row bg-black justify-around h-full w-full flex-wrap align-center items-center gap-8 p-6 ">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="h-10 brand"
            />
          ))}
        </div>

        {/* Lazy load the image for small screens */}
        {isSmallScreen && (
          <img
            src={personImage}
            alt=""
            className="personImage w-full"
            loading="lazy"
          />
        )}
      </div>
    </>
  );
};

export default Welcome;
