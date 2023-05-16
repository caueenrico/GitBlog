import styled from "styled-components";
import Backforund from "../assets/Cover.png";

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

  img {
    margin-top: -64px;
  }
`;

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  padding: 0 24px;
`

export const ProfileContainer = styled.div`
  min-height: 13.25rem;
  
  margin-top: -88px;
  border-radius: 8px;

  background: ${(props) => props.theme["profile"]};
  display: flex;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  .imageProfile {
    width: 148px;
    height: 148px;
    margin: 32px 40px;
    border-radius: 8px;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
  font-size: 12px;
  text-transform: uppercase;
  gap: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 12px;
    height: 12px;
  }
`;

export const PostsHomeContainer = styled.div`

  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

  }

`