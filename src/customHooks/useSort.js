import { useMemo } from "react"

const useSort = (data, sortMethod) => {
    const sortedData = useMemo(() => {
        return sortMethod ? [...data].filter(e => e.category === sortMethod) : data
      }, [data, sortMethod]) 
    return sortedData
}

export const useSortAndFilter = (data, sortMethod, search) => {
    const sortedData = useSort(data, sortMethod)
    const sortedAndFilteredData = useMemo(() => {
        return sortedData.filter(e => e.title.toLowerCase().includes(search.trim().toLocaleLowerCase())) 
      }, [search, sortedData])
    return sortedAndFilteredData
}