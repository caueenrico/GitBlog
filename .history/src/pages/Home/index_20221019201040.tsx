import { Header, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';

export function Home() {
  return (
    <div>
      <Header>
        <img src={logo} />
      </Header>

      <ProfileContainer>

      </ProfileContainer>
    </div>
  );
}