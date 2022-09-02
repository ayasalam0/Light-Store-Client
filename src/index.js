import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Products from "./pages/Products";
import NavBar from "./components/Layout/NavBar";
import Favourites from "./pages/Favourites";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./Redux/Products";
import CartReducer from "./Redux/Cart";
import SingleProduct from "./pages/SingleProduct";
import { Toaster } from "react-hot-toast";

const store = configureStore({
  reducer: {
    productsData: productsReducer,
    ProductData: productsReducer,
    ProductsCartData: productsReducer,
    FavouriteArray: productsReducer,
    DisplyProductsData: productsReducer,
    Cart: CartReducer,
    categories: productsReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Toaster />
    <Provider store={store}>
      <NavBar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="categories" element={<App />} />
          <Route path="products" element={<Products />} />
          <Route path="favourates" element={<Favourites />} />
          <Route path="products/:id" element={<SingleProduct />} />
        </Routes>
      </NavBar>
    </Provider>
  </BrowserRouter>
);
