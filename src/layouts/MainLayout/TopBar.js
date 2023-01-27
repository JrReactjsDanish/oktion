import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  SvgIcon,
  Hidden,
} from "@mui/material";
import gardernImg from "../../assets/images/garden.png";
import oktionLogo from "../../assets/images/Oktion-Logo.svg";
import "./layout.scss";
import { Grid } from "@material-ui/core";

const navItems = [
  "For Organizers",
  "Mail",
  "Notifications",
  "Following",
  "Checkout",
  "New Event",
];

function TopBar(props) {
  const { window } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box className="topbar">
        <Box className="topbar-container">
          <AppBar component="nav" className="nav-bar" elevation={0}>
            <Toolbar className="menu-section">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                className="navbar-logo"
              >
                <img src={oktionLogo} />
              </Typography>

              <Box sx={{ display: { sm: "block" } }} className="nav-box">
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    <NavLink
                      to={item}
                      style={{ textDecoration: "none", color: "black" }}
                      className="navlink"
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {" "}
                        {item}
                      </span>
                    </NavLink>
                  </Button>
                ))}
              </Box>
              <IconButton sx={{ ml: 1 }}>
                <Avatar alt="avatar" src={gardernImg} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      {/* NAV FOR SMALLER SCREEN */}
      <Box className="mobile-nav-container">
        <Box className="mobile-nav">
          <Grid container>
            <Grid xs={6} md={6}>
              <Typography
                variant="h6"
                component="div"
                // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                className="navbar-logo"
              >
                <img src={oktionLogo} />
              </Typography>
            </Grid>
            <Grid xs={6} md={6} className="menu-btn">
              <Button onClick={handleDrawerToggle}>
                <MenuIcon color="action" />
              </Button>
            </Grid>
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  // display: { xs: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 240,
                  },
                }}
                anchor="right"
              >
                {drawer}
              </Drawer>
            </Box>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default TopBar;
