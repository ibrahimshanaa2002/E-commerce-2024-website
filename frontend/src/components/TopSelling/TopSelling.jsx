import React from 'react';
import ProductCard from '../Cards/ProductCard';

const NewArrivals = () => {
  return (
    <div className="w-full lg:pl-12 md:pl-4 pl-2 py-4">
      <div className="flex flex-col items-center w-full gap-8 px-5 h-full">
        <div className="text-4xl font-bold">Top Selling</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="px-16 py-3 rounded-full hover:bg-gray-500 hover:text-white cursor-pointer duration-300 transition-all border-[0.3px] border-black">
          View All
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
