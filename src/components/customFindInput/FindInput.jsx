import React from 'react'
import './FindInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FindInput = ({placeholder, value, onChange }) => {
  return (
   <div className="input">
      <input type="text" className='find-user' 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} className='icon'/>
   </div>
  )
}

export default FindInput