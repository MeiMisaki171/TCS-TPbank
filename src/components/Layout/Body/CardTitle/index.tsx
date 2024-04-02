import React from 'react'
import './style.css'

const CardTitle = ({ title }: any) => {
  return (
    <div className='card-title'>
      <h6 className='mb-0 text-ctbc'>{title}</h6>
    </div>
  )
}

export default CardTitle