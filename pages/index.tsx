import Pager from "@/components/Pager"
import PokemonCard, { PokemonCardSkeleton } from "@/components/PokemonCard"
import GET_BY_FIRST from "@/utils/api/queries/getByFirst"
import apolloClient from "@/utils/api/services/apolloClient"
import { useEffect, useState } from "react"
import { IPokemon, IPokemonsQueryData } from "@/lib/types"
import Head from "next/head"
import getPageTitle from "@/utils/getPageTitle"

// pre load first set of pokemons in the build time
export const getStaticProps = async () => {
  const count: string | undefined = process.env?.NEXT_PUBLIC_POKEMONS_PRELOAD_COUNT
  const query = GET_BY_FIRST
  const variables = { first: Number(count) ?? 20 }
  const { data }: IPokemonsQueryData = await apolloClient.query({ query, variables })
  const pokemons = data?.pokemons

  return {
    props: {
      pokemons: pokemons
    }
  }
}


const Home = ({ pokemons }: { pokemons: IPokemon[] }) => {

  const POKEMONS_PER_PAGE = process?.env?.NEXT_PUBLIC_POKEMONS_PER_PAGE ?? '20'
  let pokemonsPerPage = Number(POKEMONS_PER_PAGE)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState<number | undefined>(undefined)
  const [allPokemons, setAllPokemons] = useState(pokemons)
  const [loading, setLoading] = useState(false)
  const [pokemonsToShow, setPokemonsToShow] = useState(slicePerPage(allPokemons, currentPage, 20))

  // slice the pokemon array based on the pageNumber
  function slicePerPage(array: IPokemon[], pageNumber: number, count: number) {
    return array.slice((pageNumber - 1) * count, pageNumber * count);
  }

  useEffect(() => {
    // on every page change scroll the window to top
    window.scrollY !== 0 && window.scrollTo(0, 0);

    // when there is no more data to show update the last page
    function updateLastPage(pokemonsInpage: number) {
      if (pokemonsInpage === 0)
        setLastPage(currentPage - 1)
      else if (pokemonsInpage < pokemonsPerPage)
        setLastPage(currentPage)
    }

    // fetch the pokemons and update the states
    async function fetchPokemons() {
      const query = GET_BY_FIRST
      const variables = { first: currentPage * 20 }
      const { data }: IPokemonsQueryData = await apolloClient.query({ query, variables })
      if (data?.pokemons) {
        setAllPokemons(data.pokemons)
        const pokemonsList = slicePerPage(data.pokemons, currentPage, pokemonsPerPage)
        setPokemonsToShow(pokemonsList)
        updateLastPage(pokemonsList.length)
      }
    }

    // check for pokemons availablity of the current page and fetch if no data found
    const slicedPokemons = slicePerPage(allPokemons, currentPage, pokemonsPerPage);
    setLoading(true)
    if (slicedPokemons.length === 0) {
      fetchPokemons()
    } else {
      setPokemonsToShow(slicedPokemons)
      updateLastPage(slicedPokemons.length)
    }
    setLoading(false);
  }, [currentPage, allPokemons])

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>
      <main className="mx-10 md:mx-14 lg:mx-20 mt-5 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 text-center">Pokemon Catalogs</h1>
        {
          lastPage && lastPage < currentPage ?
            <p className="text-center">No results found</p> :
            <div className="sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 2xl:grid-cols-5">
              {
                loading ?
                  <>
                    {
                      Array.from(Array(20).keys()).map((value) => <PokemonCardSkeleton key={value} />)
                    }
                  </> :
                  <>
                    {
                      pokemonsToShow.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                      ))
                    }
                  </>
              }
            </div>
        }

        <Pager currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage} className="mt-10" />
      </main>
    </>
  )
}

export default Home