import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginSignup from "./Pages/Hero/loginSignup/LoginSignup";
import Layout from "./Layout/Layout";
import LayoutArrivals from "./Layout/LayoutArrivals";
import LayoutAdmin from "./Layout/LayoutAdmin";
import LayoutAllProducts from "./Layout/LayoutAllProducts";
import LayoutProduct from './Layout/LayoutProduct';
import { useEffect } from "react";
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
        <Route path="/authentication" element={<LoginSignup />} />
        
        <Route path="/newArrivals" element={<LayoutArrivals />} />
        <Route path="/product/:productId" element={<LayoutProduct />} />
        <Route path="/allProducts" element={<LayoutAllProducts />} />
        <Route path="/admin" element={<LayoutAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
