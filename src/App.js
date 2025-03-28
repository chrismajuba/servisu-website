import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element=""></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
