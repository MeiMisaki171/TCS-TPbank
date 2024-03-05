import  { useState } from 'react'
import { BiArrowToLeft, BiMenu } from 'react-icons/bi'
import Logo from '../Logo';
import './togglemenu.css'
import Menu from '../Menu';

const ToggleMenu = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={`topbar-logo-header ${show? 'show-logo' : 'hide'}`}>
        <Logo/>
        <div
          className='toggle-icon'
          onClick={() => {
            setShow(false);
          }}
        >
          <BiArrowToLeft />
        </div>

        <div className={`nav-container ${show? 'show-logo' : 'hide'}`}><Menu /></div>
      </div>
      <div className='mobile-toggle-menu' onClick={() => {
        setShow(true)
      } }>
        <BiMenu style={{width: '26px', height:'26px'}} />
      </div>
    </>
  )
}

export default ToggleMenu