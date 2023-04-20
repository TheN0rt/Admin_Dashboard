import { useMemo } from "react"

export const useFind = (data, search) => {
    const findedData = useMemo(() => {
        return search ? [...data].filter(e => e.name.toLowerCase().includes(search.trim().toLocaleLowerCase())) : data
      }, [search, data])
    return findedData
}