import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface IPagerProps {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    lastPage: number | undefined,
    className?: string,
}

const Pager = (props: IPagerProps) => {

    const [displayPages, setDisplayPages] = useState([1, 2, 3])
    const removeLastPage = () => displayPages.slice(0, displayPages.length - 1)

    const handleLastPage = (): number | void => {
        const lastDisplayedPage = displayPages[displayPages.length - 1]
        if (props.lastPage && props.lastPage < props.currentPage && lastDisplayedPage >= props.lastPage) {
            setDisplayPages(removeLastPage)
            return props.currentPage - 1
        }
    }

    const goToPreviousPage = () => {
        if (props.currentPage > 1) {
            displayPages.length > 3 && setDisplayPages(removeLastPage)
            props.setCurrentPage(props.currentPage - 1);
        }
    }

    const goToNextPage = () => {
        const goToPage = handleLastPage()
        if (goToPage)
            props.setCurrentPage(goToPage)
        else {
            if (props.currentPage + 1 > displayPages.length)
                setDisplayPages([...displayPages, props.currentPage + 1])
            props.setCurrentPage(props.currentPage + 1)
        }
    }

    const handleArrowClick = (direction: 'left' | 'right') => {
        if (direction === 'left')
            goToPreviousPage()
        else
            goToNextPage()
    }

    const handlePageNumberClick = (clickedPage: number) => {
        handleLastPage()
        props.setCurrentPage(clickedPage)
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
                        onClick={() => handlePageNumberClick(pageNumber)}
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