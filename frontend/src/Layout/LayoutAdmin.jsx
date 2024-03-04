import React from "react";
import AddProduct from "../components/addProduct/AddProduct";
import Navbar from "../components/navBar/Navbar";
import Footer from "../components/Footer/Footer";
import EditDeleteProduct from "../components/addProduct/EditDeleteProduct";

const LayoutAdmin = () => {
  return (
    <div>
      <Navbar />
      <AddProduct />
      <EditDeleteProduct />
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
