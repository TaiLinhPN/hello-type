import { Fab } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const floatBtn = {
    position: 'fixed',
    right: '3rem',
    bottom: '3rem'
}
const BtnTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Fab
      sx={floatBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      theme
    </Fab>
  );
}

export default BtnTheme