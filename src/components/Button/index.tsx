import React from 'react'
import './style.css'

const Button = ({ btnStyle, icon, title }: any) => {
  return (
    <button className={`button primary ${btnStyle ? btnStyle : ''}`}
    >
      {icon} <span className='button-title'>{title}</span>
    </button>
  )
}

export default Button