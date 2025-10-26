import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();

  // Function to get context text based on current route
  const getContextText = () => {
    const pathParts = location.pathname.split("/");
    
    if (pathParts[1] === "users" && pathParts[2]) {
      const userId = pathParts[2];
      const user = models.userModel(userId);
      if (user) {
        return `${user.first_name} ${user.last_name}`;
      }
    } else if (pathParts[1] === "photos" && pathParts[2]) {
      const userId = pathParts[2];
      const user = models.userModel(userId);
      if (user) {
        return `Photos of ${user.first_name} ${user.last_name}`;
      }
    }
    
    return "Home";
  };

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          B22DCAT248
        </Typography>
        <Typography variant="h5" color="inherit">
          {getContextText()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
