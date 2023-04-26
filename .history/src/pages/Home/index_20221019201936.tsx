import { Header, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';

export function Home() {
  return (
    <div>
      <Header>
        <img src={logo} />
      </Header>

      <ProfileContainer>
        <div>
          <img src={'https://avatars.githubusercontent.com/u/77198706?v=4'} />

          <div>
            <header>
              h
            </header>
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
}