import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import avatar from  '../../assets/img/i.webp' 
import './Single.scss'
import Table from '../../components/table/Table'

const Single = () => {
  const { userId } = useParams()
  const [user, setUser] = useState({})
  const [userOrders, setUserOrders] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setUser(json)
    })
  }, [userId])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>{
            setUserOrders(json)
            console.log(json)
          })
 }, [])

  return (
    <div className='single-wrapper'>
      <div className='user-single'>
        <div className="title">UserInfo</div>
        <div className="container">
          <div className="left">
            <img src={user?.image ? user.image : avatar} alt="avatar" />
          </div>
          <div className="right">
            <h2>{user.name}</h2>
            <div className="item">
              <h3>Address</h3>
              <p>
                <span>Street:</span> 
                <span>{user.address?.street}</span></p>
              <p>
                <span>Suite:</span>
                <span>{user.address?.suite}</span></p>
              <p>
                <span>City:</span>
                <span>{user.address?.city}</span>
              </p>
            </div>
            <div className="item">
              <h3>Contacts</h3>
              <p><span>Email:</span>{user?.email}</p>
              <p><span>Phone:</span>{user?.phone}</p>
            </div>
            <div className="item">
              <h3>Company</h3>
              <p><span>Company name:</span>{user?.company?.name}</p>
              <p><span>CatchPhrase:</span>{user?.company?.catchPhrase}</p>
              <p><span>BS:</span>{user?.company?.bs}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="orders">
        <Table data={userOrders} title={'Orders'}/>
      </div>
    </div>
  )
}

export default Single