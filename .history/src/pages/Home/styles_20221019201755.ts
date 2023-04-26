import styled from "styled-components";
import Backforund from "../assets/Cover.png"

export const Header = styled.header`
  width: 100%;
  
  height: 296px;
  background-image: url(${Backforund});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    
  }

`

export const ProfileContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  background: ${props => props.theme['profile']};

  display: flex;

  im

`