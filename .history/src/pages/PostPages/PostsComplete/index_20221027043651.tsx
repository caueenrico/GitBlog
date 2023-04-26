import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown";

interface IPostComplete {
  content: string;
}

export function PostComplete({content}: IPostComplete) {
  return (
    <PostContentContainer>
      <ReactMarkdown children="" />
    {content}
    </PostContentContainer>
  );
}