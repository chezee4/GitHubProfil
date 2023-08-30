import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from "../UI/Button";


interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  username: HTMLInputElement,
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className= "relative w-full overflow-hidden p-3 md:pr-4 md:p-7 bg-white dark:bg-custom-gray-400 flex items-center rounded-2xl ">
        <label htmlFor="search" className="cursor-pointer">
          <SearchIcon />
        </label>
        <input
          type="text"
          className=" py-3 flex-grow-[5] max-w-[calc(100%-100px-20px)] text-custom-gray-300 dark:text-white text-sm leading-normal cursor-pointer bg-white dark:bg-custom-gray-300 placeholder:text-custom-gray-200 dark:placeholder:text-white"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && (
          <div className="absolute md:right-[120px] md:-translate-y-1/2 md:bottom-[unset] right-1/2 bottom-1 leading-normal font-bold">
            No result
          </div>
        )}
        <Button className=" flex-shrink-0">Search</Button>
      </div>
    </form>
  );
};


export default Search;