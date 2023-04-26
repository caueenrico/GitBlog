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
            <hea>
              <span>Caue Enrico</span>
              <LinkGit href="#">github <img src={link} /> </LinkGit>
            </hea>


          </InformationProfile>


        </div>
      </ProfileContainer>
    </div>
  );
}