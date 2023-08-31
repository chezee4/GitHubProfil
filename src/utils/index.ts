import { GithubUser, LocalGithubUser } from "../types";

export const isGithubUser = (user: any): user is GithubUser => 'id' in user; 


export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
 
 export const dateFormatting = (data: Date):string => {
    const localDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
   return localDate.format(data);
}


















