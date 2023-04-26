import { ContainerInput } from "./styles";

interface ContentSearchProps {
  

export function ContentSearch() {
  return (
    <ContainerInput>
     
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
     
    </ContainerInput>
  );
}