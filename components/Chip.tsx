import React from 'react'

interface IChipProps {
  children: React.ReactElement,
  className?: string,
}

const Chip = (props: IChipProps) => {
  return (
    <div className={`w-full text-center pb-1 ${props.className} w-fit rounded-lg`}>
      {props.children}
    </div>
  )
}


export default Chip