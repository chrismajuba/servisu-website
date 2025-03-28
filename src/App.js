import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/**Header component */}
        <Header />

        {/**Routing component */}
        <Router>
          {/**NavBar component */}
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>

      {/**Footer component */}
      <Footer />
    </div>
  );
}

export default App;
