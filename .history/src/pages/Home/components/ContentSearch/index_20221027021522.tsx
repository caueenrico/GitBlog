import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerInput } from "./styles";

interface SearchProps{
  getPosts: (query: string ) => Promise<void>
}

export function ContentSearch({getPosts}: SearchProps) {
  const [search, setSearch] = useState('')

  const {register, watch, handleSubmit} = useForm({
    defaultValues: {
      search: ''
    }})

   console.log(watch('search'))

  return (
    <ContainerInput>
     
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <input type="text" {...register('search') } placeholder="Buscar conteúdo"  />
     
    </ContainerInput>
  );
}