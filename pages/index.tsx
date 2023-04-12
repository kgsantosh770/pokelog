import Pager from "@/components/Pager"
import PokemonCard from "@/components/PokemonCard"
import { useState } from "react"
import { useQuery } from '@apollo/client'
import GET_BY_FIRST from "@/utils/queries/getByFirst"
import { IPokemonsQueryData } from "@/lib/types"

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1)
  const [pageEnded, setPageEnded] = useState(false)
  const { data, error, loading }: IPokemonsQueryData = useQuery(GET_BY_FIRST, {
    variables: { "first": 20 },
  })

  if (loading || !data) return <p>Loading....</p>

  return (
    <main className="mx-10 md:mx-14 lg:mx-20 mt-5 mb-10">
      {
        error ?
          error.message :
          <>
            <h1 className="text-3xl font-bold text-white mb-10 text-center">Pokemons</h1>
            <div className="sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
              {
                data.pokemons.map((pokemon) => (
                  <PokemonCard key={pokemon.id} number={pokemon.number} name={pokemon.name} types={pokemon.types} image={pokemon.image} />
                ))
              }
            </div>
            <Pager currentPage={currentPage} pageEnded={pageEnded} setCurrentPage={setCurrentPage} className="mt-5 sm:mt-10" />
          </>
      }
    </main>
  )
}
