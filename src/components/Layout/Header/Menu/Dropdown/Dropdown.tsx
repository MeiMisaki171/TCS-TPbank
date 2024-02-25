import React, { useCallback, useState } from 'react'
import './Dropdown.css'
import MenuItems from '../MenuItems'
import { MenuData } from '../Menu'

const Dropdown = ({ children, show }: any) => {
    const [dropdown, setDropdown] = useState<string | null>(null);

    const handlerDropdown = useCallback((title: string) => {
      setDropdown(title)
    }, []);
    return (
    <ul className={`dropdown ${show? "show" : ""}`}>
        {children.map((submenu : MenuData, index : any) => (
            <MenuItems
                icon={submenu.icon}
                title={submenu.title}
                url={submenu?.url || ''}
                key={submenu.title}
                handlerDropdown={handlerDropdown}
                children={submenu?.children}
                dropdown={dropdown}
            />
        ))}
    </ul>
  )
}

export default Dropdown