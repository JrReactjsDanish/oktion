import React from "react";
import { Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/MainLayout";

// USER
import Home from "./views/component/application/Home/Home";

// USER ROUTES
export const publicRoutes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
];
