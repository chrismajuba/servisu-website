import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Providers from "./pages/providers/Providers";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/providers" element={<Providers />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
