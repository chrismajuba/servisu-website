import React from "react";
import "./Home.css";
import Header from "../../modules/core/components/header/Header";
import Explore from "../../modules/core/components/explore/Explore";
import { useState } from "react";
import AppDownload from "../../modules/core/components/app_download/AppDownload";
import Information from "../../modules/core/components/information/Information";

const Home = () => {
  const [occupation, setOccupation] = useState(-1);

  return (
    <div>
      <Header />
      <Information />
      <Explore category={occupation} setCategory={setOccupation} />
      <AppDownload />
    </div>
  );
};

export default Home;
