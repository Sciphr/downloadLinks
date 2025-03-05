"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import getTheme from "./getTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useState("light");
  const theme = getTheme();

  useEffect(() => {
    if (theme === "dark") {
      setContextTheme("dark");
    } else {
      setContextTheme("light");
    }
  }, []);

  const contextToggleTheme = () => {
    setContextTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ contextTheme, contextToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
