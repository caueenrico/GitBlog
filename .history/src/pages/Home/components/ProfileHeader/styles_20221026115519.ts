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