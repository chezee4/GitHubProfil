import { createContext} from "react";

interface DarkMode {
  isDark: boolean;
  toggleMode: () => void;
}

export const DarkModes = createContext<DarkMode | null>(null);