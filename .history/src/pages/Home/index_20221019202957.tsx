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
              <h1>Caue Enrico</h1>
              <a href="#">github <Font icon="fa-regular fa-arrow-up-right-from-square" /> </a>
            </header>
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
}