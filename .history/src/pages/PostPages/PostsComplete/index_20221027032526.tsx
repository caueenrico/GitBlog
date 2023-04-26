import { useCallback, } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";



export function PostComplete() {
  const { id } = useParams<{ id: string }>()

  const [pos]

  const getPostComplete = useCallback(async() => {
    try{
     const response = await api.get(`/repos/caueenrico/Gitblog/issues/${id}`)
      console.log(response.data)
    }finally{
      
    }
  },[])

  return (
    <>
    markdown
    </>
  );
}