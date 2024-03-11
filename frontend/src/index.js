import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductContextProvider from "./context/productContext/productContextProvider";
import RatingContextProvider from "./context/ratingContext/ratingContextProvider";
import { UserProvider } from "./context/userContext/userContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <RatingContextProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </RatingContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
