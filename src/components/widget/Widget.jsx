import React from 'react'
import './Widget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faUser, faShoppingCart, faDollar, faCoins } from '@fortawesome/free-solid-svg-icons'

const Widget = ({type, amount, percentOfItem}) => {
  let data;

  switch(type){
    case 'user':
      data = {
        title: 'users',
        isMoney: false,
        link: 'See all users',
        icon: faUser,
        iconStyle: 'user',
      }
      break;
    case 'orders':
      data = {
        title: 'orders',
        isMoney: false,
        link: 'See all orders',
        icon: faShoppingCart,
        iconStyle: 'orders',
      }
      break;
    case 'earnings':
      data = {
        title: 'earnings',
        isMoney: true,
        link: 'See all earnings',
        icon: faDollar,
        iconStyle: 'earnings',
      }
      break;
    case 'balance':
      data = {
        title: 'balance',
        isMoney: true,
        link: 'See all balance',
        icon: faCoins,
        iconStyle: 'balance',
      }
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <h3 className='title'>{data.title}</h3>
        <p className="counter">{amount}{data.isMoney && "$"}</p>
        <p className='see'>{data.link}</p>
      </div>
      <div className="right">
        <div className={`percent ${percentOfItem >= 0 ? 'positive' : 'negative'}`}>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
          <span className='count'>{percentOfItem} %</span>
        </div>
          <FontAwesomeIcon icon={data.icon} className={`icon ${data.iconStyle}`}/>
      </div>
    </div>
  )
}

export default Widget