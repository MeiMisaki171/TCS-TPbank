import React, { useCallback, useState } from 'react'
import './Dropdown.css'
import { MenuData } from '../Menu'
import MenuItems from '../MenuItems'

const Dropdown = ({ submenu, dropdown }: any) => {
    
  return (
    <ul className={`dropdown ${dropdown? "show" : ""}`}>
        {submenu.map((item:MenuData) => {
          return (
            <MenuItems item={item} key={ item.title } />
          )
        })}
    </ul>
  )
}

export default Dropdown