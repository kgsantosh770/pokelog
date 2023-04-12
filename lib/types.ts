import { ApolloError } from "@apollo/client";

export interface IPokemon {
    id: string,
    number: string,
    name: string,
    types: string[],
    image: string,
}

export interface ISinglePokemon extends IPokemon {
    weight: {
        minimum: string,
        maximum: string,
    },
    height: {
        minimum: string,
        maximum: string,
    },
    classification: string,
    types: string[],
    resistant: string[],
    weaknesses: string[],
}

export interface IPokemonEvolution {
    id: string,
    name: string,
    evolutions: IPokemon[],
}

export interface IQueryData {
    error?: ApolloError | undefined,
    loading: boolean,
}

export interface IPokemonsQueryData extends IQueryData {
    data: {pokemons: IPokemon[]} | undefined,
}

export interface ISinglePokemonQueryData extends IQueryData {
    data: {pokemon: ISinglePokemon} | undefined,
}

export interface IPokemonEvolutionQueryData extends IQueryData {
    data: {pokemon: IPokemonEvolution} | undefined,
}