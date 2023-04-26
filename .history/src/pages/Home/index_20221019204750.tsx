import { Header, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';
import link from '../../pages/assets/link.svg';


export function Home() {
  return (
    <div>
      <Header>
        <img src={logo} />
      </Header>

      <ProfileContainer>
        <div>
          <img src={'https://avatars.githubusercontent.com/u/77198706?v=4'} />

          <InformationProfile>
            <header>
              <h1>Caue Enrico</h1>
              <a href="#">github <img src={link} /> </a>
            </header>
          </InformationProfile>
        </div>
      </ProfileContainer>
    </div>
  );
}