type SkeletonTableRowProps = {
    numberOfCells?: number
}
const SkeletonTableRow = ({ numberOfCells = 5 }: SkeletonTableRowProps) => {
    return (
        <tr>
            {Array(numberOfCells).fill(0).map((_, index) => <td key={index} style={{padding: "4px", width: "80px", }}><div className="skeleton"/></td>)}
        </tr>
    )
}

export default SkeletonTableRow