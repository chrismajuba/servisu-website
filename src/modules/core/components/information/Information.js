import React from "react";
import "./information.css";
import { assets } from "../../../../assets/assets";

const Information = () => {
  return (
    <div className="information-content" id="quick-start">
      <h2>Quick start</h2>
      <div className="information-content-container">
        <div className="service-providers">
          <img src={assets.window_cleaner} alt="" />
          <h3>What are Service Providers?</h3>
          <p>
            Service Providers are verified and skilled professionals who specialize in
            specific occupations. These occupations can range from Car-Washing
            Services, Gardening Services, Cleaning Services etc.
          </p>
          <hr />
        </div>

        <div className="we-servce">
          <img src={assets.connection_you} alt="" />
          <h3>Our goal as Servisu!</h3>
          <p>
            We aim to provide a link between you and a service provider. Our
            systems and mobile applications aim to ensure the process of
            requesting for a service is easy and accessible.
          </p>
          <hr />
        </div>

        <div className="services-for-you">
          <img src={assets.phone_request} alt="" />
          <h3>Providing services to you</h3>
          <p>
            With a click of a button, services such as washing your car,
            cleaning your yard or cutting your grass are within your hands!
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Information;
