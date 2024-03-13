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
import LayoutCart from "./Layout/LayoutCart";
import Women from "./Pages/Categories/Women";
import Man from "./Pages/Categories/Man";
import Kids from "./Pages/Categories/Kids";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/forgetPassword/ResetPassword";

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
        <Route path="/Cart" element={<LayoutCart />} />
        <Route path="/Women-Products" element={<Women/>}/>
        <Route path="/Men-Products" element={<Man/>}/>
        <Route path="/Kids-Product" element={<Kids/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
