import { Button, Fab, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

import "./App.scss";
import BtnTheme from "./components/BtnTheme";

import Navbar from "./components/NavBar";
import Tasks from "./components/Tasks";
import TopMovies from "./components/TopMovies";
import AuthContextProvider from "./contexts/AuthContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import TaskContextProvider from "./contexts/TaskContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
  const [themee, setThemem] = useState(false);

  const changeTheme = () => {
    setThemem(!themee);
  };

  const darkTheme = createTheme({
    palette: {
      mode: themee ? "dark" : "light",
    },
  });

  const themeBtn = {
    position: "fixed",
    right: "3rem",
    backgroundColor: themee ? "" : "black",
    color: themee ? "black" : "white",
    p: 2,
  };
  return (
    <div>
      <TopMovieContextProvider>
        <ThemeProvider theme={darkTheme}>
          <ThemeContextProvider>
            <AuthContextProvider>
              <TaskContextProvider>
                <ProgressContextProvider>
                  <Box>
                    <Navbar />
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box sx={{ flex: 2 }}>
                        <TopMovies />
                      </Box>
                      <Box sx={{ flex: 7 }}>
                        <Tasks />
                        <Fab sx={themeBtn} onClick={changeTheme}>
                          Theme
                        </Fab>
                        <BtnTheme />
                      </Box>
                    </Box>
                  </Box>
                </ProgressContextProvider>
              </TaskContextProvider>
            </AuthContextProvider>
          </ThemeContextProvider>
        </ThemeProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
