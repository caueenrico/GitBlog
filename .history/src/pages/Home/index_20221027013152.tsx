import { HomeContainer, PostsHomeContainer} from "./styles";
import { ContentSearch } from "./components/ContentSearch";
import { Posts } from "./components/Posts";
import { ProfileHeader } from "./components/ProfileHeader";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { map } from "zod";


export interface Iposts{
  number: number
  title: string
  body: string
  created_at: string
  user:{
    login:
  }
}

export function Home() {

  const [posts, setPosts] = useState<Iposts[]>([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getPostsIssues = useCallback(async (query: string = '') => {
    try{
      setIsLoaded(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:caueenrico/Gitblog`)
      setPosts(response.data.items)
      console.log(response.data.items)
    }finally{
      setIsLoaded(false)
    }
  },[posts])

  useEffect(() => {
    getPostsIssues()
  },[])
  
  return (
    <>
      <HomeContainer> 

        <ProfileHeader />

      <ContentSearch/>

      <PostsHomeContainer>
        {posts.map((post) => (
          <Posts key={post.number} />
        ))}
      
      </PostsHomeContainer>

      </HomeContainer>

      

    </>
  );
}