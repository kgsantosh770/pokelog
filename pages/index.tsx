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

  // slice the pokemon array based on the pageNumber
  const slicePerPage = (array: IPokemon[], pageNumber: number, count: number) => {
    return array.slice((pageNumber - 1) * count, pageNumber * count);
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [endPage, setEndPage] = useState<number | undefined>(undefined)
  const [allPokemons, setAllPokemons] = useState(pokemons)
  const [loading, setLoading] = useState(false)
  const [pokemonsToShow, setPokemonsToShow] = useState(slicePerPage(allPokemons, currentPage, 20))

  useEffect(() => {
    // on every page change scroll the window to top
    window.scrollY !== 0 && window.scrollTo(0, 0);

    // fetch the pokemons and update the states
    const fetchPokemons = async () => {
      const query = GET_BY_FIRST
      const variables = { first: currentPage * 20 }
      const { data }: IPokemonsQueryData = await apolloClient.query({ query, variables })
      if (data?.pokemons) {
        setAllPokemons(data.pokemons);
        setPokemonsToShow(slicePerPage(data.pokemons, currentPage, 20))
      }
    }

    // check for pokemons availablity of the current page and fetch if no data found
    const slicedPokemons = slicePerPage(allPokemons, currentPage, 20);
    if (slicedPokemons.length === 0) {
      setLoading(true)
      fetchPokemons();
    } else {
      setPokemonsToShow(slicedPokemons);
    }
  }, [currentPage])

  // when there is no more data limit the page count
  useEffect(() => {
    setLoading(false);
    pokemonsToShow.length === 0 && setEndPage(currentPage - 1);
  }, [pokemonsToShow])

  const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>
      <main className="mx-10 md:mx-14 lg:mx-20 mt-5 mb-10">
        <h1 className="text-3xl font-bold text-white mb-10 text-center">Pokemons</h1>
        <div className="sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 2xl:grid-cols-5">
          {
            loading ?
              <>
                {
                  d.map((value) => <PokemonCardSkeleton key={value} />)
                }
              </> :
              endPage && endPage < currentPage ?
                <p className="text-center">No results found</p> :
                <>
                  {
                    pokemonsToShow.map((pokemon) => (
                      <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                  }
                </>
          }
        </div>
        <Pager currentPage={currentPage} endPage={endPage} setCurrentPage={setCurrentPage} className="mt-10" />
      </main>
    </>
  )
}

export default Home