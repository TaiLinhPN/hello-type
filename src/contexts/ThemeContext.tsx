import { PropTypes } from "@mui/material";
import React, { createContext, useState } from "react";

interface ThemeContextProp {
  children: any;
}

interface ThemeContextDefauld {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const themeDefauld = {
  theme: "inherit" as PropTypes.Color,
  toggleTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextDefauld>(themeDefauld);

const ThemeContextProvider = ({ children }: ThemeContextProp) => {
  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  const [theme, setTheme] = useState<PropTypes.Color>(themeDefauld.theme);
  const themeContextDanamic = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextDanamic}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
