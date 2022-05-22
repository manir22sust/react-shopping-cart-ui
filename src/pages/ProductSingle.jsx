import { Add, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./ProductSingle.css";

const ProductSingle = () => {
  return (
    <div className="productSingle-container">
      <Navbar />
      <Announcement />
      <div className="productSingle-wrapper">
        <img
          src="/assets/ProductSingle/jumpsuit.jpg"
          alt=""
          className="productSingle-image"
        />

        <div className="productSingle-info">
          <h1 className="productSingle-title"> Jumpsuit</h1>
          <p className="productSingle-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            cupiditate sunt perspiciatis blanditiis quis. Expedita magni fugiat
            sint tempore atque, voluptate eius iure nulla dolorum mollitia quia
            vel dolorem quae.
          </p>
          <span className="productSingle-price"> € 20</span>
          <div className="productSingle-filterContainer">
            <div className="productSingle-filter">
              <span className="productSingle-filterTitle"> Color</span>
              <div className="filterColor-black"></div>
              <div className="filterColor-darkblue"></div>
              <div className="filterColor-gray"></div>
            </div>
            <div className="productSingle-filter">
              <span className="productSingle-filterTitle"> Size</span>
              <select className="select-size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <div className="addContainer">
            <div className="amountContainer">
              <Remove />
              <span className="amount">1</span>
              <Add />
            </div>
            <button className="addCart-button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductSingle;
