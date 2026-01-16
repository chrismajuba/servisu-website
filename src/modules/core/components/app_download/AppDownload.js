import React from "react";
import "./appDownload.css";
import { assets } from "../../../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download-contents" id="mobile-app">
      <h2>For a smooth experience, download the Servisu app</h2>
      <div className="app-download-images-container">
        <img src={assets.google_store_logo} alt="" />
        <img src={assets.istore_logo} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
