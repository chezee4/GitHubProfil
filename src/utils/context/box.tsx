import React, { FC, useState, useEffect } from "react";
import { DarkModes } from "./index";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const [isDark, setisDark] = useState(false);

  const toggleMode = () => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setisDark && setisDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };


  useEffect(() => {
    const localTheme = localStorage.getItem("isDark") || null;

    if (localTheme) {
      setisDark(JSON.parse(localTheme));

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setisDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  
  return (
    <DarkModes.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModes.Provider>
  );
};

export default DarkModeProvider;
