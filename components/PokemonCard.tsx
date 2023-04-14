import React from 'react'
import Chip from './Chip'
import Link from 'next/link'
import { IPokemon } from '@/lib/types'

const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => {
    return (
        <Link href={`detail/${pokemon.id}`} className='block bg-white text-black rounded-md mb-5 overflow-hidden mx-auto group w-full max-w-xs sm:px-1'>
            <img src={pokemon.image} alt={pokemon.name} className='scale-90 group-hover:scale-100 transition-all mx-auto w-48 h-48 object-contain' />
            <div className="px-5 pb-4 sm:px-3">
                <p className='text-gray-500 font-bold mb-1'>#{pokemon.number}</p>
                <p className='text-lg font-medium mb-2'>{pokemon.name}</p>
                <div className='flex space-x-1 justify-start'>
                    {
                        pokemon.types.map((type, index) => (
                            <Chip
                                key={index}
                                chipText={type}
                                className={`text-white ${index % 2 === 0 ? 'bg-green-700' : 'bg-purple-700'}`}
                            />
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}

export const PokemonCardSkeleton = () => {
    return (
        <div className='bg-gray-800 rounded-md mb-5 mx-auto w-full max-w-xs'>
            <div className='animate-skimmer w-full h-40 mb-6' />
            <div className="px-5 pb-4 sm:px-3">
                <p className='animate-skimmer mb-2 h-3.5 w-[40%] rounded-sm'></p>
                <p className='animate-skimmer mb-3 h-3.5 w-[80%] rounded-sm'></p>
                <div className='flex space-x-2 justify-start'>
                    <span className='animate-skimmer w-[4rem] pt-1 pb-2 px-4 rounded-lg h-8'></span>
                    <span className='animate-skimmer w-[4rem] pt-1 pb-2 px-4 rounded-lg h-8'></span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard