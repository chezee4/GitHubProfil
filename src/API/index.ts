import { GithubError, GithubUser } from "../types";
import { isGithubUser, extractLocalUser } from "../utils/";


const BASE_URL = 'https://api.github.com/users/';

export const fetchUser = async (username: string, setUser: Function) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  }