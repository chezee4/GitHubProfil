import { FC } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: FC = () => (
  <motion.header
    animate={{
      y: [30, 0],
      opacity: [0, 1],
      transition: { duration: 0.6 },
    }}
    className="flex my-8 justify-between items-center"
  >
    <motion.div
    animate={{
      x: [-70, 0],
      opacity: [0, 1],
      transition: { duration: 1 },
    }} className="text-custom-gray-300 dark:text-white text-2xl leading-normal font-bold tracking-wider cursor-pointer">
      devfinder
    </motion.div>
    <ThemeSwitcher />
  </motion.header>
);

export default Header;
