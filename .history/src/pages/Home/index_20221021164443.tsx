import { Header, HomeContainer, InformationProfile, LinkGit, PostsHomeContainer, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';
import link from '../../pages/assets/link.svg';
import github from '../../pages/assets/github.svg';
import company from '../../pages/assets/company.svg';
import followers from '../../pages/assets/followers.svg';
import { ContentSearch } from "./components/ContentSearch";
import { PostsContainer } from "./components/Posts/styles";
import { Posts } from "./components/Posts";
import { api } from "../../lib/axios";
import { useState } from "react";


export function Home() {
  const [user, setUser] = useState({});

  async function handleSearchUser(username: string) {
    

  return (
    <>
      <Header>
        <img src={logo} />
      </Header>
      
      <HomeContainer> 


      <ProfileContainer>
          <img className="imageProfile" src={'https://avatars.githubusercontent.com/u/77198706?v=4'} />

          <InformationProfile>
            <header>
              <h1>Caue Enrico</h1>
              <LinkGit href="#">github <img src={link} /> </LinkGit>
            </header>

            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
              Nunc, volutpat pulvinar vel mass.
            </p>

            <ul>
            <li><img src={github}/>caueenrico</li>
            <li><img src={company}/>z8tecnology</li>
            <li><img src={followers}/>32 seguidores</li>
            </ul>
          </InformationProfile> 
      </ProfileContainer>


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