import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./modules/core/components/footer/Footer";
import NavBar from "./modules/core/components/navbar/NavBar";
import Home from "./pages/home/Home";
import ProvidersPage from "./pages/providers/ProvidersPage";
import UserPage from "./pages/user/UserPage";
import ViewProviderPage from "./pages/providers/ViewProviderPage";
import RequestProviderPage from "./pages/providers/RequestProviderPage";
import "react-datepicker/dist/react-datepicker.css";
import VerificationPage from "./pages/verification/VerificationPage";
import MyRequestsPage from "./pages/user/MyRequestPage";
import UserVerificationPage from "./pages/verification/UserVerificationPage";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/providers" element={<ProvidersPage />}></Route>
          <Route path="/account" element={<UserPage />}></Route>
          <Route
            path="/view-provider/:id"
            element={<ViewProviderPage />}></Route>
          <Route
            path="/request-provider"
            element={<RequestProviderPage />}></Route>
          <Route path="/account/verify" element={<VerificationPage />}></Route>
          <Route
            path="/account/my-requests"
            element={<MyRequestsPage />}></Route>
          <Route
            path="/account/update/verification"
            element={<UserVerificationPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
