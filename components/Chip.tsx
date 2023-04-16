interface IChipProps {
  chipText: string,
  className?: string,
}

const Chip = (props: IChipProps) => {
  return (
    <span className={`w-fit text-center pt-1 pb-2 px-4 rounded-lg ${props.className}`}>
      {props.chipText}
    </span>
  )
}


export default Chip