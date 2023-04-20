import React from 'react'
import './Button.scss'

const Button = ({color, text, onCLick}) => {
  return (
    <button className='btn' 
      style={{color: {color}, borderColor: {color}}}
      onClick={onCLick}>{text}</button>
  )
}

export default Button