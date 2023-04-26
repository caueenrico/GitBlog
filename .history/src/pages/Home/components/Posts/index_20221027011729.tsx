import { useCallback, useState } from "react";
import { PostsContainer } from "./styles";
import { api } from "../../../../lib/axios";

interface PostsProps {
  title: string;
  created_at: string;
  resume: string;
}



export function Posts({}: PostsProps) {
 
  return (
    <PostsContainer to='/post/1'>
      <header>
        <h1>
        JavaScript data types and data structures
        </h1>

        <span>
        Há 1 dia
        </span>

      </header>

      <p>
      Programming languages all have built-in data structures, 
      but these often differ from one language to another. 
      This article attempts to list the built-in data structures available in...
      </p>
      
    </PostsContainer>
  );
}