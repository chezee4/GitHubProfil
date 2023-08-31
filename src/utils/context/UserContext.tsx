import React, { FC, useState} from "react";
import { UserContext } from "./index";
import { LocalGithubUser } from "../../types";
import { defaultUser } from "../../constants";

interface UserContextProps {
  children: React.ReactNode;
}

const UserProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<LocalGithubUser>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;