import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
// import { ReactComponent as images } from "./";
import { Avatar, Container, Menu, SvgIcon } from "@mui/material";
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const drawer = (
  //     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //       <Typography variant="h6" sx={{ my: 2 }}>
  //         MUI
  //       </Typography>
  //       <Divider />
  //       <List>
  //         {navItems.map((item) => (
  //           <ListItem key={item} disablePadding>
  //             <ListItemButton sx={{ textAlign: "center" }}>
  //               <ListItemText primary={item} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Box>
  //   );

  let activeStyle = {
    textDecoration: "none",
  };

  let activeClassName = "underline";

  return (
    <React.Fragment>
      <Container className="topbar-container">
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
                    <span style={{ textTransform: "capitalize" }}> {item}</span>
                  </NavLink>
                </Button>
              ))}
            </Box>
            <IconButton sx={{ ml: 1 }}>
              <Avatar alt="avatar" src={gardernImg} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
      <div className="mobile-container">sad</div>
    </React.Fragment>
  );
}

export default TopBar;
