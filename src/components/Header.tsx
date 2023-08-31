import { FC } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: FC = () => (
  <header className="flex my-8 justify-between items-center">
    <div className="text-custom-gray-300 dark:text-white text-2xl leading-normal font-bold">
      devfinder
    </div>
    <ThemeSwitcher />
  </header>
);

export default Header;
