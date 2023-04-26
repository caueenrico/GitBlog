import { PostContentContainer } from "./styles";

interface IPostComplete {
  content: string;
}

export function PostComplete({content}: IPostComplete) {
  return (
    <PostContentContainer>
      <Rea
    {content}
    </PostContentContainer>
  );
}