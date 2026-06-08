import React from "react";
import "./appDownload.css";
import { assets } from "../../../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download-contents" id="mobile-app">
      <div>
        <p className="eyebrow">Mobile first</p>
        <h2>For a smooth experience, download the Servisu app</h2>
        <p className="download-copy">Book, manage requests, update profiles and stay connected from your phone.</p>
      </div>
      <div className="app-download-images-container">
        <a href="https://play.google.com/store/search?q=Servisu&c=apps" target="_blank" rel="noreferrer" aria-label="Open Servisu on Google Play">
          <img src={assets.google_store_logo} alt="Get it on Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label="Open the Apple App Store">
          <img src={assets.istore_logo} alt="Download on the App Store" />
        </a>
      </div>
    </section>
  );
};

export default AppDownload;
