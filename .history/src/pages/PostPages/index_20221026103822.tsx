import { ExternalLink } from "../Home/styles";
import { Container, PostTiltleContainer } from "./styles";


export function PostPages() {
  return (
   <Container>
      <PostTiltleContainer>
        <header>
          <ExternalLink>
            Voltar
          </ExternalLink>

          <ExternalLink >
            gitHub
          </ExternalLink>
        </header>
      </PostTiltleContainer>

   </Container>
  );
}