import KeyValuePair from './KeyValuePair'
import { PersonType } from '../../hooks/useFetchStarWarsPaginatedData'

type MobileMainTable = {
    characters: PersonType[], isLoadingMore: boolean, numberOfNewRows: number
}

const MobileMainTable = ({ characters, isLoadingMore, numberOfNewRows }: MobileMainTable) => {
    const columnsArr = { name: "name", mass: "mass", height: "height", hair_color: "hair color", skin_color: "skin color" }

    return (
        <div className="mobileComponent">
            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {characters.map(character => <div
                    key={character.name}
                    style={{ border: "1px solid white", backgroundColor: "#1D1E1F", borderRadius: "12px", padding: "8px" }}
                >
                    {Object.entries(columnsArr).map(([key, value]) => <KeyValuePair
                        keyVal={value}
                        value={character[key]}
                    />
                    )}
                </div>
                )}
                {isLoadingMore && Array(numberOfNewRows).fill(0)?.map((_, index) => <div key={index} className="skeleton" style={{ width: "100%", height: "153px" }}></div>)}
            </div>
        </div>
    )
}

export default MobileMainTable