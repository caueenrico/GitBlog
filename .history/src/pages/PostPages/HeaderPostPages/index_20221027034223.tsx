import { faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo, CaretLeft } from "phosphor-react";
import { Container, PostTiltleContainer } from "./styles";
import link from '../../assets/link.svg';
import {useNavigate} from 'react-router-dom'
import { ExternalLink } from "../../Home/styles";
import { Iposts } from "../../Home";

interface IHeaderPostPages{
  post: Iposts
}

export function HeaderPostpages(  {post}: IHeaderPostPages) {
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

        <h1> {post.title} </h1>
        <ul>
          <li>
            <GithubLogo size={20}/>
            {post.user.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            {post.created_at}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
             {post} comentários
          </li>
        </ul>
      </PostTiltleContainer>

   </Container>
  );
}