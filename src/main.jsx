import { StrictMode } from "react";
import "./index.scss";

import { Analytics } from "@vercel/analytics/react";

import { createRoot } from "react-dom/client";
import { renderRoutes } from "./routes";

import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

import ReactGA from 'react-ga'

import usePageViews from "./hooks/usePageViews";


const GA_MEASUREMENT_ID = 'G-EEYBFX4JHZ';

ReactGA.initialize(GA_MEASUREMENT_ID);

ReactGA.pageview(window.location.pathname + window.location.search);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    <usePageViews />
    <Analytics />
  </StrictMode>
);
