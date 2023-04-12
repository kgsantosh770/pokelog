import { gql } from "@apollo/client";

const GET_EVOLUTION = gql`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      name
      evolutions{
        id
        number
        name
        types
        image
      }
    }
  }
`

export default GET_EVOLUTION