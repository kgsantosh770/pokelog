// imports from packages
import { Dispatch, SetStateAction, useEffect } from 'react'
import { IPokemon } from '@/lib/types';
import { Info, KeyboardArrowDown, KeyboardArrowRight, Error } from '@mui/icons-material';

// imports from app
import Chip from './Chip';

interface IPopupProps {
    isPopupOpen: boolean,
    setIsPopupOpen: Dispatch<SetStateAction<boolean>>,
    evolutions: IPokemon[] | undefined,
    error: string | null,
    loading: boolean,
}

const Popup = (props: IPopupProps) => {

    // when the popup is open, stop background scroll
    useEffect(() => {
        if (props.isPopupOpen) 
            window.document.body.style.overflow = "hidden";
        else if (window.document.body.style.overflow !== null) 
            window.document.body.style.removeProperty('overflow');
    }, [props.isPopupOpen])


    // Every single pokemon box inside popup
    const Pokemon = ({ pokemon }: { pokemon: IPokemon }) => {
        return (
            <div className='md:mx-7'>
                <div className='mx-auto bg-white w-36 h-36 rounded-full mb-2 overflow-hidden'>
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className='mx-auto object-contain max-w-[9rem] max-h-[9rem] scale-75'
                    />
                </div>
                <span className='text-lg font-bold mr-2'>{pokemon.name}</span>
                <span className='text-lg font-medium'>#{pokemon.number}</span>
                <div className='mt-3 mx-auto'>
                    {
                        pokemon.types.length > 0 &&
                        pokemon.types.map((type: string, index: number) => (
                            <Chip
                                key={index}
                                chipText={type}
                                className={`
                                    ${index % 2 === 0 ? 'bg-green-700' : 'bg-purple-700'}
                                    mx-2 inline-block
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
                <div className="bg-gray-800 overflow-scroll px-8 py-10 md:py-6 rounded-lg w-[80%] md:max-w-screen-sm md:w-fit h-fit max-h-[80%] md:overflow-auto">
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
                                <div role="status">
                                    <svg aria-hidden="true" className="w-14 h-14 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div> :
                                props.error !== null ?
                                    <>
                                        <Error sx={{ mb: 2 }} fontSize='large' />
                                        <p className='text-lg font-medium'>
                                            {props.error}
                                        </p>
                                    </> :
                                    <>
                                        {props.evolutions && props.evolutions.length > 0 && <h2 className="text-2xl font-bold mb-8 md:mb-5 md:basis-full">Evolutions</h2>}
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
                                                    <div className='md:basis-full mb-2'>
                                                        <Info fontSize='large' />
                                                    </div>
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