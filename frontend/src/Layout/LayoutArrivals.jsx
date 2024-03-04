import React from "react";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navBar/Navbar";
import Footer from "../components/Footer/Footer";
import NewArrivalsPage from "../Pages/newArrivals/NewArrivalsPage";

const LayoutArriivals = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <NewArrivalsPage />
      <Footer />
    </div>
  );
};

export default LayoutArriivals;
