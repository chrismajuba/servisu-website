import React from "react";
import "./home.css";
import Header from "../../modules/core/components/header/Header";
import Explore from "../../modules/core/components/explore/Explore";
import AppDownload from "../../modules/core/components/app_download/AppDownload";
import Information from "../../modules/core/components/information/Information";

const Home = () => {
  return (
    <div>
      <Header />
      <Information />
      <Explore />
      <AppDownload />
    </div>
  );
};

export default Home;
