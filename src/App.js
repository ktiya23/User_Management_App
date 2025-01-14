import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";


function App() {
  const [darkMode , setDarkMode] = useState(false)

  const theme = createTheme({
    palette:{
      mode:darkMode?"dark" :"light",
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <UserProvider>
        <Router>
          <NavBar toggleDarkMode={()=> setDarkMode(!darkMode)} />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/user/:id" element={<UserDetailPage/>} />
            </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
