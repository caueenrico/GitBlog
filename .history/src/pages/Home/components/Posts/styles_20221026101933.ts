import { Routes, Route } from 'react-router-dom'

import styled from "styled-components";

export const PostsContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: ${props => props.theme['post']};
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  gap: 20px;

  
  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    h1 {
      color: ${(props) => props.theme["title"]};
      font-size: 20px;
      line-height: 160%;
      max-width: 283px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span{
      color: ${(props) => props.theme["span"]};
      font-size: 14px;
    }

    
  }

  p{
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme["text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

`
