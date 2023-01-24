import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Box, Container, CssBaseline } from "@mui/material";
import "../../App.css";

const drawerWidth = 335;

// SIDE DRAWER
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // height: "100%",
    // overflow: "hidden",
    // width: "100%",
    // maxWidth: "1500px",
  },
}));

// MENUS
// const menusItems = [
//   {
//     href: "/dashboard",
//     title: "Dashboard",
//     icon: <Dashboard />,
//   },
//   {
//     href: "#",
//     title: "Manage Posts",
//     icon: <Pancil />,
//   },
//   {
//     href: "/subscription",
//     title: "Manage Subscriptions",
//     icon: <Subscriptions />,
//   },
//   {
//     href: "/edit-website",
//     title: "Edit Website",
//     icon: <Website />,
//   },
//   {
//     href: "/user-profile",
//     title: "User Details",
//     icon: <User />,
//   },
//   {
//     href: "/bank-details",
//     title: "Banking Details",
//     icon: <Bank />,
//   },
// ];

const DashboardLayout = () => {
  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        {/* <CssBaseline /> */}
        <Box
          className="main-layout-container"
          // maxWidth="xl"
          style={{ backgroundColor: "#F3F2ED" }}
        >
          <Box sx={{ width: "100%" }}>
            <div className={classes.root}>
              <TopBar />
            </div>
            {/* <NavBar /> */}
          </Box>
        </Box>
        <Outlet />
      </React.Fragment>
    </>
  );
};

export default DashboardLayout;
