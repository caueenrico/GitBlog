import { faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo, CaretLeft } from "phosphor-react";
import { Container, PostTiltleContainer } from "./styles";
import link from '../';
import {useNavigate} from 'react-router-dom'
import { ExternalLink } from "../../Home/styles";



export function HeaderPostpages() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }
return (
   <Container>
      <PostTiltleContainer>
        <header>
          <ExternalLink onClick={goBack} >
           <CaretLeft size={18}/>Voltar
          </ExternalLink>

          <ExternalLink href="#" target='_blank'>
            Ver no gitHub <img src={link} />
          </ExternalLink>
        </header>

        <h1>  </h1>
        <ul>
          <li>
            <GithubLogo size={20}/>
            caueenrico
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
             5 comentários
          </li>
        </ul>
      </PostTiltleContainer>

   </Container>
  );
}