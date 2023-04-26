import { useCallback, } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";



export function PostComplete() {
  const { id } = useParams<{ id: string }>()

  const getPostComplete = useCallback(() => {
    try{
     const response = await api.get(`/repos/caueenrico/Gitblog/issues/${id}`)
      console.log(response.data)
    }
  },[]))

  return (
    <>
    markdown
    </>
  );
}