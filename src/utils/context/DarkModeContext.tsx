import React, { FC, useState, useEffect } from "react";
import { DarkModes } from "./index";

const applyDarkModeClasses = (theme: string | boolean) => {
  if (theme === "dark" || theme === true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const initializeDarkMode = (setisDark: Function) => {
  const localTheme = localStorage.getItem("isDark") || null;

  if (localTheme) {
    setisDark(JSON.parse(localTheme));
    applyDarkModeClasses("dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setisDark(true);
    applyDarkModeClasses("dark");
  }
};

interface DarkModeProviderProps {
  children: React.ReactNode;
}


const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const [isDark, setisDark] = useState(false);
  
  useEffect(() => initializeDarkMode(setisDark), []);
  useEffect(() => applyDarkModeClasses(isDark), [isDark]);

  const toggleMode = () => {
    setisDark((isDark) => !isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };
  

  return (
    <DarkModes.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModes.Provider>
  );
};

export default DarkModeProvider;
