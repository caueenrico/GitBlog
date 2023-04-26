import { Header, InformationProfile, LinkGit, ProfileContainer } from "./styles";
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
            <div>
              <h3>Caue Enrico</h3>
              <LinkGit href="#">github <img src={link} /> </LinkGit>
            </div>


          </InformationProfile>


        </div>
      </ProfileContainer>
    </div>
  );
}