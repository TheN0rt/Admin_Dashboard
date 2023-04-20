import React from 'react'
import './Revenue.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

const Revenue = () => {
  return (
    <div className='revenue'>
      <div className="top">
         <h3 className='title'>Total Revenue</h3>
         <FontAwesomeIcon icon={faEllipsisVertical} className='icon'/>
      </div>
      <div className="bottom">
         <div className="progressbar">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
         </div>
         <p className='title'>Total sales made today</p>
         <p className='amount'>$420</p>
         <p className='desc'>Previous transactions processing. Last payments may not be included</p>
         <div className="targets">
            <div className="item">
               <h4 className='title'>Total day</h4>
               <div className="counter positive">
                  <FontAwesomeIcon icon={faChevronUp} className='icon'/>
                  <span className='count'>420$</span>
               </div>
            </div>
            <div className="item">
               <h4 className='title'>Total week</h4>
               <div className="counter negative">
                  <FontAwesomeIcon icon={faChevronUp} className='icon'/>
                  <span className='count'>420$</span>
               </div>
            </div>
            <div className="item">
               <h4 className='title'>Total month</h4>
               <div className="counter positive">
                  <FontAwesomeIcon icon={faChevronUp} className='icon'/>
                  <span className='count'>420$</span>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Revenue