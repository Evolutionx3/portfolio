import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AppProvider = ({children}) => {
  return <Router>{children}</Router>;
};

export default AppProvider;
