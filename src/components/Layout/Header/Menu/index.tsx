import React, { useCallback, useState } from 'react'
import { IMenuData } from './Menu'
import MenuItems from './MenuItems'

const Menu = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handlerDropdown = useCallback((title: string) => {
    setDropdown(title)
  }, []);

  console.log(dropdown, 2)


  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {IMenuData.map((item) => {
          return (
            <MenuItems
              title={item.title}
              icon={item.icon}
              url={item?.url || ''}
              children={item?.children}
              key={item.title}
              handlerDropdown={handlerDropdown} 
              dropdown={dropdown} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu