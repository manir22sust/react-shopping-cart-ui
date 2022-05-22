import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { sliderItems } from "../data/data";

import "./Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="container-slider">
      <ArrowLeftOutlinedIcon className="left-arrow" onClick={prevSlide} />

      <div className="slider-wrapper">
        {sliderItems.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <div className="slide">
                  <img src={slide.img} alt="" />
                  <div className="info-container">
                    <h1 className="title">{slide.title}</h1>
                    <p className="description">{slide.desc}</p>
                    <button> SHOW NOW</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <ArrowRightOutlinedIcon className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default Slider;
