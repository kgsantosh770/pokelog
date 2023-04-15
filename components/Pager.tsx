import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface IPagerProps {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    endPage: number | undefined,
    className?: string,
}

const Pager = (props: IPagerProps) => {

    const [allPages, setAllPages] = useState([1, 2, 3])

    function handleArrowClick(direction: 'left' | 'right') {
        if (direction === 'left' && props.currentPage > 1) {
            allPages.length > 3 && setAllPages(allPages.slice(0, allPages.length - 1))
            props.setCurrentPage(props.currentPage - 1);
        } else if (direction === 'right') {
            if (props.endPage && props.endPage < props.currentPage) {
                handleLastPage()
            } else if (props.endPage !== props.currentPage) {
                props.currentPage + 1 > allPages.length && setAllPages([...allPages, props.currentPage + 1]);
                props.setCurrentPage(props.currentPage + 1)
            }
        }
    }

    const handleLastPage = () => {
        if (props.endPage) {
            allPages[allPages.length - 1] >= props.endPage && setAllPages(allPages.slice(0, allPages.length - 1))
            props.setCurrentPage(props.endPage)
        }
    }

    const handlePageNumberClick = (pageNumber: number) => {
        if (pageNumber != props.currentPage) {
            props.endPage && props.endPage <= props.currentPage ?
                handleLastPage() :
                props.setCurrentPage(pageNumber)
        }
    }

    return (
        <div className={`flex justify-center items-center ${props.className}`}>
            <button onClick={() => handleArrowClick('left')} disabled={props.currentPage <= 1}>
                <KeyboardArrowLeft fontSize='large' style={{ color: props.currentPage <= 1 ? 'gray' : 'white' }} />
            </button>
            {
                (allPages.slice(-3)).map((pageNumber) =>
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
            <button onClick={() => handleArrowClick('right')} disabled={props.endPage !== undefined && props.endPage <= props.currentPage}>
                <KeyboardArrowRight fontSize='large' style={{ color: props.endPage ? 'gray' : 'white' }} />
            </button>
        </div>
    )
}

export default Pager