import { faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo, CaretLeft } from "phosphor-react";
import { Container, PostTiltleContainer } from "./styles";
import link from '../../assets/link.svg';
import {useNavigate} from 'react-router-dom'
import { ExternalLink } from "../../Home/styles";
import { Iposts } from "../../Home";
import { Spinner } from "../../../components";
import { relativeDateFormatter } from "../../../utils/formatter";

interface IHeaderPostPages{
  post: Iposts
  isloaded: boolean
}

export function HeaderPostpages(  {post, isloaded}: IHeaderPostPages) {
  const navigate = useNavigate();
  const formatDate = relativeDateFormatter(post.created_at)

  function goBack() {
    navigate(-1)
  }

return (
   <Container>
      {isloaded ? (<Spinner />) : (
        <>
        <PostTiltleContainer>
        <header>
          <ExternalLink onClick={goBack} >
           <CaretLeft size={18}/>Voltar
          </ExternalLink>

          <ExternalLink href={`https://github.com/caueenrico/GitBlog/issues/${post}`} target='_blank'>
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
            {formatDate}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
             {post.comments} comentários
          </li>
        </ul>
      </PostTiltleContainer>
        </>
      )}

   </Container>
  );
}