import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerInput } from "./styles";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchProps{
  postsLength: number
  getPost: (query: string ) => Promise<void>
}

export function ContentSearch({getPost, postsLength}: SearchProps) {

  const {register, handleSubmit} = useForm<SearchFormInput>({
      resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchForm(algo: SearchFormInput){
      await getPost(algo.query)
    }

  return (
    <ContainerInput onSubmit={handleSubmit(handleSearchForm)}>
     
      <div>
        <p>Publicações</p>
        <span>{} publicações</span>
      </div>

      <input type="text" {...register('query')} placeholder="Buscar conteúdo"  />
     
    </ContainerInput>
  );
}