import { ExternalLink, Header, HomeContainer, InformationProfile, PostsHomeContainer, ProfileContainer } from "./styles";
import link from '../../pages/assets/link.svg';
import github from '../../pages/assets/github.svg';
import company from '../../pages/assets/company.svg';
import followers from '../../pages/assets/followers.svg';
import { ContentSearch } from "./components/ContentSearch";
import { PostsContainer } from "./components/Posts/styles";
import { Posts } from "./components/Posts";

import { ProfileHeader } from "./components/ProfileHeader";


export function Home() {
  
  return (
    <>
      <HomeContainer> 

      <ProfileHeader />

      <ContentSearch/>

      <PostsHomeContainer>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      </PostsHomeContainer>

      </HomeContainer>

      

    </>
  );
}