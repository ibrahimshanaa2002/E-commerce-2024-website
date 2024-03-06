import React, { useState } from "react";
import star1 from "../../assets/star_icon.png";
import star2 from "../../assets/star_dull_icon.png";
import { MdModeEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProductCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDesc, setEditedDesc] = useState(props.desc);
  const [editedNewPrice, setEditedNewPrice] = useState(props.newprice);
  const [editedOldPrice, setEditedOldPrice] = useState(props.oldprice);
  const [isSaving, setIsSaving] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await axios.put(`http://localhost:4001/api/product/product/${props._id}`, {
        title: editedTitle,
        desc: editedDesc,
        newprice: editedNewPrice,
        oldprice: editedOldPrice,
      });

      if (response.status !== 200) {
        throw new Error('Failed to update product.');
      }

      // Update component state with the updated product data
      const updatedProductData = response.data; // Assuming the response contains the updated product data
      setEditedTitle(updatedProductData.title);
      setEditedDesc(updatedProductData.desc);
      setEditedNewPrice(updatedProductData.newprice);
      setEditedOldPrice(updatedProductData.oldprice);

      setIsEditing(false);
      setIsSaving(false);
      console.log('Changes saved successfully.');
    } catch (error) {
      console.error('Error updating product:', error);
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
  
    // If the user confirms deletion
    if (confirmDelete) {
      try {
        // Send a DELETE request to delete the product
        await axios.delete(`http://localhost:4001/api/product/product/${props._id}`);
        console.log('Product deleted successfully.');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin";

  return (
    <div className={`w-full sm:w-auto ${isAdminRoute ? "admin-product-card" : ""}`}>
      {isAdminRoute ? (
        <div className="w-full h-full border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex flex-col items-start justify-between w-full h-full">
            <div className="w-full h-1/3 img-hover-zoom">
              <img
                src={props.img}
                className="w-full h-full object-cover"
                alt="Product"
              />
            </div>
            <div className="p-4 flex flex-col items-start justify-between h-1/3 w-full">
              <div className="text-sm sm:text-base md:text-lg flex w-full justify-between items-center gap-4">
                {isEditing ? (
                  <input
                    className="w-full border-2 border-gray-200"
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                ) : (
                  <span>{props.title}</span>
                )}
                <span className="cursor-pointer" onClick={handleEdit}>
                  <MdModeEdit />
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg flex gap-5 w-full items-center">
                {isEditing ? (
                  <input
                    className="w-full border-2 border-gray-200"
                    type="text"
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                  />
                ) : (
                  <span>{props.desc}</span>
                )}
              </div>
              <div className="flex items-center mb-2">{/* Star ratings */}</div>
              <div className="flex items-center text-gray-400 gap-6">
                {isEditing ? (
                  <>
                    <input
                      className="w-full border-2 border-gray-200"
                      type="number"
                      value={editedNewPrice}
                      onChange={(e) => setEditedNewPrice(e.target.value)}
                    />
                    <input
                      className="w-full border-2 border-gray-200"
                      type="number"
                      value={editedOldPrice}
                      onChange={(e) => setEditedOldPrice(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-bold text-xs sm:text-base md:text-lg">
                      ${props.newprice}
                    </div>
                    <div className="font-bold text-xs sm:text-base md:text-lg line-through">
                      ${props.oldprice}
                    </div>
                  </>
                )}
              </div>
              {/* Save button */}
              {isEditing && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
              {/* Delete button */}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Link
          to={`/product/${props._id}`}
          className="flex flex-col items-start justify-between w-full h-full border border-gray-200 rounded-lg overflow-hidden"
        >
          <div className="w-full flex img-hover-zoom h-full">
            <img
              src={props.img}
              className="w-full h-full object-cover"
              alt="Product"
            />
          </div>
          <div className="p-4 flex flex-col items-start justify-between h-[40%]">
            <div className="text-sm sm:text-base md:text-lg font-bold ">
              {props.title}
            </div>
            <div className="text-sm sm:text-base md:text-lg ">{props.desc}</div>
            <div className="flex items-center mb-2">
              <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
              <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
              <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
              <img src={star1} className="w-4 h-4 mr-1" alt="Star" />
              <img src={star2} className="w-4 h-4 mr-1" alt="Star" />
              <span className="text-xs ml-1">4/5</span>
            </div>
            <div className="flex items-center text-gray-400 gap-6">
              <div className="font-bold text-xs sm:text-base md:text-lg">
                ${props.newprice}
              </div>
              <div className="font-bold text-xs sm:text-base md:text-lg line-through ">
                ${props.oldprice}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
