import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Iposts } from "../Home";
import { HeaderPostpages } from "./HeaderPostPages";
import { Container } from "./HeaderPostPages/styles";

export function PostPages() {

  const { id } = useParams<{ id: string }>()

  const [postComplete, setPostComplete] = useState<Iposts>({} as Iposts)
  const [isLoaded, setIsLoaded] = useState(true);

  const getPostComplete = useCallback(async() => {
    try{
      setIsLoaded(true)
      const response = await api.get(`/repos/caueenrico/Gitblog/issues/${id}`)
      setPostComplete(response.data)
    }finally{
      setIsLoaded(false)
    }
  },[postComplete])

  useEffect(() => {
    getPostComplete()
  },[])


return (
    <Container>
      <HeaderPostpages 
        
        post={postComplete}
      />
    </Container>
  );
}