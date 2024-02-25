import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import { Children, MenuData } from '../Menu'
import { useOutsideClick } from '../../../../../hook';

const MenuItems = ({ item }: any) => {
    
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => {
        if (dropdown) {
            setDropdown(!dropdown)
        }
    }
    const ref = useOutsideClick(handleClick);
  return (
      <div>
          {item.children ? (
              <div ref={ref}>
                  <button type='button'
                      onClick={() => setDropdown((prev : boolean) => !prev)}
                  >
                      {item.icon} {item.title}
                  </button>
                  <Dropdown
                      submenu={item.children}
                      dropdown = {dropdown}
                  />
              </div>
            ) : (
            <a href='/'>{ item.title }</a>
                )
          }
    </div>
  )
}

export default MenuItems