import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Box, Container, CssBaseline } from "@mui/material";
import "../../App.css";

const drawerWidth = 335;

// SIDE DRAWER
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     height: "100%",
//     overflow: "hidden",
//     width: "100%",
//     maxWidth: "1500px",
//   },
// }));

const DashboardLayout = () => {
  // const classes = useStyles();

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
