import { StrictMode } from "react";
import "./index.scss";
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routes";
import routes from "./routes";

const GA_MEASUREMENT_ID = "G-EEYBFX4JHZ";

// Load and initialize gtag.js
const initializeGtag = () => {
  // Load gtag.js
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  };
};

// Initialize Google Analytics
initializeGtag();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    <Analytics />
  </StrictMode>
);
