import { useContext } from "react";
import { DarkModes } from "../utils/context";
import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

const ThemeSwitcher = () => {
  const darmModeValue = useContext(DarkModes);
  const { isDark, toggleMode } = darmModeValue || {};
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  return (
    <div onClick={toggleMode}>
      <span>{isDark ? "Dark" : "Liegt"}</span>
      <ThemeIcon />
    </div>
  );
};

export default ThemeSwitcher;
