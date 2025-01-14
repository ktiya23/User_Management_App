import React, { useState } from "react";
import { AppBar, Switch, Toolbar, Typography, Box } from "@mui/material";

const NavBar = ({ toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
    toggleDarkMode(); 
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: darkMode ? "#333" : "#1976d2" }}>
      <Toolbar sx={{backgroundColor:"#a28089"}}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign:"center"}}>
          USER MANAGEMENT APP
        </Typography>
        
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1" color="inherit">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch checked={darkMode} onChange={handleToggleMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
