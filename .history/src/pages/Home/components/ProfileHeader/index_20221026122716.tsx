import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { ExternalLink } from "../../styles";
import { InformationProfile, ProfileContainer } from "./styles";
import link from '../../../assets/link.svg';
import github from '../../../assets/github.svg';
import company from '../../../assets/company.svg';
import followers from '../../../assets/followers.svg';

interface ProfileData {
  login: string;
  name: string;
  bio?: string;
  avatar_url: string;
  company?: string;
  followers: number;
}

export function ProfileHeader(){
  const [profileData, setProfileData] = useState<ProfileData> ({} as ProfileData);
  const [isLoaded, setIsLoaded] = useState(true);

  const getProfileData = useCallback(async () => {
    try{
      setIsLoaded(true);
      const response = await api.get('/users/caueenrico');
      setProfileData(response.data.items);
      
      
    }finally{
      setIsLoaded(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  console.log(profileData + 't')
  return(
    <>
      <ProfileContainer>
          <img className="imageProfile" src={ profileData.avatar_url } />

          <InformationProfile>
            <header>
              <h1>Caue Enrico</h1>
              <ExternalLink href="#">github <img src={link} /> </ExternalLink>
            </header>

            <p>
              {profileData.bio === 'null' ? profileData.bio : 'Não há descrição'}
            </p>

            <ul>
              <li><img src={github}/>{profileData.login}</li>
              {profileData.company ==='null' ?  <li><img src={company}/>{profileData.company}</li> : ''}
              <li><img src={followers}/>{profileData.followers} Seguidores </li>
            </ul>
          </InformationProfile> 
      </ProfileContainer>
    </>
  )
}