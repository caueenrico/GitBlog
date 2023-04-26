import { useParams } from "react-router-dom";



export function PostComplete() {
  const { id } = useParams<{ id: string }>()

  

  return (
    <>
    markdown
    </>
  );
}