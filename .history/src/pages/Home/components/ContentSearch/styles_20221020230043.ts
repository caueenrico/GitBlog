import styled from "styled-components";

export const ContainerInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
      color: ${(props) => props.theme["subtitle"]};
      
    }
  }
`
