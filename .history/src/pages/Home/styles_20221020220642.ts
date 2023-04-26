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
  }
`;

export const ProfileContainer = styled.div`
  max-width: 54rem;
  max-height: 13.25rem;
  margin: 0 auto;

  background: ${(props) => props.theme["profile"]};

  display: flex;

  img {
    width: 148px;
    height: 148px;
    margin: ;
  }

`;

export const LinkGit = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["text"]};
  font-size: 12px;
  text-transform: uppercase;
  gap: 8px;
  display: flex;

  img {
    width: 12px;
    height: 12px;
  }
`;

export const InformationProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;


  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      color: ${(props) => props.theme["title"]};
      font-family: "Nunito", sans-serif;
      font-weight: 700;
    }
  }

  p{
    font-size: 16px;
    color: ${(props) => props.theme["text"]};
  }

  ul {
    display: flex;
    list-style: none;
    gap: 24px;

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
  }

 
`;
