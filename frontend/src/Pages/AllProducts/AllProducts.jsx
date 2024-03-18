import React, { useContext } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { ProductContext } from "../../context/productContext/productContextProvider";
const AllProducts = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="w-full  py-16">
      <div className="flex flex-col items-center w-full gap-8 px-5 h-full">
        <div className="text-4xl font-bold uppercase">All Products</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {products.map((item) => (
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
  );
};

export default AllProducts;
