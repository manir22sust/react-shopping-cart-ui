import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <SearchIcon />
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              Manir
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="register">
            <Link to="/register" style={{ textDecoration: "none" }}>
              REGISTER
            </Link>
          </div>
          <div className="sign-in">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </div>
          <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Badge className="cart" badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
