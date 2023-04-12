import Pager from "@/components/Pager"
import PokemonCard from "@/components/PokemonCard"
import { useState } from "react"

export default function Home() {
  const pokemons = [
    {
      "id": "UG9rZW1vbjowMDE=",
      "number": "001",
      "name": "Bulbasaur",
      "weight": {
        "minimum": "6.04kg",
        "maximum": "7.76kg"
      },
      "height": {
        "minimum": "0.61m",
        "maximum": "0.79m"
      },
      "classification": "Seed Pokémon",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "fleeRate": 0.1,
      "maxCP": 951,
      "maxHP": 1071,
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDI=",
      "number": "002",
      "name": "Ivysaur",
      "weight": {
        "minimum": "11.38kg",
        "maximum": "14.63kg"
      },
      "height": {
        "minimum": "0.88m",
        "maximum": "1.13m"
      },
      "classification": "Seed Pokémon",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "fleeRate": 0.07,
      "maxCP": 1483,
      "maxHP": 1632,
      "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDM=",
      "number": "003",
      "name": "Venusaur",
      "weight": {
        "minimum": "87.5kg",
        "maximum": "112.5kg"
      },
      "height": {
        "minimum": "1.75m",
        "maximum": "2.25m"
      },
      "classification": "Seed Pokémon",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "fleeRate": 0.05,
      "maxCP": 2392,
      "maxHP": 2580,
      "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDQ=",
      "number": "004",
      "name": "Charmander",
      "weight": {
        "minimum": "7.44kg",
        "maximum": "9.56kg"
      },
      "height": {
        "minimum": "0.53m",
        "maximum": "0.68m"
      },
      "classification": "Lizard Pokémon",
      "types": [
        "Fire"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Ice",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "fleeRate": 0.1,
      "maxCP": 841,
      "maxHP": 955,
      "image": "https://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDU=",
      "number": "005",
      "name": "Charmeleon",
      "weight": {
        "minimum": "16.63kg",
        "maximum": "21.38kg"
      },
      "height": {
        "minimum": "0.96m",
        "maximum": "1.24m"
      },
      "classification": "Flame Pokémon",
      "types": [
        "Fire"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Ice",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "fleeRate": 0.07,
      "maxCP": 1411,
      "maxHP": 1557,
      "image": "https://img.pokemondb.net/artwork/charmeleon.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDY=",
      "number": "006",
      "name": "Charizard",
      "weight": {
        "minimum": "79.19kg",
        "maximum": "101.81kg"
      },
      "height": {
        "minimum": "1.49m",
        "maximum": "1.91m"
      },
      "classification": "Flame Pokémon",
      "types": [
        "Fire",
        "Flying"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Fighting",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Electric",
        "Rock"
      ],
      "fleeRate": 0.05,
      "maxCP": 2413,
      "maxHP": 2602,
      "image": "https://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDc=",
      "number": "007",
      "name": "Squirtle",
      "weight": {
        "minimum": "7.88kg",
        "maximum": "10.13kg"
      },
      "height": {
        "minimum": "0.44m",
        "maximum": "0.56m"
      },
      "classification": "Tiny Turtle Pokémon",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "fleeRate": 0.1,
      "maxCP": 891,
      "maxHP": 1008,
      "image": "https://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDg=",
      "number": "008",
      "name": "Wartortle",
      "weight": {
        "minimum": "19.69kg",
        "maximum": "25.31kg"
      },
      "height": {
        "minimum": "0.88m",
        "maximum": "1.13m"
      },
      "classification": "Turtle Pokémon",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "fleeRate": 0.07,
      "maxCP": 1435,
      "maxHP": 1582,
      "image": "https://img.pokemondb.net/artwork/wartortle.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDk=",
      "number": "009",
      "name": "Blastoise",
      "weight": {
        "minimum": "74.81kg",
        "maximum": "96.19kg"
      },
      "height": {
        "minimum": "1.4m",
        "maximum": "1.8m"
      },
      "classification": "Shellfish Pokémon",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "fleeRate": 0.05,
      "maxCP": 2355,
      "maxHP": 2542,
      "image": "https://img.pokemondb.net/artwork/blastoise.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTA=",
      "number": "010",
      "name": "Caterpie",
      "weight": {
        "minimum": "2.54kg",
        "maximum": "3.26kg"
      },
      "height": {
        "minimum": "0.26m",
        "maximum": "0.34m"
      },
      "classification": "Worm Pokémon",
      "types": [
        "Bug"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "fleeRate": 0.2,
      "maxCP": 367,
      "maxHP": 443,
      "image": "https://img.pokemondb.net/artwork/caterpie.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTE=",
      "number": "011",
      "name": "Metapod",
      "weight": {
        "minimum": "8.66kg",
        "maximum": "11.14kg"
      },
      "height": {
        "minimum": "0.61m",
        "maximum": "0.79m"
      },
      "classification": "Cocoon Pokémon",
      "types": [
        "Bug"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "fleeRate": 0.09,
      "maxCP": 397,
      "maxHP": 477,
      "image": "https://img.pokemondb.net/artwork/metapod.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTI=",
      "number": "012",
      "name": "Butterfree",
      "weight": {
        "minimum": "28kg",
        "maximum": "36kg"
      },
      "height": {
        "minimum": "0.96m",
        "maximum": "1.24m"
      },
      "classification": "Butterfly Pokémon",
      "types": [
        "Bug",
        "Flying"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground",
        "Bug"
      ],
      "weaknesses": [
        "Fire",
        "Electric",
        "Ice",
        "Flying",
        "Rock"
      ],
      "fleeRate": 0.06,
      "maxCP": 1315,
      "maxHP": 1454,
      "image": "https://img.pokemondb.net/artwork/butterfree.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTM=",
      "number": "013",
      "name": "Weedle",
      "weight": {
        "minimum": "2.8kg",
        "maximum": "3.6kg"
      },
      "height": {
        "minimum": "0.26m",
        "maximum": "0.34m"
      },
      "classification": "Hairy Pokémon",
      "types": [
        "Bug",
        "Poison"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Poison",
        "Bug",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Psychic",
        "Rock"
      ],
      "fleeRate": 0.2,
      "maxCP": 372,
      "maxHP": 449,
      "image": "https://img.pokemondb.net/artwork/weedle.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTQ=",
      "number": "014",
      "name": "Kakuna",
      "weight": {
        "minimum": "8.75kg",
        "maximum": "11.25kg"
      },
      "height": {
        "minimum": "0.53m",
        "maximum": "0.68m"
      },
      "classification": "Cocoon Pokémon",
      "types": [
        "Bug",
        "Poison"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Poison",
        "Bug",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Psychic",
        "Rock"
      ],
      "fleeRate": 0.09,
      "maxCP": 405,
      "maxHP": 485,
      "image": "https://img.pokemondb.net/artwork/kakuna.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTU=",
      "number": "015",
      "name": "Beedrill",
      "weight": {
        "minimum": "25.81kg",
        "maximum": "33.19kg"
      },
      "height": {
        "minimum": "0.88m",
        "maximum": "1.13m"
      },
      "classification": "Poison Bee Pokémon",
      "types": [
        "Bug",
        "Poison"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Poison",
        "Bug",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Psychic",
        "Rock"
      ],
      "fleeRate": 0.06,
      "maxCP": 1301,
      "maxHP": 1439,
      "image": "https://img.pokemondb.net/artwork/beedrill.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTY=",
      "number": "016",
      "name": "Pidgey",
      "weight": {
        "minimum": "1.57kg",
        "maximum": "2.02kg"
      },
      "height": {
        "minimum": "0.26m",
        "maximum": "0.34m"
      },
      "classification": "Tiny Bird Pokémon",
      "types": [
        "Normal",
        "Flying"
      ],
      "resistant": [
        "Grass",
        "Ground",
        "Bug",
        "Ghost"
      ],
      "weaknesses": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "fleeRate": 0.2,
      "maxCP": 585,
      "maxHP": 679,
      "image": "https://img.pokemondb.net/artwork/pidgey.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTc=",
      "number": "017",
      "name": "Pidgeotto",
      "weight": {
        "minimum": "26.25kg",
        "maximum": "33.75kg"
      },
      "height": {
        "minimum": "0.96m",
        "maximum": "1.24m"
      },
      "classification": "Bird Pokémon",
      "types": [
        "Normal",
        "Flying"
      ],
      "resistant": [
        "Grass",
        "Ground",
        "Bug",
        "Ghost"
      ],
      "weaknesses": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "fleeRate": 0.09,
      "maxCP": 1096,
      "maxHP": 1223,
      "image": "https://img.pokemondb.net/artwork/pidgeotto.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTg=",
      "number": "018",
      "name": "Pidgeot",
      "weight": {
        "minimum": "34.56kg",
        "maximum": "44.44kg"
      },
      "height": {
        "minimum": "1.31m",
        "maximum": "1.69m"
      },
      "classification": "Bird Pokémon",
      "types": [
        "Normal",
        "Flying"
      ],
      "resistant": [
        "Grass",
        "Ground",
        "Bug",
        "Ghost"
      ],
      "weaknesses": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "fleeRate": 0.06,
      "maxCP": 1923,
      "maxHP": 2091,
      "image": "https://img.pokemondb.net/artwork/pidgeot.jpg"
    },
    {
      "id": "UG9rZW1vbjowMTk=",
      "number": "019",
      "name": "Rattata",
      "weight": {
        "minimum": "3.06kg",
        "maximum": "3.94kg"
      },
      "height": {
        "minimum": "0.26m",
        "maximum": "0.34m"
      },
      "classification": "Mouse Pokémon",
      "types": [
        "Normal"
      ],
      "resistant": [
        "Ghost"
      ],
      "weaknesses": [
        "Fighting"
      ],
      "fleeRate": 0.2,
      "maxCP": 493,
      "maxHP": 581,
      "image": "https://img.pokemondb.net/artwork/rattata.jpg"
    },
    {
      "id": "UG9rZW1vbjowMjA=",
      "number": "020",
      "name": "Raticate",
      "weight": {
        "minimum": "16.19kg",
        "maximum": "20.81kg"
      },
      "height": {
        "minimum": "0.61m",
        "maximum": "0.79m"
      },
      "classification": "Mouse Pokémon",
      "types": [
        "Normal"
      ],
      "resistant": [
        "Ghost"
      ],
      "weaknesses": [
        "Fighting"
      ],
      "fleeRate": 0.07,
      "maxCP": 1304,
      "maxHP": 1444,
      "image": "https://img.pokemondb.net/artwork/raticate.jpg"
    }
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [pageEnded, setPageEnded] = useState(false)

  return (
    <main className="mx-10 md:mx-14 lg:mx-20 mt-5 mb-10">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">Pokemons</h1>
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} number={pokemon.number} name={pokemon.name} types={pokemon.types} image={pokemon.image} />
          ))
        }
      </div>
      <Pager currentPage={currentPage} pageEnded={pageEnded} setCurrentPage={setCurrentPage} className="mt-5 sm:mt-10" />
    </main>
  )
}
