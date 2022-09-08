import {
  AppBar,
  Box,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import WellcomeMessage from "../WellcomeMessage";



const Navbar = () => {
  const [position, setPosition] = useState("Full-stack Developer");

  const onPositionChange = (e :any) => {
    setPosition(e.target.value);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movie</Typography>
          <Box textAlign={"center"}>
            <WellcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
