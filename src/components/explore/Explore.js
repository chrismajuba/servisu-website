import React from "react";
import "./explore.css";
import { explore_page_images } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore-contents" id="explore">
      <h2>Explore</h2>
      <div className="services-list-1">
        {explore_page_images.map((imageData, index) => {
          return (
            <div className="image-content-container">
              <img
                onClick={() =>
                  category === imageData.category
                    ? setCategory("all")
                    : setCategory(imageData.category)
                }
                key={imageData.id}
                src={imageData.image}
                alt=""
                className={`image ${
                  category === imageData.category ? "active" : ""
                }`}
              />
              <p>{imageData.description}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default Explore;
