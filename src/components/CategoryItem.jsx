import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem-container">
      <img src={item.img} alt="" className="categoryItem-image" />
      <div className="categoryItem-info-container">
        <h1 className="categoryItem-title">{item.title}</h1>
        <button className="categoryItem-button"> SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
