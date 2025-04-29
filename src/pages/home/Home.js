import React from "react";
import "./Home.css";
import Header from "../../modules/core/components/header/Header";
import Explore from "../../modules/core/components/explore/Explore";
import { useState } from "react";
import AppDownload from "../../modules/core/components/app_download/AppDownload";
import Information from "../../modules/core/components/information/Information";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <Information />
      <Explore category={category} setCategory={setCategory} />
      <AppDownload />
    </div>
  );
};

export default Home;
