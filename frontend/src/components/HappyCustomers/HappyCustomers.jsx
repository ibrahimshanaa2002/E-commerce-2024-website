import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import star_icon from "../../assets/star_icon.png";

const HappyCustomers = () => {
  let initialCustomers = [
    {
      name: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "John D.",
      description:
        "Shop.co has the best customer service! They helped me find the perfect outfit for my friend's wedding, and I couldn't be happier with my purchase.",
    },
    {
      name: "Emily S.",
      description:
        "I've been a loyal customer of Shop.co for years. Their clothing is not only fashionable but also durable. I always receive compliments when wearing their designs.",
    },
    {
      name: "Michael L.",
      description:
        "The shipping was incredibly fast, and the packaging was eco-friendly. I appreciate Shop.co's commitment to sustainability.",
    },
    {
      name: "Olivia R.",
      description:
        "I love how versatile Shop.co's clothing is. Whether I'm going to work or out with friends, I can always find something stylish to wear.",
    },
    {
      name: "Daniel H.",
      description:
        "Shop.co's online ordering process is so easy to use. I was able to find what I needed quickly and checkout seamlessly.",
    },
    {
      name: "Sophia G.",
      description:
        "The quality of Shop.co's clothing is unmatched. I've washed my items multiple times, and they still look brand new.",
    },
    {
      name: "William K.",
      description:
        "I appreciate that Shop.co offers a wide range of sizes. As a plus-size individual, it can be challenging to find trendy clothes that fit well, but Shop.co has plenty of options.",
    },
    {
      name: "Ava B.",
      description:
        "The prices at Shop.co are unbeatable for the quality you receive. I feel like I'm getting designer clothing at affordable prices.",
    },
    {
      name: "Liam P.",
      description:
        "I recently bought a gift card for Shop.co as a present for my sister, and she loved it! It was the perfect way to let her choose something she truly wanted.",
    },
  ];

  const [displayedCustomers, setDisplayedCustomers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedCustomers(initialCustomers.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  const nextCustomer = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === initialCustomers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCustomer = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? initialCustomers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-4 py-8 h-screen flex items-center justify-center sm:px-8 lg:px-16 xl:px-24">
    <div className="max-w-screen-lg mx-auto">
      <h1 className="font-integral font-bold text-4xl text-center mb-8">OUR HAPPY CUSTOMERS</h1>
      <div className="relative flex items-center justify-between mb-8">
        <FaArrowLeft className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2" size={25} onClick={prevCustomer} />
        <FaArrowRight className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2" size={25} onClick={nextCustomer} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {displayedCustomers.map((customer, index) => (
          <div key={index} className="flex flex-col items-center justify-between p-4 w-full md:w-[300px] border-2">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star_icon} alt="star" />
              ))}
            </div>
            <div className="text-center">{customer.name}</div>
            <div className="text-center">{customer.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default HappyCustomers;
