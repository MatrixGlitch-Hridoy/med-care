import React from "react";
import image1 from "../../assets/Doctors-bro.png";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div class="container">
          <div class="row min-vh-100 align-items-center text-md-left">
            <div class="col-md-6 col-sm-12">
                <div className="w-75">
                    <img src={image1} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 content">
            <h1><span>Stay</span> Safe, <span>Stay</span> Healthy.</h1>
            <h3>Caring for you.</h3>
            <button class="button px-3 py-2">learn more</button>
            </div>
          </div>

      </div>
    </>
  );
};

export default Banner;
