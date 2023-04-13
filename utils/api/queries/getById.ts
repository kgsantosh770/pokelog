import { gql } from "@apollo/client";

const GET_BY_ID = gql`
    query pokemon($id: String, $name: String){
        pokemon(id: $id, name: $name){
        id
        number
        name
        weight{
            minimum
            maximum
        }
        height{
            minimum
            maximum
        }
        classification
        types
        resistant
        weaknesses
        image
        }
    }
`

export default GET_BY_ID