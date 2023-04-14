import Chip from '@/components/Chip'
import Popup from '@/components/Popup'
import getPageTitle from '@/utils/getPageTitle'
import Head from 'next/head'
import { IPokemon, IPokemonsQueryData, ISinglePokemon, ISinglePokemonQueryData } from '@/lib/types'
import { useState } from 'react'
import { queryEvolutions, queryIdsAndNames, querySinglePokemon } from '@/utils/api/services/apolloQuery'

export const getStaticPaths = async () => {
    const count: string | undefined = process.env?.NEXT_PUBLIC_SINGLE_POKEMON_PRELOAD_COUNT
    const { data, error }: IPokemonsQueryData = await queryIdsAndNames(count)
    const pokemons = data?.pokemons

    const paths = !pokemons || error ? [] : pokemons.map((pokemon) => {
        return {
            params: { id: pokemon.id, name: pokemon.name }
        }
    })

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }: { params: { id: string, name: string } }) => {
    let props
    const { data, error }: ISinglePokemonQueryData = await querySinglePokemon(params.id, params.name)

    if (error)
        props = { error: error.message }
    else if (!data)
        props = { error: "Unexpected error occured. Please try again." }
    else if (data.pokemon === null)
        return { notFound: true }
    else
        props = { pokemon: data.pokemon }

    return {
        props
    }
}

const Details = ({ pokemon }: { pokemon: ISinglePokemon }) => {

    const subtitlesStyle = "font-medium text-xl"
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [evolutions, setEvolutions] = useState<IPokemon[] | undefined>()

    function Property({ property, propertyValue }: { property: string, propertyValue: string[] }) {
        return propertyValue.length > 0 ?
            (<div className="mt-5">
                <p className={`mb-3 capitalize ${subtitlesStyle}`}>{property} :</p>
                <div className="flex flex-wrap">
                    {
                        propertyValue.map((value: string, index: number) =>
                            <Chip
                                key={index}
                                chipText={value}
                                className={`text-white mr-3 mb-2 ${index % 2 === 0 ? 'bg-green-700' : 'bg-purple-700'}`}
                            />
                        )
                    }
                </div>
            </div>
            ) : <></>
    }

    // open popup and fetch the evolutions data
    const handleEvolutionButtonClick = async () => {
        setError(null)
        setEvolutions([])
        setLoading(true)
        setIsPopupOpen(true)
        try {
            const { data, error } = await queryEvolutions(pokemon.id, pokemon.name)
            error ? setError(error.message) : data && setEvolutions(data.pokemon.evolutions);
        } catch (error) {
            setError("Unexpected error occured")
        }
        setLoading(false)
    }

    return (
        <>
            <Head>
                <title>{getPageTitle(pokemon.name)}</title>
            </Head>
            <Popup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                evolutions={evolutions}
                error={error}
                loading={loading}
            />
            <main className="mx-10 md:mx-14 lg:mx-20 mt-10 mb-20">
                <h2 className='font-bold text-3xl text-center'>{pokemon.name}</h2>
                <h3 className='font-bold text-2xl text-center mb-5 sm:mb-10'>#{pokemon.number}</h3>
                <div className='max-w-sm mx-auto sm:flex sm:justify-center sm:max-w-screen-xl'>
                    <img src={pokemon.image} alt={pokemon.name} className='w-full rounded-md sm:w-72 sm:h-72 lg:w-96 lg:h-96' />
                    <div className="details sm:ml-16">
                        <div className="mt-5 mb-10 bg-gray-900 px-4 py-2 rounded-md sm:mt-0">
                            <div>
                                <div className="mb-5">
                                    <p className={`mb-1 ${subtitlesStyle}`}>Height:</p>
                                    <span className='mr-4'><span className='font-medium'>Min - </span> {pokemon.height.minimum}</span>
                                    <span><span className='font-medium'>Max - </span> {pokemon.height.maximum}</span>
                                </div>
                                <div className="mb-5">
                                    <p className={`mb-1 ${subtitlesStyle}`}>Weight:</p>
                                    <span className='mr-4'><span className='font-medium'>Min - </span> {pokemon.weight.minimum}</span>
                                    <span><span className='font-medium'>Max - </span> {pokemon.weight.maximum}</span>
                                </div>
                                <div className="mb-5">
                                    <p className={` mb-1 ${subtitlesStyle}`}>Classification:</p>
                                    <p>{pokemon.classification}</p>
                                </div>
                            </div>
                        </div>
                        <Property property="Types" propertyValue={pokemon.types} />
                        <Property property="Resistant" propertyValue={pokemon.resistant} />
                        <Property property="Weaknesses" propertyValue={pokemon.weaknesses} />
                        <button
                            onClick={() => handleEvolutionButtonClick()}
                            className={`mt-10 bg-gray-600 rounded-md text-white px-5 py-3 w-full ${subtitlesStyle}`}
                        >
                            Evolution
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Details