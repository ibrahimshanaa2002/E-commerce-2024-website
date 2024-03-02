import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { IoCloudUploadOutline } from "react-icons/io5";

import { v4 } from "uuid";
import { storage } from '../../firebase'; // Import the storage object from Firebase

const AddProduct = () => {
  const [imgFile, setImgFile] = useState(''); // Track the selected image file separately
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [newprice, setNewPrice] = useState('');
  const [oldprice, setOldPrice] = useState('');

  const [uploading, setUploading] = useState(false); // Track if upload is in progress

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (imgFile) {
      uploadImage(imgFile);
    } else {
      console.error("Please select an image");
    }
  };

  const uploadImage = (file) => {
    const imageRef = ref(storage, `image/${v4()}_${file.name}`);
    setUploading(true); // Set uploading to true when starting upload
    return uploadBytes(imageRef, file)
      .then(() => {
        console.log("Photo uploaded successfully");
        return getDownloadURL(imageRef); // Return the download URL
      })
      .then((url) => {
        console.log("Download URL:", url);
        // After image upload is complete, send product data to backend
        sendProductData(url);
      })
      .catch(error => {
        console.error("Error uploading photo:", error);
      })
      .finally(() => {
        setUploading(false); 
      });
  };

  const sendProductData = (img) => {
    axios.post('http://localhost:4001/api/product/addproduct', {
      title,
      desc,
      newprice,
      oldprice,
      img: img // Use the downloaded image URL
    })
    .then(response => {
      console.log("Product added:", response.data);
      // Clear form fields after successful upload
      setTitle('');
      setDesc('');
      setNewPrice('');
      setOldPrice('');
      setImgFile('');
    })
    .catch(error => {
      console.error("Error adding product:", error);
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  return (
    <div className="">
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full">
        <form className="flex flex-col items-center justify-center h-screen w-full">
          <div className="title">
            <h1 className="font-bold text-2xl text-blue-500 py-7">
              Add New Product Here
            </h1>
          </div>
          <div className="mb-6 w-[40%] relative h-1/2">
            <div className="overflow-hidden flex justify-center border-dashed border-2 border-gray-400 items-center w-full p-14 px-3 h-full">
              <input
                type="file"
                accept="images/*"
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />

              {imgFile && (
                <img
                  src={URL.createObjectURL(imgFile)}
                  alt="Selected Image"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
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

          <div className=" p-6 w-1/2">
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-2">Title</h1>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-2">Description</h1>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-2">New Price</h1>
              <input
                type="number"
                value={newprice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-2">Old Price</h1>
              <input
                type="number"
                value={oldprice}
                onChange={(e) => setOldPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleClick}
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
</div>
  );
};

export default AddProduct;
