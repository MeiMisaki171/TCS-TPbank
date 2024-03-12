import React from 'react'
import logo from '~/assets/image/logo-icon.png'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='d-flex align-items-center'>
      <div>
        <Link to={'/home'}><img src={logo} className='logo-icon' alt='logo icon'></img></Link>
      </div>
      <div>
        <h4 className='logo-text'>TP Bank</h4>
      </div>
    </div>
  )
}

export default Logo