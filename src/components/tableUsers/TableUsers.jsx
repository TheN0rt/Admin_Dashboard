import React, {useState} from 'react'
import { useTable } from '../../customHooks/useTable';
import '../table/Table.scss'
import TableFooter from '../tableFooter/TableFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const TableUsers = ({ data, deleteUser, searchValue, onChange }) => {
   let countOfElements = 10
   const [page, setPage] = useState(1);
   const { slice, range } = useTable(data, page, countOfElements);
   const navigate = useNavigate()
 
   return (
     <div className='table__wrapper'>
        <div className="table-header">
          <h3 className="title">Users</h3>
          <div className="right">
            <div className="input">
              <input type="text" className='find-user' 
                placeholder='Find user'
                value={searchValue}
                onChange={(e) => onChange(e.target.value)}/>
              <FontAwesomeIcon icon={faSearch} className='icon'/>
            </div>
            <button className='add'
              onClick={() => navigate('/users/new')}>Add new user</button>
          </div>
        </div>
       {
        data.length ?
        <table className='table'>
         <thead>
           <tr className='table-users__tr'>
             <th>Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Address</th>
             <th>Phone</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {slice.map(item => (
             <tr key={item.id}>
               <td> {item.id} </td>
               <td>{item.name}</td>
               <td>
                 {item.email}
               </td>
               <td>
                 <p>
                  Street: {item.address?.street}
                 </p>
                 <p>
                  Suite: {item.address?.suite}
                 </p>
                 <p>
                  City: {item.address?.city}
                 </p>
               </td>
               <td>
                 {item.phone}
               </td>
               <td>
                  <div className='actions'>
                    <button className='view-btn' 
                      onClick={() => navigate(`/users/${item.id}`)}>View</button>
                    <button className='delete-btn'
                      onClick={() => deleteUser(item.id)}>Delete</button>
                  </div>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
       : <p className='warning'>No users found!</p>
       }
       <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
     </div>
   )
}

export default TableUsers