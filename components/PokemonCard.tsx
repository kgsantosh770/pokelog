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
        <div className='bg-gray-100 text-black rounded-md mb-5 overflow-hidden'>
            <img src={props.image} alt={props.name} />
            <div className="p-4">
                <p className='text-gray-500 font-bold mb-2'>#{props.number}</p>
                <p className='text-lg font-medium mb-3'>{props.name}</p>
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
        </div>
    )
}

export default PokemonCard