import React from "react";
import ProductCard from "../../components/Cards/ProductCard";

const NewArrivalsPage = () => {
  return (
    // dynamic 14 database
    <div>
      <div className="w-full lg:pl-12 md:pl-4 pl-2 py-16">
        <div className="flex flex-col items-center w-full gap-8 px-5 h-full">
          <div className="text-4xl font-bold">NEW ARRIVALS</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;
