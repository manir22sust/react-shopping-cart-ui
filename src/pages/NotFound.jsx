import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          backgroundColor: "greenyellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Not Found !!!
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NotFound;
