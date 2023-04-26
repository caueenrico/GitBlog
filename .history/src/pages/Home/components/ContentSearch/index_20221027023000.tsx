import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerInput } from "./styles";

interface SearchProps{
  getPost: (query: string ) => Promise<void>
}

export function ContentSearch({getPost}: SearchProps) {
const [search, setSearch] = useState('')

  const {register, watch, handleSubmit} = useForm({
    defaultValues: {
      query: ''
    }})

    function handleSearchForm(algo: string){
      getPost(algo.query)
    }

  return (
    <ContainerInput onSubmit={handleSubmit(handleSearchForm)}>
     
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <input type="text" {...register('query')} placeholder="Buscar conteúdo"  />
     
    </ContainerInput>
  );
}