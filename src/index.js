import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./modules/context/ContextProvider";

// Basename from homepage for production deploys.
// Custom domain (servisu.co.za): PUBLIC_URL pathname is "/" → treat as no basename.
// Project Pages path (/repo-name): pathname becomes the basename.
const getBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || "";
  if (!publicUrl) {
    return "";
  }
  try {
    const pathname = new URL(publicUrl, window.location.origin).pathname;
    if (!pathname || pathname === "/") {
      return "";
    }
    return pathname.replace(/\/$/, "") || "";
  } catch (e) {
    if (publicUrl === "/") {
      return "";
    }
    return publicUrl.replace(/\/$/, "");
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={getBasename()}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
