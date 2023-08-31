import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";
import { Button } from "../UI/Button";

import { useContext } from "react";
import { UserContext } from "../utils/context";

import { fetchUser as onSubmit } from "../API";

type FormFields = {
  username: HTMLInputElement;
};

const Search = () => {
  const UserValue = useContext(UserContext);
  const { user, setUser } = UserValue || {};
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text, setUser!);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="relative w-full overflow-hidden p-3 pl-4 md:pl-7 bg-white dark:bg-custom-gray-400 flex items-center rounded-2xl shadow-custom-shadow-md dark:shadow-none  ">
        <label htmlFor="search" className="cursor-pointer">
          <SearchIcon />
        </label>
        <input
          type="text"
          className=" p-[10px] pl-4 flex-grow-[5] max-w-[calc(100%-100px-20px)] outline-none text-custom-gray-300 dark:text-white leading-normal cursor-pointer bg-white dark:bg-custom-gray-400 placeholder:text-custom-gray-200 dark:placeholder:text-white"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {!user && (
          <div className="absolute md:right-[120px] md:-translate-y-1/2 md:bottom-[unset] right-1/2 bottom-1 leading-normal font-bold">
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
