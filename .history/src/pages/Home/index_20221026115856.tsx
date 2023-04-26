import { ExternalLink, Header, HomeContainer, InformationProfile, PostsHomeContainer, ProfileContainer } from "./styles";
import { ContentSearch } from "./components/ContentSearch";
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