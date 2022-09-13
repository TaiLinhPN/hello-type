import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  PropTypes,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import WellcomeMessage from "../WellcomeMessage";

const whiteColor = {
  color: "white",
};
const whiteBackground = {
  backgroundColor: "white",
};

const Navbar = () => {
  const [position, setPosition] = useState("Full-stack Developer");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (e: any) => {
    setPosition(e.target.value);
  };

  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 1,
            py: 2,
          }}
        >
          <Typography variant="h6">My movie</Typography>
          <Box textAlign={"center"}>
            <WellcomeMessage position={position} />
            <Chip
              sx={whiteBackground}
              label={`Last time working on this project: ${lastTime} - status: ${status} `}
            />
          </Box>
          <Box>
            <Box mt={1}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                <Typography>{time}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                <Button variant="contained" sx={{ mr: 1 }}>
                  Login
                </Button>
                <FormControl>
                  <Select
                    sx={whiteColor}
                    value={position}
                    onChange={onPositionChange}
                  >
                    <MenuItem value={"Full-stack Developer"}>
                      Full-stack Developer
                    </MenuItem>
                    <MenuItem value={"Front-End Developer"}>
                      Front-End Developer
                    </MenuItem>
                    <MenuItem value={"Back-End Developer"}>
                      Back-End Developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
