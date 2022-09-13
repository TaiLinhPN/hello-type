import { Button, Fab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

import "./App.scss";
import BtnTheme from "./components/BtnTheme";
import Navbar from "./components/NavBar";
import Tasks from "./components/Tasks";
import ProgressContextProvider from "./contexts/ProgressContext";
import TaskContextProvider from "./contexts/TaskContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  const [themee, setThemem] = useState(false)

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
          <TaskContextProvider>
      <ThemeProvider theme={darkTheme}>
        <ThemeContextProvider>
            <ProgressContextProvider>
              <Box>
                <Navbar />
                <Tasks/>
                <Fab sx={themeBtn} onClick={changeTheme}>
                  Theme
                </Fab>
                <BtnTheme />
              </Box>
            </ProgressContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
          </TaskContextProvider>
    </div>
  );
}

export default App;
