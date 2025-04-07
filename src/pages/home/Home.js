import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Explore from "../../components/explore/Explore";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
