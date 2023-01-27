import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import "../../App.css";

const drawerWidth = 335;


const DashboardLayout = () => {

  return (
    <>
      <React.Fragment>
        <div>
          <TopBar />
        </div>

        <div>
          <Outlet />
        </div>
      </React.Fragment>
    </>
  );
};

export default DashboardLayout;
