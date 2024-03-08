import React from "react";
import { MdOutlineMail } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div>
      <div className="sides flex justify-between items-center">
        <div className="leftside">
          <h1>STAY UPTO DATE ABOUT</h1>
          <h2>OUR LATEST OFFERS</h2>
        </div>
        <div className="righ-side">
          <div className="EmailInput">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <i>
                  <MdOutlineMail />
                </i>
              </div>
            </div>
          </div>
          div.subscrib
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
