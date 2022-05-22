import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="productList-container">
      <Navbar />
      <Announcement />
      <div className="productlist-title">
        <h1>Dresses</h1>
      </div>
      <div className="filter-Container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>

          <select className="select-color">
            <option defaultValue>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="select-size">
            <option defaultValue>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products:</span>
          <select className="select-price">
            <option defaultValue>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
