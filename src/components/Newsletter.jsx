import React from "react";
import SendIcon from "@mui/icons-material/Send";

import "./NewsLetter.css";

const Newsletter = () => {
  return (
    <div className="newsLetter-container">
      <div className="newsLetter-title">
        <h1>Newsletter</h1>
      </div>
      <div className="newsLetter-description">
        Get timely updates from your favorite products.
      </div>
      <div className="newsLetter-input">
        <input placeholder=" Your email" className="email-input" />
        <button className="newsLetter-button">
          <SendIcon />
        </button>
      </div>
      <div className="newsLetter-"></div>
    </div>
  );
};

export default Newsletter;
