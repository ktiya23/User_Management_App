import React, { useState } from 'react'
import {AppBar, Switch, Toolbar, Typography} from "@mui/material"


const NavBar = ({toggleDarkMode}) => {
    const [darkMode, setDarkMode] = useState(false)

    const handleToggleMode=()=>{
        setDarkMode(!darkMode)
        toggleDarkMode()
    }
  return (
    <AppBar>
        <Toolbar>
            <Typography>
                USER MANAGEMENT APP
            </Typography>
            <Switch checked={darkMode} onChange={handleToggleMode} />
            <Typography>{darkMode ? "Dark Mode" : "Light Mode"}</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
