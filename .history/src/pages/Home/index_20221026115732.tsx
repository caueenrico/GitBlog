import { ExternalLink, Header, HomeContainer, InformationProfile, PostsHomeContainer, ProfileContainer } from "./styles";
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
      <HomeContainer> 



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