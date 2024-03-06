import React from "react";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopSelling from "../../components/TopSelling/TopSelling";
import Browse from "../../components/Browse/Browse";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
import Welcome from "../../components/Welcome/Welcome";
import Loader from "../../components/Loader/Loader";

const Hero = () => {
  return (
    <div className="w-full ">
      <Welcome />

      <NewArrivals />
      <hr className="py-4 mt-8 m-8" />
      <TopSelling />
      <hr className="py-4 mt-8 m-8" />
      <Browse />
      <HappyCustomers />
    </div>
  );
};

export default Hero;
