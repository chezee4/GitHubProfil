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
      className="flex items-center gap-4 cursor-pointer"
      onClick={toggleMode}
    >
      <span className=" text-custom-gray-100 dark:text-white hover:text-custom-gray-300 dark:hover:text-custom-gray-100">
        {isDark ? "Dark" : "Liegt"}
      </span>
      <ThemeIcon className=" fill-custom-gray-100 dark:fill-white" />
    </motion.div>
  );
};

export default ThemeSwitcher;
