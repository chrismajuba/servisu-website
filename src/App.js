import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./modules/core/components/footer/Footer";
import NavBar from "./modules/core/components/navbar/NavBar";
import Home from "./pages/home/Home";
import ProvidersPage from "./pages/providers/ProvidersPage";
import UserPage from "./pages/user/UserPage";
import RequestService from "./pages/request_service/RequestService";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/providers" element={<ProvidersPage />}></Route>
          <Route path="/user-account" element={<UserPage />}></Route>
          <Route
            path="/request-service/:id"
            element={<RequestService />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
