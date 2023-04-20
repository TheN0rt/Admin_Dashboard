import React, { useEffect } from 'react'
import TableUsers from '../../components/tableUsers/TableUsers'
import { useFind } from '../../customHooks/useFind'

const List = ({setUsers, users, deleteUser, searchValue, onChange}) => {
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>{
      setUsers(json)
      console.log(json)
    })
  }, [])
  
  const findedUsers = useFind(users, searchValue)

  return (
    <div>
      <TableUsers data={findedUsers} deleteUser={deleteUser} searchValue={searchValue} onChange={onChange}/>
    </div>
  )
}

export default List