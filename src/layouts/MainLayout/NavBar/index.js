import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  // Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  makeStyles,
} from "@material-ui/core";

const NavBar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const content = (
    <Box display="flex" flexDirection="column" className="menu-bar">
      <Box p={2}>
        <Box className="close-button">
          <IconButton></IconButton>
        </Box>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return <div>{content}</div>;
};

export default NavBar;
