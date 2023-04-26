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
import { useCallback, useEffect, useState } from "react";

interface ProfileData {
  
  login: string;
  name: string;
  bio?: string;
  avatar_url: string;
  company?: string;
  followers: number;
}


export function Home() {

  
  const [profileData, setProfileData] = useState<ProfileData> ({} as ProfileData);
  const [isLoaded, setIsLoaded] = useState(true);

  const getProfileData = useCallback(async () => {
    try{
      setIsLoaded(true);
      const response = await api.get('/users/caueenrico');
      setProfileData(response.data);
      
    }finally{
      setIsLoaded(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);



  return (
    <>
      <Header>
        <img src={logo} />
      </Header>
      
      <HomeContainer> 


      <ProfileContainer>
          <img className="imageProfile" src={ profileData.avatar_url } />

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
            <li><img src={github}/>{profileData.login}</li>
            <li {}><img src={company}/>{profileData.company}</li>
            <li><img src={followers}/>{profileData.followers} Seguidores</li>
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