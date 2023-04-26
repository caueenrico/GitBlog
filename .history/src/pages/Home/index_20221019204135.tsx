import { Header, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

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
              <a href="#">github<FontAwesomeIcon icon={["fas","arrow-up-right"]} /></a>
            </header>
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
}