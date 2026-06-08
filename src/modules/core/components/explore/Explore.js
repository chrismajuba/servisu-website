import React from "react";
import "./explore.css";
import { OccupationsList } from "../../../../assets/assets";

const Explore = () => {
  const services = OccupationsList.filter((imageData) => imageData?.image != null);

  return (
    <section className="explore-contents" id="explore">
      <p className="eyebrow">Explore</p>
      <h2>Popular services on Servisu</h2>
      <div className="services-list-1">
        {services.map((imageData, index) => (
          <article key={imageData?.id || index} className="service-card reveal-up" style={{ animationDelay: `${index * 90}ms` }}>
            <img src={imageData?.image} alt={imageData?.name || "Servisu service"} />
            <div className="service-card-body">
              <h3>{imageData?.name}</h3>
              <p>{imageData?.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
