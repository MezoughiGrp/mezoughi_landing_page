import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-EEYBFX4JHZ';

const UsePageViews = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
};

export default UsePageViews;