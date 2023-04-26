import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: ${props => props.theme['post']};
  
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
  }

`
