import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="cart-title"> YOUR BAG</h1>
        <div className="cart-top">
          <button className="cart-continueButton">CONTINUE SHOPPING</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag (2)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div>
          <button className="cart-checkoutButton">CHECKOUT NOW</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            <div className="cart-product">
              <div className="cart-productDetail">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="cart-image"
                />
                <div className="cart-details">
                  <span className="cart-productName">
                    <b> Product : </b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart-productId">
                    <b> ID : </b> 987456123
                  </span>
                  <div className="cart-productColor"></div>
                  <span className="cart-productSize">
                    <b> Size : </b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart-priceDetail">
                <div className="cart-amountContainer">
                  <Add />
                  <div className="cart-productAmount">2</div>
                  <Remove />
                </div>
                <div className="cart-productPrice"> € 40</div>
              </div>
            </div>
            <hr style={{ color: "gray" }} />
            <div className="cart-product">
              <div className="cart-productDetail">
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=""
                  className="cart-image"
                />
                <div className="cart-details">
                  <span className="cart-productName">
                    <b> Product : </b> HAKURA T-SHIRT
                  </span>
                  <span className="cart-productId">
                    <b> ID : </b> 98745566
                  </span>
                  <div className="cart-productColor"></div>
                  <span className="cart-productSize">
                    <b> Size : </b> M
                  </span>
                </div>
              </div>
              <div className="cart-priceDetail">
                <div className="cart-amountContainer">
                  <Add />
                  <div className="cart-productAmount">2</div>
                  <Remove />
                </div>
                <div className="cart-productPrice"> € 20</div>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
            <div className="cart-summaryItem">
              <div className="cart-summaryItemText">Subtotal</div>
              <div className="cart-summaryItemPrice">€80 </div>
            </div>

            <div className="cart-summaryItem">
              <div className="cart-summaryItemText">Estimated Shipping</div>
              <div className="cart-summaryItemPrice">€5.90 </div>
            </div>

            <div className="cart-summaryItem">
              <div className="cart-summaryItemText">Shipping Discount</div>
              <div className="cart-summaryItemPrice">€-5.90 </div>
            </div>
            <div className="cart-summaryItem">
              <div className="cart-totalItemText">Total</div>
              <div className="cart-totalItemPrice">€80 </div>
            </div>
            <button className="cart-totalButton">CHECKOUT NOW</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
