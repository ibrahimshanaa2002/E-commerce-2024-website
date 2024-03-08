import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import axios from "axios";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/api/user/sendMail", {
        Email: email  // Send the email address in the 'Email' field
      });
      setEmail("");
      setError(""); // Reset error state if submission succeeds
      alert("Email submitted successfully!");
    } catch (error) {
      setError("Please enter a valid email");
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div>
      <div className="sides flex justify-between items-center bg-black py-3 px-10 rounded-2xl mx-9">
        <div className="left-side text-3xl font-bold text-white">
          <h1 className="">STAY UPTO DATE ABOUT</h1>
          <h2>OUR LATEST OFFERS</h2>
        </div>
        <div className="right-side flex flex-col gap-2 w-1/3">
          <div className="EmailInput">
            <div className="relative ">
              {error && <div className="text-red-600">{error}</div>}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="pl-10 pr-4 border py-3 rounded-3xl w-full"
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
          <div
            onClick={handleSubmitt}
            className="subscribe text-black font-semibold bg-white rounded-3xl flex justify-center items-center py-3 cursor-pointer duration-300 hover:text-white hover:bg-orange-500"
          >
            <span className=" ">Subscribe To News Letter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
