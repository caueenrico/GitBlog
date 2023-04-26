import { HomeContainer, PostsHomeContainer} from "./styles";
import { ContentSearch } from "./components/ContentSearch";
import { Posts } from "./components/Posts";
import { ProfileHeader } from "./components/ProfileHeader";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";


export function Home() {

  const [posts, setPosts] = useState([]);

  const getPostsIssues = useCallback(async (query: string = '') => {
    const response = await api.get(`/search/issues/q=${query}%20repo:caueenrico/Gitblog`)
    console.log(response.data)
  },[])

  useEffect(() => {
    getPostsIssues
  },[])
  
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