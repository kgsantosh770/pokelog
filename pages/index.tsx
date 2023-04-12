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
    }
  ]

  return (
    <main className="mx-10 my-5">
      {
        pokemons.map((pokemon) => (
          <PokemonCard number={pokemon.number} name={pokemon.name} types={pokemon.types} image={pokemon.image} />
        ))
      }
    </main>
  )
}
