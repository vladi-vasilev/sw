import { useState, useEffect, useCallback } from "react";

type PeopleType = {
    count: number,
    next: string,
    previous: string,
    results: PersonType[]
}

export type PersonType = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

const useFetchStarWarsPaginatedData = (endpoint: string, page: number = 1) => {
    const [data, setData] = useState<PersonType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(page);

    const getCache = (key: string) => {
        const cache = localStorage.getItem(key)

        if (cache === null) return null

        const currentDate = new Date();
        const data = JSON.parse(cache)
        const currentDate2 = new Date(data.validUntil);

        if (currentDate2 > currentDate) {
            return data
        } else {
            localStorage.removeItem(key)
            return null
        }

    }


    const saveCache = (key: string, value: PersonType[]) => {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 24);

        const cacheValue = { results: value, validUntil: currentDate }

        return localStorage.setItem(key, JSON.stringify(cacheValue))
    }

    const fetchData = useCallback(async () => {
        const hasCache = getCache(`page_${currentPage}`)

        if (hasCache !== null) {
            setData(prev => prev !== null ? [...prev, ...hasCache.results] : hasCache?.results);
            return
        }


        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://swapi.py4e.com/api/${endpoint}/?page=${currentPage}`);
            const result: PeopleType = await response.json();

            saveCache(`page_${currentPage}`, result.results)
            setData(prev => prev !== null ? [...prev, ...result.results] : result?.results);
        } catch (err) {
            if (err instanceof Error && err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }

    }, [endpoint, currentPage]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
    const goToPage = (page: number) => setCurrentPage(page);

    return { data, error, loading, currentPage, nextPage, prevPage, goToPage, retry: fetchData };
};

export default useFetchStarWarsPaginatedData;