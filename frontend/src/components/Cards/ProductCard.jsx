import React from "react";
import star1 from "../../assets/star_icon.png";
import star2 from "../../assets/star_dull_icon.png";
import { Link} from "react-router-dom"
const ProductCard = (props) => {
  return (
    <div className="w-full sm:w-auto">
      <Link to={`/product/${props._id}`} className="flex flex-col items-start w-full h-full border border-gray-200 rounded-lg overflow-hidden">
        <div className="w-full h-48">
          <img src={props.img} className="w-full h-full object-cover bg-cover" alt="Product" />
        </div>
        <div className="p-4 flex flex-col items-start justify-between flex-1">
        <div className="text-sm sm:text-base md:text-lg mb-2">{props.desc}</div>
          <div className="text-sm sm:text-base md:text-lg mb-2">{props.title}</div>
          <div className="flex items-center mb-2">
            <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
            <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
            <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
            <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
            <img src={star2} className="w-4 h-4 mr-1" alt="Star" />
            <span className="text-xs ml-1">4/5</span>
          </div>
          <div className="flex items-center text-gray-400 gap-6">
          <div className="font-bold text-xs sm:text-base md:text-lg">${props.newprice}</div>
          <div className="font-bold text-xs sm:text-base md:text-lg line-through ">${props.oldprice}</div>

          </div>
          

        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
