import UserInfo from "./UserInfo";
import UserStat from "./UserStat";
import UserTitle from "./UserTitle";

import { useContext } from "react";
import { UserContext } from "../utils/context";

const UserCard = () => {
  const UserValue = useContext(UserContext);
  const { user } = UserValue || {};

  if (!user) return <></>;
  
  return (
    <div className="mt-[1.5rem] mb-[3rem] w-full pt-[30px] rounded-xl px-[24px] pb-[40px] bg-white dark:bg-custom-gray-400 flex  gap-y-[25px] gap-x-5 shadow-custom-shadow-md dark:shadow-none">
      <div className=" w-[30%]">
        <img
          src={user?.avatar}
          alt={user?.login}
          width={130}
          height={130}
          className=" rounded-[50%] max-w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <UserTitle user={user!} />
        <p className=" leading-normal text-custom-gray-200 dark:text-white opacity-90 mt-10 mb-6">
          {user?.bio || "This profile has no bio"}
        </p>
        <UserStat user={user!} />
        <UserInfo user={user!} />
      </div>
    </div>
  );
};

export default UserCard;
