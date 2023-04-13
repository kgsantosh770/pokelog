import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Chip from './Chip';
import { IPokemon } from '@/lib/types';
import { Info, KeyboardArrowDown, KeyboardArrowRight, Error } from '@mui/icons-material';

interface IPopupProps {
    isPopupOpen: boolean,
    setIsPopupOpen: Dispatch<SetStateAction<boolean>>,
    evolutions: IPokemon[] | undefined,
    error: string | null,
    loading: boolean,
}

const Popup = (props: IPopupProps) => {

    useEffect(() => {
        if (props.isPopupOpen) window.document.body.style.overflow = "hidden";
        else if (window.document.body.style.overflow !== null) window.document.body.style.removeProperty('overflow');
    }, [props.isPopupOpen])

    const Pokemon = ({ pokemon }: { pokemon: IPokemon }) => {
        return (
            <div className='md:mx-7'>
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className='w-36 h-36 rounded-full mx-auto mb-2'
                />
                <span className='text-lg font-bold mr-2'>{pokemon.name}</span>
                <span className='text-lg font-medium'>#{pokemon.number}</span>
                <div className='mt-3'>
                    {
                        pokemon.types.length > 0 &&
                        pokemon.types.map((type: string, index: number) => (
                            <Chip
                                key={index}
                                chipText={type}
                                className={`
                                    ${index % 2 === 0 ? 'bg-green-700' : 'bg-purple-700'}
                                    mx-2
                                `}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div
            className={`
                fixed inset-0 bg-black bg-opacity-90 transition-opacity 
                ${props.isPopupOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
        >
            <div className="fixed inset-0 flex justify-center items-center">
                <div className="bg-gray-800 overflow-scroll px-8 py-16 rounded-lg w-[80%] md:max-w-screen-md h-fit max-h-[80%]">
                    <button
                        className="absolute top-0 right-0 md:top-5 md:right-10 m-4 text-gray-500 hover:text-gray-600"
                        onClick={() => props.setIsPopupOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-10 md:h-10 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                    <div className="text-center md:flex md:flex-wrap md:justify-center">
                        {
                            props.loading ?
                                <p className='text-lg font-medium'>Loading</p> :
                                props.error !== null ?
                                    <>
                                        <Error sx={{ mb: 2 }} fontSize='large' />
                                        <p className='text-lg font-medium'>
                                            {props.error}
                                        </p>
                                    </> :
                                    <>
                                        {props.evolutions && props.evolutions.length > 0 && <h2 className="text-3xl font-bold mb-14 md:basis-full">Evolutions</h2>}
                                        {
                                            props.evolutions && props.evolutions.length > 0 ?
                                                props.evolutions.map((pokemon, index) => (
                                                    <div key={index} className='md:flex'>
                                                        <Pokemon pokemon={pokemon} />
                                                        {
                                                            props.evolutions && index !== props.evolutions.length - 1 &&
                                                            <>
                                                                <div className="hidden md:block">
                                                                    <KeyboardArrowRight sx={{ mt: 6, fontSize: 60 }} />
                                                                </div>
                                                                <div className="md:hidden">
                                                                    <KeyboardArrowDown sx={{ my: 4, fontSize: 60 }} />
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                )) :
                                                <>
                                                    <Info sx={{ mb: 2 }} fontSize='large' />
                                                    <p className='text-lg font-medium'>
                                                        Pokemon has not evolved further.
                                                    </p>
                                                </>
                                        }
                                    </>


                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup