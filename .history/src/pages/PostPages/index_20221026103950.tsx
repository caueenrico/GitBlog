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
          
        </ul>
      </PostTiltleContainer>

   </Container>
  );
}