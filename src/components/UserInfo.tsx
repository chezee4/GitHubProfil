import InfoItem, { InfoItemProps } from "./InfoItem";
import { LocalGithubUser } from "../types";

import { ReactComponent as CompanyIcon } from "../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "../assets/icon-website.svg";

const UserInfo = ({ user }: { user: LocalGithubUser }) => {
  const { location, blog, twitter, company } = user;

  const items: InfoItemProps[] = [
    {
      icon: (
        <LocationIcon className=" fill-custom-gray-200 dark:fill-white  w-5" />
      ),
      text: location,
    },
    {
      icon: <BlogIcon className=" fill-custom-gray-200 dark:fill-white  w-5" />,
      text: blog,
      isLink: true,
    },
    {
      icon: (
        <TwitterIcon className=" fill-custom-gray-200 dark:fill-white  w-5" />
      ),
      text: twitter,
    },
    {
      icon: (
        <CompanyIcon className=" fill-custom-gray-200 dark:fill-white m w-5" />
      ),
      text: company,
    },
  ];

  return (
    <ul className="flex flex-col md:gap-4 md:grid grid-rows-2 grid-flow-col mx-2 mt-8">
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </ul>
  );
};

export default UserInfo;
