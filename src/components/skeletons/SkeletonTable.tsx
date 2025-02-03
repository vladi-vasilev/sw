import SkeletonTableRow from "./SkeletonTableRow"

type SkeletonTableProps = {
    numberOfCells?: number, numberOfRows?: number
}

const SkeletonTable = ({ numberOfCells = 5, numberOfRows = 10 }: SkeletonTableProps) => {
    return (
        <table>
            <thead>
                <SkeletonTableRow numberOfCells={numberOfCells} />
            </thead>
            <tbody>
                {Array(numberOfRows).fill(0)?.map((_, index) => <SkeletonTableRow key={index} numberOfCells={numberOfCells} />)}
            </tbody>
        </table>
    )
}

export default SkeletonTable