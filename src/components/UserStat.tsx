import { LocalGithubUser } from "../types";

const UserStat = ({ user }: { user: LocalGithubUser }) => {
  const { repos, following, followers } = user;

  return (
    <div className=" bg-custom-gray-50 dark:bg-custom-gray-500 text-custom-gray-300 dark:text-white py-4 px-8 rounded-[10px] grid grid-cols-3">
      <div className=" flex flex-col gap-[0.5rem]">
        <span className=" text-custom-gray-200 text-[0.75rem] leading-normal">
          Repos
        </span>
        <span className=" text-xl leading-normal font-bold">{repos}</span>
      </div>
      <div className=" flex flex-col gap-[0.5rem]">
        <span className=" text-custom-gray-200 text-[0.75rem] leading-normal">
          Following
        </span>
        <span className=" text-xl leading-normal font-bold ml-[7%]">{following}</span>
      </div>
      <div className=" flex flex-col gap-[0.5rem]">
        <span className=" text-custom-gray-200 text-[0.75rem] leading-normal">
          Followers
        </span>
        <span className=" text-xl leading-normal font-bold ml-[7%]">{followers}</span>
      </div>
    </div>
  );
};

export default UserStat;
