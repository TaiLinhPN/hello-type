import { Button, Fab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

import "./App.scss";
import BtnTheme from "./components/BtnTheme";
import Navbar from "./components/NavBar";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  const [themee, setThemem] = useState(false)

  console.log(themee);
  const changeTheme = () => {
    setThemem(!themee);
    
  }
  
  const darkTheme = createTheme({
    palette: {
      mode: themee? 'dark': 'light'
    },
  });

  const themeBtn = {
    position: 'fixed',
    right:'3rem',
    backgroundColor: themee ? '' : 'black',
    color: themee ? 'black' : 'white',
    p: 2,
    
  }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Box>
              <Navbar />
              <div>he looo</div>
              <Fab sx={themeBtn} onClick={changeTheme}>Theme</Fab>
            <BtnTheme/>
            </Box>
          </ProgressContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
