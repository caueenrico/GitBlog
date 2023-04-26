import { useCallback, useState, } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { Iposts } from "../../Home";



export function PostComplete() {
  const { id } = useParams<{ id: string }>()

  const [postComplete, setPostComplete] = useState<Iposts>(as)

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