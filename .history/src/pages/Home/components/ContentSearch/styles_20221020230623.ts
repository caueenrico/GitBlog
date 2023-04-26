import styled from "styled-components";

export const ContainerInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
      color: ${(props) => props.theme["subtitle"]};
      font-size: 18px;
    }

    span{
      color: ${(props) => props.theme["span"]};
      font-size: 14px;
    }
  }

  input{
    height: 50px;
    border: 1px solid ${(props) => props.theme["border"]};
    border-radius: 8px;
    background: ${(props) => props.theme["input"]};
    padding: 0 16px;

    ::placeholder{
      
  }
`
