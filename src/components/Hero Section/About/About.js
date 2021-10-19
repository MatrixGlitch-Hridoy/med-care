import React from "react";
import { FaAmbulance, FaProcedures, FaStethoscope } from 'react-icons/fa';
import image from "../../assets/clipart-doctor-lady-doctor-11.png";
import './about.css';
const About = () => {
  return (
    <div class="about">
      <div class="container">
        <div class="row min-vh-100 align-items-center">
          <div class="col-md-6 content">
            <div class="box">
              <h3>
                {" "}
                <FaAmbulance color='#0188df'/> ambulance services{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>

            <div class="box">
              <h3>
                {" "}
                <FaProcedures color='#0188df'/> emergency rooms{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>

            <div class="box">
              <h3>
                {" "}
                <FaStethoscope color='#0188df'/> free check-ups{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-none d-md-block">
            <img src={image} class="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
