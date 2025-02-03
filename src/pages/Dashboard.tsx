import Button from "../components/Button/Button";
import MainTable from "../components/MainTable/MainTable";
import MobileMainTable from "../components/MobileMainTable/MobileMainTable";
import SkeletonTable from "../components/skeletons/SkeletonTable";
import useFetchStarWarsPaginatedData from "../hooks/useFetchStarWarsPaginatedData";

const Dashboard = () => {
    const { data, error, retry, loading, nextPage } = useFetchStarWarsPaginatedData("people")

    const isInitalLoad = data?.length === 0 && loading

    const tableElement = error ? <div>
        <p style={{ marginBottom: "1rem"}}>There was an error with your request.</p>
        <Button label="Retry" onClick={retry} />
    </div>
        : isInitalLoad ? <SkeletonTable /> : <div>
            <MainTable characters={data} isLoadingMore={loading} numberOfNewRows={10} />

            <MobileMainTable characters={data} isLoadingMore={loading} numberOfNewRows={10} />

            <div style={{ marginTop: "1rem" }}><Button isDisabled={isInitalLoad || loading} onClick={nextPage} label="Load more" /></div>

        </div>


    return (
        <div>
            <h2 style={{ marginBottom: "2rem" }}>Star Wars Character Info Dashboard</h2>

            {tableElement}

        </div>
    );
};

export default Dashboard;
