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
  isloaded: boolean
}

export function HeaderPostpages(  {post, isloaded}: IHeaderPostPages) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }
return (
   <Container>
      {isloaded ? (<}

   </Container>
  );
}