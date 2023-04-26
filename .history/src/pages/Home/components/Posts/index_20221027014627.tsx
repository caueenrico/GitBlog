import { useCallback, useState } from "react";
import { PostsContainer } from "./styles";

import { Iposts } from "../..";

interface PostsProps {
  post: Iposts
}


export function Posts({post}: PostsProps) {
 
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