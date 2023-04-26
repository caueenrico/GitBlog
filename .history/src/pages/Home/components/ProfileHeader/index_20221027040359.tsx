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
      setProfileData(response.data);
      
    }finally{
      setIsLoaded(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  
  return(
    
      <ProfileContainer>
          
      </ProfileContainer>
    
  )
}