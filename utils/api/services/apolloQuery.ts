import { IPokemonEvolutionQueryData, IPokemonsQueryData, ISinglePokemon, ISinglePokemonQueryData } from "@/lib/types"
import GET_IDS_AND_NAMES from "../queries/getIdsAndNames"
import apolloClient from "./apolloClient"
import GET_EVOLUTION from "../queries/getEvolution"
import GET_BY_ID from "../queries/getById"
import GET_BY_FIRST from "../queries/getByFirst"

export const queryIdsAndNames = async (count: number | string) => {
    const query = GET_IDS_AND_NAMES
    const variables = { first: Number(count) ?? 20 }
    const response: IPokemonsQueryData = await apolloClient.query({ query, variables })
    return response
}

export const queryEvolutions = async (id: string, name: string,) => {
    const query = GET_EVOLUTION
    const variables = { id, name }
    const response: IPokemonEvolutionQueryData = await apolloClient.query({ query, variables })
    return response
}

export const querySinglePokemon = async (id: string, name: string) => {
    const query = GET_BY_ID
    const variables = { id, name }
    const response: ISinglePokemonQueryData = await apolloClient.query({ query, variables })
    return response
}

export const queryPokemons = async (count: number | string) => {
    const query = GET_BY_FIRST
    const variables = { first: Number(count) ?? 20 }
    const response: IPokemonsQueryData = await apolloClient.query({ query, variables })
    return response
}