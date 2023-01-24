import React, { useState, createContext, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "../src/routes";

const Context = createContext();

const App = () => {
  console.log("viewRoutes", publicRoutes);
  const routing = useRoutes(publicRoutes);

  return <div>{routing}</div>;
};

export default App;
