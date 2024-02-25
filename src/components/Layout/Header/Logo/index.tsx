import React from 'react'
import logo from '../../../../assets/image/logo-icon.png'
import './logo.css'

const Logo = () => {
  return (
    <div className='topbar-logo-header'>
      <div>
        <img src={logo} className='logo-icon' alt='logo icon'></img>
      </div>
      <div>
        <h4 className='logo-text'>TP Bank</h4>
      </div>
    </div>
  )
}

export default Logo