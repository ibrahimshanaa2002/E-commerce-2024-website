import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

import LoginSignup from "./Pages/Hero/loginSignup/LoginSignup";
import Layout from "./Layout/Layout";
import LayoutArrivals from "./Layout/LayoutArrivals";
import LayoutAdmin from "./Layout/LayoutAdmin";
import LayoutAllProducts from "./Layout/LayoutAllProducts";
import LayoutProduct from "./Layout/LayoutProduct";
import LayoutCart from "./Layout/LayoutCart";

import Women from "./Pages/Categories/Women";
import Man from "./Pages/Categories/Man";
import Kids from "./Pages/Categories/Kids";

import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/forgetPassword/ResetPassword";

import AboutUs from "./Pages/FooterLists/AboutUs/AboutUs";
import Feature from "./Pages/FooterLists/Feature/Feature";
import ContactUs from "./Pages/FooterLists/ContactUs/ContactUs";
import Delivery from "./Pages/FooterLists/Delivery/Delivery";
import CheckOut from "./Pages/CheckOut/CheckOut";

library.add(fas);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* Authentication */}
        <Route path="/authentication" element={<LoginSignup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Products pages */}
        <Route path="/product/:productId" element={<LayoutProduct />} />
        <Route path="/allProducts" element={<LayoutAllProducts />} />
        <Route path="/newArrivals" element={<LayoutArrivals />} />
        {/* Products Categories */}
        <Route path="/Women-Products" element={<Women />} />
        <Route path="/Men-Products" element={<Man />} />
        <Route path="/Kids-Product" element={<Kids />} />
        {/* Admin And Users Routes */}
        <Route path="/admin" element={<LayoutAdmin />} />
        <Route path="/Cart" element={<LayoutCart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        {/* Footers Lists */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Features" element={<Feature />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Delivery-Details" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
