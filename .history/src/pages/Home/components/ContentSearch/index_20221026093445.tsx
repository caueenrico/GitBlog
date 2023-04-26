import { useState } from "react";
import { ContainerInput } from "./styles";

export function ContentSearch() {
  const [search, setSearch] = useState('')
  const [register, watch] = useForm({
    defaultValues: {
      search: ''
    }

  

  return (
    <ContainerInput>
     
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo"  />
     
    </ContainerInput>
  );
}