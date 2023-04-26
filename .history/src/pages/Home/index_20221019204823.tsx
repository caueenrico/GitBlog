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

          <div>
            <header>
              <h1>Caue Enrico</h1>
              <LinkGit href="#">github <img src={link} /> </LinkGit>
            </header>
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
}