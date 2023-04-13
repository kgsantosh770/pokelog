import { gql } from "@apollo/client";

const GET_BY_FIRST = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`

export default GET_BY_FIRST