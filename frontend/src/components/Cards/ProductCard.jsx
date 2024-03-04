import React, { useState } from "react";
import star1 from "../../assets/star_icon.png";
import star2 from "../../assets/star_dull_icon.png";
import { MdModeEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
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

  const handleSave = () => {
    // update database
    setIsSaving(true);
    // Simulate API
    setTimeout(() => {
      // After saving is done, set isSaving back to false
      setIsSaving(false);
      // You can perform any additional actions here, e.g., show a success message
      console.log("Changes saved successfully.");
    }, 2000); // Simulating 2 seconds delay, replace with actual saving logic
  };

  const location = useLocation();

  const isAdminRoute = location.pathname === "/admin";
  if (isAdminRoute) {
    return (
      <div className="admin-product-card">
        <div className="w-full sm:w-auto h-full">
          <div className="flex flex-col items-start justify-between w-full h-full border border-gray-200 rounded-lg overflow-hidden">
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full sm:w-auto  h-full">
      <Link
        to={`/product/${props._id}`}
        className=" flex flex-col items-start justify-between w-full h-full border border-gray-200 rounded-lg overflow-hidden "
      >
        <div className="w-full flex img-hover-zoom h-full">
          <img
            src={props.img}
            className="w-full h-full object-cover "
            alt="Product"
          />
        </div>

        <div className="p-4 flex flex-col items-start justify-between h-full">
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
    </div>
  );
};

export default ProductCard;
