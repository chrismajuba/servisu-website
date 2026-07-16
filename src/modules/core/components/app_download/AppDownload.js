import React from "react";
import { motion } from "../../../../lib/motionStub";
import "./appDownload.css";
import { assets } from "../../../../assets/assets";

const AppDownload = () => {
  return (
    <motion.section className="app-download-contents" id="mobile-app" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, ease: "easeOut" }}>
      <div>
        <p className="eyebrow">Mobile first</p>
        <h2>For a smooth experience, download the Servisu app</h2>
        <p className="download-copy">Book, manage requests, update profiles and stay connected from your phone.</p>
      </div>
      <div className="app-download-images-container">
        <motion.a href="https://play.google.com/store/search?q=Servisu&c=apps" target="_blank" rel="noreferrer" aria-label="Open Servisu on Google Play" whileHover={{ y: -6, scale: 1.06 }} whileTap={{ scale: 0.98 }}>
          <img src={assets.google_store_logo} alt="Get it on Google Play" />
        </motion.a>
        <motion.a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label="Open the Apple App Store" whileHover={{ y: -6, scale: 1.06 }} whileTap={{ scale: 0.98 }}>
          <img src={assets.istore_logo} alt="Download on the App Store" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default AppDownload;
