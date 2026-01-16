import React from "react";
import "./loadingScreenPopup.css";
import { assets } from "../../../../../assets/assets";

const LoadingScreenPopup = () => {
  return (
    <div className="loading-screen">
      <div className="contents">
        <img src={assets.loading_screen} alt="" />
      </div>
    </div>
  );
};

export default LoadingScreenPopup;
