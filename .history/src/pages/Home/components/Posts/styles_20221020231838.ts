import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  
  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme["title"]};
      
    }

    
  }

`
