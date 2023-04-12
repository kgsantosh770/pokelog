import PokemonCard from "@/components/PokemonCard"

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
    }
  ]

  return (
    <main className="mx-10 md:mx-14 lg:mx-20 my-5">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">Pokemons</h1>
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {
          pokemons.map((pokemon) => (
            <PokemonCard number={pokemon.number} name={pokemon.name} types={pokemon.types} image={pokemon.image} />
          ))
        }
      </div>
    </main>
  )
}
