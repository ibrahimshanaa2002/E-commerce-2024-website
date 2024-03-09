import React from "react";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopSelling from "../../components/TopSelling/TopSelling";
import Browse from "../../components/Browse/Browse";
import Welcome from "../../components/Welcome/Welcome";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Hero = () => {
  return (
    <div className="w-full ">
      <Welcome />
      <NewArrivals />
      <hr className="py-4 mt-8 m-8" />
      <TopSelling />
      <hr className="py-4 mt-8 m-8" />
      <Browse />
      <hr className="py-4 mt-8 m-8" />

      <ReviewsCard />
      <hr className="py-4 mt-8 m-8" />
      <NewsLetter />
      <br className=" " />
    </div>
  );
};

export default Hero;
