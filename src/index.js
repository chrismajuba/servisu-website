import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./modules/context/ContextProvider";

// Extract basename from homepage for GitHub Pages deployment
// In development, process.env.PUBLIC_URL is empty, so basename will be empty
// In production on GitHub Pages, it will be '/servisu-website'
const getBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || '';
  if (publicUrl) {
    try {
      const url = new URL(publicUrl);
      return url.pathname;
    } catch (e) {
      // If PUBLIC_URL is just a path like '/servisu-website'
      return publicUrl;
    }
  }
  return '';
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
