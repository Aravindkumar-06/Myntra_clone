import React from "react";
import "./Banner.css";
import ImageSlider from './ImageSlider.jsx';
import img1 from "../Assets/Assets05.jpg";
import img2 from "../Assets/Assets06.jpg";
import img3 from "../Assets/Assets07.jpg";
import img4 from "../Assets/Assets08.jpg";
import img5 from "../Assets/Assets09.jpg";
import img6 from "../Assets/Assets10.jpg";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="b1">
        <img src={img1} alt="img" />
      </div>
      <div className="b2">
        <img src={img2} alt="img" />
      </div>
      <div className="b3">
        <img src={img3} alt="img" />
      </div>
      <div className="b4">
        <div className="b4-1">
          <img src={img4} alt="img" />
        </div>
        <div className="b4-2">
          <img src={img5} alt="img" />
        </div>
      </div>
      <div className="b5">
        <img src={img6} alt="img" />
      </div>
      <ImageSlider />
    </div>
  );
};

export default Banner;
