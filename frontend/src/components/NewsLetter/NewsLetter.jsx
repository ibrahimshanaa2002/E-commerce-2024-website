import React from "react";
import { TfiEmail } from "react-icons/tfi";
const NewsLetter = () => {
  return (
    <div>
      <div className="absolute px-[64px] py-[32px] w-[1240px] rounded-[20px] bg-black top-[-100px] h-[180px] flex text-white items-center justify-between ">
        <p className=" h-full flex items-center justify-start text-3xl font-bold  w-2/4">
          {" "}
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </p>
        <div className="flex flex-col items-center justify-center w-1/3 h-full gap-4">
          <div className="relative h-full flex items-center w-full px-4 py-2 rounded-full bg-slate-200">
            <TfiEmail />
            <input
              type="text"
              placeholder="Type your email"
              className="outline-none text-gray-700 border-none h-full w-full bg-transparent px-4 focus:outline-none focus:border-orange-600 focus:border-4"
            />
          </div>

          <button className="h-full w-full items-center px-4 py-2 text-black rounded-full bg-slate-200">
            Subscribe NewsLetter
          </button>
        </div>
      </div>
    </div>  
  );
};

export default NewsLetter;
