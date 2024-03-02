import React from "react";
import "./StaticCard.css";

const StatisticCard = ({ count, description }) => {
  return (
    <div className="w-full  p-3 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 text-black rounded-t rounded-b-none overflow-hidden">
        <div className="p-8 text-3xl font-bold text-center border-b-4 duration-300 transition-transform hover:transform hover:-translate-y-3 hover:text-orange-500 cursor-pointer">
          <span className="hover:text-orange-500 duration-300">{count}</span>
        </div>
        <ul className="w-full text-center text-sm">
          <li className="py-4 text-lg">{description}</li>
        </ul>
      </div>
    </div>
  );
};

const StaticsCard = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center ">
      <div className="flex justify-center w-full">
        <StatisticCard count="200+" description="International Brands" />
        <StatisticCard count="2,000+" description="High-Quality Products" />
      </div>
      <div className="one flex justify-center w-full">
        <StatisticCard count="30,000+" description="Happy Customers" />
      </div>
    </div>
  );
};

export default StaticsCard;
