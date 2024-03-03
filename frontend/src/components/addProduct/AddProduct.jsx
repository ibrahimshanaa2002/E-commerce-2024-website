import React, { useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { IoCloudUploadOutline } from "react-icons/io5";
import { v4 } from "uuid";
import { storage } from "../../firebase";

const AddProduct = () => {
  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [newprice, setNewPrice] = useState("");
  const [oldprice, setOldPrice] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (imgFile) {
      uploadImage(imgFile);
    } else {
      console.error("Please select an image");
    }
  };

  const uploadImage = (file) => {
    const imageRef = ref(storage, `image/${v4()}_${file.name}`);
    setUploading(true);
    return uploadBytes(imageRef, file)
      .then(() => {
        console.log("Photo uploaded successfully");
        return getDownloadURL(imageRef);
      })
      .then((url) => {
        console.log("Download URL:", url);
        sendProductData(url);
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const sendProductData = (img) => {
    axios
      .post("http://localhost:4001/api/product/addproduct", {
        title,
        desc,
        newprice,
        oldprice,
        img: img,
      })
      .then((response) => {
        console.log("Product added:", response.data);
        setTitle("");
        setDesc("");
        setNewPrice("");
        setOldPrice("");
        setImgFile("");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="font-bold text-2xl text-blue-500 py-7 text-center">
          Add New Product Here
        </h1>
        <div className="mb-6">
          <div className="overflow-hidden border-dashed border-2 border-gray-400 relative">
            <input
              type="file"
              accept="images/*"
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            {imgFile && (
              <div className="relative">
                <img
                  src={URL.createObjectURL(imgFile)}
                  alt="Selected Image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {!imgFile && (
              <div className="text-white p-10 font-bold rounded cursor-pointer flex justify-center items-center flex-col">
                <IoCloudUploadOutline className="text-9xl text-gray-300" />
                <h1 className="text-xl text-gray-700 p-3">
                  Upload Up to 5 Images
                </h1>
                <h2 className="text-gray-400">
                  345x255 or larger recommended, Up to 500KB each
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="py-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            value={newprice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="New Price"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            value={oldprice}
            onChange={(e) => setOldPrice(e.target.value)}
            placeholder="Old Price"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleClick}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
