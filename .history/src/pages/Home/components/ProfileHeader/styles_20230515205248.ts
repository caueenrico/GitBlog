import styled from "styled-components";

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

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -88px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px
    
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

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    text-align: center;
    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }


    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      gap: 16px;
      li {
        gap: 4px;
        font-size: 14px;
      }
    }
  }
 
`;