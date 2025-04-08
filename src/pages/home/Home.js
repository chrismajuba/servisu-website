import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Explore from "../../components/explore/Explore";
import { useState } from "react";
import AppDownload from "../../components/app_download/AppDownload";
import Information from "../../components/information/Information";

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
