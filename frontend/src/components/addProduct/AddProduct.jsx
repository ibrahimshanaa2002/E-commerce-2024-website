import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
    <div className=''>
      <div className='flex h-screen items-center justify-center bg-slate-300'>
        <div className='flex items-center justify-center bg-white'>
          <form className='flex flex-col items-center justify-center h-full w-full'>
            <h1 className='font-bold text-2xl text-orange-400'>Add New Product Here</h1>

            <div>
              <h1>Image of product</h1>
              <input type='file' accept='images/*' onChange={handleFileChange} />
            </div>
            <div>
              <h1>Title</h1>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <h1>Description</h1>
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
              <h1>New Price</h1>
              <input type='number' value={newprice} onChange={(e) => setNewPrice(e.target.value)} />
            </div>
            <div>
              <h1>Old Price</h1>
              <input type='number' value={oldprice} onChange={(e) => setOldPrice(e.target.value)} />
            </div>
            <button onClick={handleClick}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
