import React from 'react'
import TenNganHang from './TenNganHang'
import ToggleMenu from './ToggleMenu'
import UserBox from './UserBox'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='wrapper'>
      <div className='topbar d-flex align-items-center'>
        <nav className='navbar'>
          <ToggleMenu />
          <TenNganHang />  
          <UserBox />
        </nav>
      </div>
      <div className='nav-container'>
        <Menu />
      </div>
    </div>
  )
}

export default Header