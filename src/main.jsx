import { StrictMode } from 'react'
import './index.scss'

import { createRoot } from 'react-dom/client'
import { renderRoutes } from './routes';

import { BrowserRouter } from "react-router-dom";
import routes from "./routes";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     {renderRoutes(routes)}
      </BrowserRouter>
  </StrictMode>,
)
