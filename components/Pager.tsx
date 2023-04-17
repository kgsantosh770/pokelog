// imports from packages
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface IPagerProps {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    lastPage: number | undefined,
    className?: string,
}

const Pager = (props: IPagerProps) => {

    const [displayPages, setDisplayPages] = useState<number[]>([1, 2, 3])

    // on every page changes, set the display pages accordingly
    useEffect(() => {
        const currentPage = props.currentPage
        const lastPage = props.lastPage
        let pages
        if (currentPage === 1)
            pages = [1, 2, 3]
        else if (lastPage && lastPage <= currentPage)
            pages = [currentPage - 2, currentPage - 1, currentPage]
        else
            pages = [currentPage - 1, currentPage, currentPage + 1]

        setDisplayPages(pages)
    }, [props.currentPage, props.lastPage])


    function goToPreviousPage() {
        const previousPage = props.currentPage - 1
        if (props.currentPage > 1)
            props.setCurrentPage(previousPage);
    }


    function goToNextPage() {
        const nextPage = props.currentPage + 1
        if (props.lastPage && nextPage > props.lastPage)
            return
        props.setCurrentPage(props.currentPage + 1)
    }


    function handleArrowClick(direction: 'left' | 'right') {
        if (direction === 'left')
            goToPreviousPage()
        else
            goToNextPage()
    }


    return (
        <div className={`flex justify-center items-center ${props.className}`}>
            <button onClick={() => handleArrowClick('left')} disabled={props.currentPage <= 1}>
                <KeyboardArrowLeft fontSize='large' style={{ color: props.currentPage <= 1 ? 'gray' : 'white' }} />
            </button>
            {
                (displayPages.slice(-3)).map((pageNumber) =>
                    <button
                        key={pageNumber}
                        className={`
                            ${props.currentPage === pageNumber && 'bg-gray-500'}
                            font-medium border-2 border-white w-10 h-10 text-center rounded-full mx-2
                        `}
                        onClick={() => props.setCurrentPage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                )
            }
            <button onClick={() => handleArrowClick('right')} disabled={props.lastPage !== undefined && props.lastPage <= props.currentPage}>
                <KeyboardArrowRight fontSize='large' style={{ color: props.lastPage && props.currentPage >= props.lastPage ? 'gray' : 'white' }} />
            </button>
        </div>
    )
}

export default Pager