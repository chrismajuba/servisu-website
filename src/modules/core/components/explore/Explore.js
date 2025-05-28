import { React, useState } from "react";
import "./explore.css";
import { OccupationsList } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [occupation] = useState(-1);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/providers", { state: id });
  };

  return (
    <div className="explore-contents" id="explore">
      <h2>Explore</h2>
      <div className="services-list-1">
        {OccupationsList.filter((imageData) => imageData?.image != null).map(
          (imageData, index) => {
            return (
              <div key={index} className="image-content-container">
                <img
                  onClick={() => handleClick(imageData?.id)}
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
