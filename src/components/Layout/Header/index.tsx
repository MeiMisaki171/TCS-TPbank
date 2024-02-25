import React from 'react'
import TenNganHang from './TenNganHang'
import Logo from './Logo'
import ToggleMenu from './ToggleMenu'
import UserBox from './UserBox'
import Menu from './Menu'

const Header = () => {
  return (
    <>
      <div className='topbar d-flex align-items-center'>
        <nav className='navbar'>
          <Logo />
          <ToggleMenu />
          <TenNganHang />  
          <UserBox />
        </nav>
      </div>
      <div className='nav-container'>
        <Menu />
      </div>
    </>
  )
}

export default Header