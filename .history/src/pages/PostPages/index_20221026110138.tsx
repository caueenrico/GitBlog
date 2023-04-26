import { faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo } from "phosphor-react";
import { ExternalLink } from "../Home/styles";
import { Container, PostTiltleContainer } from "./styles";


export function PostPages() {
  return (
   <Container>
      <PostTiltleContainer>
        <header>
          <ExternalLink href="#" >
            Voltar
          </ExternalLink>

          <ExternalLink href="#" target='_blank'>
            gitHub
          </ExternalLink>
        </header>

        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <GithubLogo />
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
          </li>
        </ul>
      </PostTiltleContainer>

   </Container>
  );
}