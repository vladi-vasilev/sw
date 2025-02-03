import { PersonType } from "../../hooks/useFetchStarWarsPaginatedData"
import SkeletonTableRow from "../skeletons/SkeletonTableRow"

type MainTableProps = {
    characters: PersonType[], isLoadingMore: boolean, numberOfNewRows: number
}

const MainTable = ({ characters, isLoadingMore, numberOfNewRows }: MainTableProps) => {
    const columnsArr = { name: "name", mass: "mass", height: "height", hair_color: "hair color", skin_color: "skin color" }

    return (
        <div className="desktopComponent" style={{
            backgroundColor: "#1D1E1F",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid white",
        }}>
            <table style={{
                borderCollapse: "collapse"
            }}>
                <thead style={{ textTransform: "capitalize", textAlign: "left" }}>
                    <tr style={{ borderBottom: "1px solid white" }}>
                        {Object.values(columnsArr).map(value => <th key={value} style={{ padding: "8px 12px" }}>{value}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {characters?.map((character, index) => <tr key={character.name + index}>
                        {Object.keys(columnsArr).map(key => <td key={key} style={{ padding: "8px 12px" }}>{character[key]}</td>)}
                    </tr>)}

                    {isLoadingMore && Array(numberOfNewRows).fill(0)?.map((_, index) => <SkeletonTableRow key={index} numberOfCells={Object.keys(columnsArr).length} />)}
                </tbody>
            </table>
        </div>
    )
}

export default MainTable