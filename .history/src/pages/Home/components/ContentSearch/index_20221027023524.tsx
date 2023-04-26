import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerInput } from "./styles";
import * as z from "zod"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchProps{
  getPost: (query: string ) => Promise<void>
}

export function ContentSearch({getPost}: SearchProps) {

  const {register, handleSubmit} = useForm<SearchFormInput>({
      resolver
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