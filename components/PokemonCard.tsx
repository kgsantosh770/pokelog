import React from 'react'
import Chip from './Chip'

interface IPokemonProps {
    number: string,
    name: string,
    types: string[],
    image: string
}

const PokemonCard = (props: IPokemonProps) => {
    return (
        <button className='bg-white text-black rounded-md mb-5 overflow-hidden mx-auto group max-w-xs sm:px-1 md:px-1 lg:px-1'>
            <img src={props.image} alt={props.name} className='scale-90 group-hover:scale-100 transition-all mx-auto w-48 h-48 object-contain'/>
            <div className="px-4 pb-4">
                <p className='text-gray-500 font-bold mb-1'>#{props.number}</p>
                <p className='text-lg font-medium mb-2'>{props.name}</p>
                <div className='flex space-x-2'>
                    {
                        props.types.map((type, index) => (
                            <Chip key={index} className={`text-white ${index % 2 === 0 ? 'bg-green-700' : 'bg-purple-700'}`}>
                                <p>{type}</p>
                            </Chip>
                        ))
                    }
                </div>
            </div>
        </button>
    )
}

export default PokemonCard