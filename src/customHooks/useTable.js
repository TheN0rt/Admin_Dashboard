import { useState, useEffect } from "react"

const calculateRange = (data, countOfElements) => {
   const range = []
   const num = Math.ceil(data.length / countOfElements) // !!!
   // let i = 1;
   for(let i=1; i<=num; i++){
     range.push(i)
   }

   return range
  }

  const sliceData = (data, page, countOfElements) => {
    return data.slice((page - 1) * countOfElements, page * countOfElements)
  }

  export const useTable = (data, page, countOfElements) => {
   const [tableRange, setTableRange] = useState([])
   const [slice, setSlice] = useState([])

   useEffect(() => {
     const range = calculateRange(data, countOfElements)
     setTableRange([...range])
     const slice = sliceData(data, page, countOfElements)
     setSlice([...slice])
   }, [data, setTableRange, page, setSlice])

   return { slice, range: tableRange };
  }