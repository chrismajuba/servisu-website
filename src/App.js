import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Providers from "./pages/providers/Providers";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/providers" element={<Providers />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
