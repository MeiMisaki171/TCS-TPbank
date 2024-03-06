import React, { useState } from 'react'
import Dropdown from '../Dropdown'
// import { useOutsideClick } from '~/hook';
import { BiChevronLeft } from 'react-icons/bi';
import './menuItems.css'

const MenuItems = ({ item , depthLevel }: any) => {
    
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        setDropdown(true);
      };
    
      const onMouseLeave = () => {
        setDropdown(false);
      };
    // const handleClick = () => {
    //     if (dropdown) {
    //         setDropdown(!dropdown)
    //     }
    // }
    // const ref = useOutsideClick(handleClick);
  return (
      <li className='menuitem-wrapper'>
          {item.children ? (
              <div
                //   ref={ref}
                  className='menuitem-container'
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
              >
                  <button
                      className='menu-item'
                      type='button'
                      onClick={() => setDropdown((prev : boolean) => !prev)}
                  >
                      <div className='button-title'>{item.icon} {item.title}</div> 
                      {depthLevel > 1 ? <></> : <BiChevronLeft className='dropdown-icon' /> }
                  </button>
                  <Dropdown
                      submenu={item.children}
                      dropdown={dropdown}
                      depthLevel={depthLevel}
                  />
              </div>
            ) : (
                  <a href={item.url} className='menu-item__2'>{ item.icon }{ item.title }</a>
                )
          }
    </li>
  )
}

export default MenuItems