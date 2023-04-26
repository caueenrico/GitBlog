import { Header, InformationProfile, LinkGit, ProfileContainer } from "./styles";
import logo from '../../pages/assets/logo.svg';
import link from '../../pages/assets/link.svg';
import github from '../../pages/assets/github.svg';
import company from '../../pages/assets/company.svg';
import fol from '../../pages/assets/github.svg';


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
              <LinkGit href="#">github <img src={link} /> </LinkGit>
            </header>

            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
              Nunc, volutpat pulvinar vel mass.
            </p>

            <ul>
            <img src={github}/> <li>caueenrico</li>
              <li>z8tecnology</li>
              <li>32 seguidores</li>
            </ul>


          </InformationProfile>


        </div>
      </ProfileContainer>
    </div>
  );
}