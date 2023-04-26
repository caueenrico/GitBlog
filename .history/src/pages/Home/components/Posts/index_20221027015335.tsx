import { PostsContainer } from "./styles";
import { Iposts } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";


interface PostsProps {
  post: Iposts
}


export function Posts({post}: PostsProps) {
  const formatedDate = relativeDateFormatter(post.created_at)

  return (
    <PostsContainer to={`/post/${post.number}`}>
      <header>
        <h1>
        {post.title}
        </h1>
        <span>
        {forma}
        </span>

      </header>

      <p>
        {post.body}
      </p>
      
    </PostsContainer>
  );
}