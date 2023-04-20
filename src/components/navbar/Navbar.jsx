import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGlobe, faList } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faBell, faMoon } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="search">
        <input type="text" placeholder='Search...'/>
        <FontAwesomeIcon className='icon' icon={faSearch} />
      </div>
      <div className="items">
        <div className="item">
          <FontAwesomeIcon className='icon' icon={faGlobe} />
          <span className='language'>English</span>
        </div>
        <div className="item">
          <FontAwesomeIcon className='icon' icon={faMoon} />
        </div>
        <div className="item">
          <FontAwesomeIcon className='icon' icon={faBell} />
          <div className="notification">1</div>
        </div>
        <div className="item">
          <FontAwesomeIcon className='icon' icon={faMessage} />
          <div className="notification">1</div>
        </div>
        <div className="item">
          <FontAwesomeIcon className='icon' icon={faList} />
        </div>
        <div className="item">
          <img className="avatar" src="https://avatars.mds.yandex.net/i?id=0573fb3bfbf5f46539140a629f5e8f17-5583556-images-thumbs&n=13" alt="user" />
        </div>
      </div>
    </div>
  )
}

export default Navbar