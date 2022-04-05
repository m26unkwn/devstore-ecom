import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "./Context";

export const ScrollToTopProvider = ({ children }) => {
  const location = useLocation();
  // //   const {
  // //     state: { selectedFilters },
  // //   } = useData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return <>{children}</>;
};
