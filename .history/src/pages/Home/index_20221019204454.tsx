import { Header, ProfileContainer } from "./styles";
import { , } from '../../pages/assets/logo.svg';


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
              <a href="#">github <img src={} /> </a>
            </header>
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
}