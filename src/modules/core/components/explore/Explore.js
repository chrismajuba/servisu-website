import { React, useState } from "react";
import "./explore.css";
import { OccupationsList } from "../../../../assets/assets";

const Explore = () => {
  const [occupation] = useState(-1);

  return (
    <div className="explore-contents" id="explore">
      <h2>Explore</h2>
      <div className="services-list-1">
        {OccupationsList.filter((imageData) => imageData?.image != null).map(
          (imageData, index) => {
            return (
              <div key={index} className="image-content-container">
                <img
                  key={imageData?.id}
                  src={imageData?.image}
                  alt=""
                  className={`image ${
                    occupation === imageData?.id ? "active" : ""
                  }`}
                />
                <p>{imageData?.description}</p>
              </div>
            );
          }
        )}
      </div>
      <hr></hr>
    </div>
  );
};

export default Explore;
