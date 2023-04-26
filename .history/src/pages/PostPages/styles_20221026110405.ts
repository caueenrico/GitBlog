import styled from "styled-components";

export const Container = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;


export const PostTiltleContainer = styled.div`

  min-height: 13.25rem;
  
  margin-top: -88px;
  border-radius: 8px;

  background: ${(props) => props.theme["profile"]};
  display: flex;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);  


  ul {
    display: flex;
    list-style: none;
    gap: 24px;
    margin-top: 24px;

    img {
      width: 18px;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 16px;
      color: ${(props) => props.theme["subtitle"]};
      
    }

`;