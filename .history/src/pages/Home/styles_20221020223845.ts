import styled from "styled-components";
import Backforund from "../assets/Cover.png";


export const HomeContainer = styled.div`


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

export const ProfileContainer = styled.div`
  max-width: 54rem;
  min-height: 13.25rem;
  margin: 0 auto;
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

export const LinkGit = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
  font-size: 12px;
  text-transform: uppercase;
  gap: 8px;
  display: flex;
  align-items: center;

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
  margin-right: 32px;


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
    line-height: 160%;
    margin-top: 8px;
  }

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
  }

 
`;
