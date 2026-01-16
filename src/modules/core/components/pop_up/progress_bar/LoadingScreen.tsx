import React from "react";
import "./loadingScreen.css";
import { assets } from "../../../../../assets/assets";

const LoadingScreen : React.FC<{}> = () => {
  return (
    <div className="loading-screen-com">
      <div className="contents">
        <img src={assets.loading_screen} alt="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
