import React from 'react'

const CardTitle = ({ title } : any) => {
  return (
    <div className='card-title'>
      <h6 className='mb-0 text-ctbc'>{title}</h6>
      <hr></hr>
    </div>
  )
}

export default CardTitle