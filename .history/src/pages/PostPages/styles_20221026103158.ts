import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`


export const PostTiltleContainer = styled.div`

  min-height: 13.25rem;
  
  margin-top: -88px;
  border-radius: 8px;

  background: ${(props) => props.theme["profile"]};
  display: flex;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);  



`;