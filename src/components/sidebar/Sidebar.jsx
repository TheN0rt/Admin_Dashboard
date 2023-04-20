import React from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTable, faBox, faCartShopping, faUser, faTruck, faChartLine, faBell, faNotesMedical, faUserGear, faGear, faIdCard, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'
import List from '../../pages/list/List'
import Home from '../../pages/home/Home'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminDash</span>
      </div>
        <hr />
      <div className="center">
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <NavLink to='/'>
              <FontAwesomeIcon className='icon' icon={faTable} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <NavLink to='/users'>
              <FontAwesomeIcon className='icon' icon={faUser} />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
            <FontAwesomeIcon className='icon' icon={faBox} />
            <span>Products</span>
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faCartShopping} />
            <span>Orders</span>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faTruck} />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <FontAwesomeIcon className='icon' icon={faChartLine} />
            <span>Stats</span>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faBell} />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <FontAwesomeIcon className='icon' icon={faNotesMedical} />
            <span>System Health</span>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faUserGear} />
            <span>Logs</span>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faGear} />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <FontAwesomeIcon className='icon' icon={faIdCard} />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <h4>Color theme</h4>
        <div className='color-theme'>
          <div className='theme'></div>
          <div className='theme'></div>
          <div className='theme'></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar