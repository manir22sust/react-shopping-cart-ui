import React from "react";
import "./Product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <img src={item.img} alt="" className="product-image" />
      <div className="product-info">
        <div className="product-icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="product-icon">
          <SearchOutlinedIcon />
        </div>
        <div className="product-icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
