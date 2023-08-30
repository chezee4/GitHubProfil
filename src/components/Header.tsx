import { FC } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export const TheHeader: FC = () => (
  <header className="flex mx-8 justify-between items-center">
    <div className="text-custom-gray-300 dark:text-white text-2xl leading-normal font-bold">
      devfinder
    </div>
    <ThemeSwitcher />
  </header>
);
