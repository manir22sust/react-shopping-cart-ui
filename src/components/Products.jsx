import React from "react";
import { popularProducts } from "../data/data";
import Product from "./Product";

import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
