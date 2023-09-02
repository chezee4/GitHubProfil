import { useContext } from "react";
import {motion} from "framer-motion";

import { DarkModes } from "../utils/context";
import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

const ThemeSwitcher = () => {
  const darmModeValue = useContext(DarkModes);
  const { isDark, toggleMode } = darmModeValue || {};
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  return (
    <motion.div
    animate={{
      x: [70, 0],
      opacity: [0, 1],
      transition: { duration: 1 },
    }}
      className="flex items-center gap-4 cursor-pointer group"
      onClick={toggleMode}
    >
      <span className=" text-custom-gray-100 transition-all duration-200 ease-linear dark:text-white group-hover:text-custom-gray-500 dark:group-hover:text-custom-gray-200">
        {isDark ? "Dark" : "Leight"}
      </span>
      <ThemeIcon className=" fill-custom-gray-100 transition-all duration-200 ease-linear group-hover:fill-custom-gray-400 dark:fill-white dark:group-hover:fill-custom-gray-100" />
    </motion.div>
  );
}; 

export default ThemeSwitcher;
