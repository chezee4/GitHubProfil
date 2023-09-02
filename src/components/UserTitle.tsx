import { LocalGithubUser } from "../types";
import { dateFormatting } from "../utils";

const UserTitle = ({ user }: { user: LocalGithubUser }) => {
  const { name, login, created } = user;
  const userHref = "https://github.com/" + login;
  return (
    <div className=" block gap-x-2.5 gap-y-0.5 relative">
      <div className="max-w-[200px]">
        <h2 className=" md:text-[1.5rem] text-xs leading-normal font-bold text-custom-gray-300 dark:text-white">
          {name}
        </h2>
        <a 
         href={userHref}
         target="_blank"
         rel="noreferrer"
         className=" text-main-color text-[0.75rem] font-medium  md:text-sm leading-normal mt-3 cursor-pointer transition-all duration-200 ease-linear hover:text-main-color-hover">
          {"@" + login}
        </a>
      </div>
      <span className=" absolute top-0 right-0 text-custom-gray-100 md:text-[0.85rem] text-xs md:justify-normal justify-end dark:text-white ">
        {"Joined  " + dateFormatting(new Date(created))}
      </span>
    </div>
  );
};

export default UserTitle;
