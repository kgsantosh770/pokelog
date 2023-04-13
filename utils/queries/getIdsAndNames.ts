import { gql } from "@apollo/client";

const GET_IDS_AND_NAMES = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
        id,
        name,
    }
  }
`

export default GET_IDS_AND_NAMES