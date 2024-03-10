import React, { useState, useContext } from 'react';
import ProductCard from '../Cards/ProductCard';
import { ProductContext } from "../../context/productContext/productContextProvider"; // Adjust the path to your context file

const SearchPopup = () => {
  const { products } = useContext(ProductContext); // Accessing products from context
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filtering logic based on search query
  const filteredProducts = products.filter((product) => {
    return Object.values(product).some(value => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchQuery);
      } else if (Array.isArray(value)) {
        return value.some(item => item.toLowerCase().includes(searchQuery));
      } else if (typeof value === 'number') {
        return value.toString().includes(searchQuery);
      }
      return false;
    });
  });

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* Display filtered products */}
      <div>
        {filteredProducts.map((item) => (
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
  );
};

export default SearchPopup;
