import { PostsContainer } from "./styles";
import { Iposts } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";


interface PostsProps {
  post: Iposts
}


export function Posts({post}: PostsProps) {
  const formatedDate = relativeDateFormatter(post)

  return (
    <PostsContainer to={`/post/${post.number}`}>
      <header>
        <h1>
        {post.title}
        </h1>
        <span>
        {post.created_at}
        </span>

      </header>

      <p>
        {post.body}
      </p>
      
    </PostsContainer>
  );
}