import { Dispatch, SetStateAction, createContext} from "react";
import { LocalGithubUser } from "../../types";

interface DarkMode {
  isDark: boolean;
  toggleMode: () => void;
}

export const DarkModes = createContext<DarkMode | null>(null);


interface IUserContext {
  user: LocalGithubUser,
  setUser: Dispatch<SetStateAction<LocalGithubUser>>
}


export const UserContext = createContext<IUserContext | null>(null);

