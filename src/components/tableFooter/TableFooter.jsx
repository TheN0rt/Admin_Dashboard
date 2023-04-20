import React, { useEffect } from 'react'
import './TableFooter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const TableFooter = ({range, setPage, page, slice}) => {

   useEffect(() => {
      if(slice.length < 1 && page !== 1){
         setPage(page - 1)
      }
   }, [slice, page, setPage])

   const increaseClickHandler = () => {
      setPage(page + 1)
   }

   const decreaseClickHandler = () => {
      setPage(page - 1)
   }

  return (
   <div className='table-footer'>
      <FontAwesomeIcon icon={faAngleLeft} onClick={page > 1 ? decreaseClickHandler : () => {}} className={`icon ${page === 1 ? 'innactive' : ''}`}/>
      {page}
      <FontAwesomeIcon icon={faAngleRight} onClick={page < range.length ? increaseClickHandler : () => {}} className={`icon ${page === range.length ? 'innactive' : 'icon'}`}/>
   </div>
  )
}

export default TableFooter