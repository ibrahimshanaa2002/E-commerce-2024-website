import React, { useContext } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { ProductContext } from "../../context/productContext/productContextProvider";
import { Link } from "react-router-dom";
import Loader from "./../../components/Loader/Loader";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navBar/Navbar";
import Footer from "../../components/Footer/Footer";

const Women = () => {
  const { filterProductsForWomen, loading } = useContext(ProductContext);
  const data = filterProductsForWomen(); // Destructure newArrivals from context
  if (loading) {
    return (
      <div className="h-screen flex w-full justify-center items-center">
        <Loader />
      </div>
    ); // Display the loader while fetching data
  }

  return (
    <div>
        <Banner/>
        <Navbar/>
      <div className="w-full lg:pl-12 md:pl-4 pl-2 py-16">
        <div className="flex flex-col items-center w-full gap-8 px-5 h-full">
          <div className="text-4xl font-bold">Women Collection</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {data.map((item) => (
              <ProductCard
                key={item._id}
                _id={item._id}
                title={item.title}
                desc={item.desc}
                img={item.img}
                newprice={item.newprice}
                oldprice={item.oldprice}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Women;
