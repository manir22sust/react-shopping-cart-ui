import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <h1>Manir</h1>
        </div>
        <div className="footer-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            possimus pariatur nesciunt itaque impedit nulla animi blanditiis eum
            ut laudantium, hic ducimus explicabo. Dolorem, a! Placeat culpa at
            natus in.
          </p>
        </div>
        <div className="social-container">
          <div className="social-icon">
            <FacebookIcon style={{ color: "3B5999" }} />
          </div>
          <div className="social-icon">
            <InstagramIcon style={{ color: "E4405F" }} />
          </div>
          <div className="social-icon">
            <TwitterIcon style={{ color: "55ACEE" }} />
          </div>
          <div className="social-icon">
            <PinterestIcon style={{ color: "E60023" }} />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-title">
          <h4>Useful links</h4>
        </div>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-title">
          <h4>Contact</h4>
        </div>
        <div className="footer-contactItem">
          <RoomIcon style={{ marginRight: "10px" }} />
          Bahnstr.94, 42327 Wuppertal, Germany
        </div>
        <div className="footer-contactItem">
          <PhoneIcon style={{ marginRight: "10px" }} />
          +49123456789
        </div>
        <div className="footer-contactItem">
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          contact@gmail.com
        </div>
        <img src="/assets/payment.png" alt="" className="footer-image" />
      </div>
    </div>
  );
};

export default Footer;
