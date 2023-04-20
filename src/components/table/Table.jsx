import React, { useState } from 'react'
import './Table.scss'
import TableFooter from '../tableFooter/TableFooter'
import { useTable } from '../../customHooks/useTable'

const Table = ({data, title}) => {
  let countOfElements = 10
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, countOfElements);

  return (
    <div className='table__wrapper'>
      <h3 className="title">{title}</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {slice.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <img src={item.image} alt="item_img" className='product-img'/>
              </td>
              <td>
                {item.category}
              </td>
              <td>
                {item.rating.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
    </div>
  )
}

export default Table