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
import TermsConditions from "./Pages/FooterLists/Terms & Conditions/TermsConditions";
import PrivacyPolicy from "./Pages/FooterLists/PrivacyPolicy/PrivacyPolicy";
import Orders from "./components/Orders/Orders";
import Gym from "./Pages/Browse/Gym";
import Formal from "./Pages/Browse/Formal";
import Party from "./Pages/Browse/Party";
import Casual from "./Pages/Browse/Casual";

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
        {/* Browse pages */}
        <Route path="/gym-collection" element={<Gym />} />
        <Route path="/formal-collection" element={<Formal />} />
        <Route path="/party-collection" element={<Party />} />
        <Route path="/casual-collection" element={<Casual />} />
        {/* Products Categories */}
        <Route path="/women-products" element={<Women />} />
        <Route path="/men-products" element={<Man />} />
        <Route path="/kids-product" element={<Kids />} />
        {/* Admin And Users Routes */}
        <Route path="/admin" element={<LayoutAdmin />} />
        <Route path="/cart" element={<LayoutCart />} />
        <Route path="/checkOut" element={<CheckOut />} />
        {/* Footers Lists */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/delivery-details" element={<Delivery />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
