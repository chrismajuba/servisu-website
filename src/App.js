import React from "react";
import Footer from "./modules/core/components/footer/Footer";
import NavBar from "./modules/core/components/navbar/NavBar";
import AppRoutes from "./components/routing/AppRoutes";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Main App Component
 * Clean and maintainable with centralized routing
 */
function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
