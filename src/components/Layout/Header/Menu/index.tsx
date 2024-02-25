import React, { useCallback, useState } from 'react'
import { IMenuData } from './Menu'
import MenuItems from './MenuItems'

const Menu = () => {
  
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {IMenuData.map((item) => {
          return (
            <MenuItems item={item} key={ item.title } />
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu