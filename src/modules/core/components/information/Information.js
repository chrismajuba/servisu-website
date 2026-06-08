import React from "react";
import "./information.css";
import { assets } from "../../../../assets/assets";

const Information = () => {
  const cards = [
    {
      image: assets.window_cleaner,
      title: "What are Service Providers?",
      text: "Service Providers are verified and skilled professionals who specialize in specific occupations. These occupations can range from Car-Washing Services, Gardening Services, Cleaning Services etc.",
    },
    {
      image: assets.connection_you,
      title: "Our goal as Servisu!",
      text: "We aim to provide a link between you and a service provider. Our systems and mobile applications aim to ensure the process of requesting for a service is easy and accessible.",
    },
    {
      image: assets.phone_request,
      title: "Providing services to you",
      text: "With a click of a button, services such as washing your car, cleaning your yard or cutting your grass are within your hands!",
    },
  ];

  return (
    <section className="information-content" id="quick-start">
      <p className="eyebrow">Quick start</p>
      <h2>Everything you need to request reliable help</h2>
      <div className="information-content-container">
        {cards.map((card) => (
          <article className="info-card reveal-up" key={card.title}>
            <img src={card.image} alt="" />
            <div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Information;
