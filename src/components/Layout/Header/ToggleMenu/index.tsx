import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const ToggleMenu = () => {
  const [show, setShow] = useState(true)
  return (
    <div className='mobile-toggle-menu' onClick={() => {
      setShow(!show)
    } }>
      <BiMenu style={{width: '26px', height:'26px'}} />
    </div>
  )
}

export default ToggleMenu