import './Dropdown.css'
import { MenuData } from '../Menu'
import MenuItems from '../MenuItems'

const Dropdown = ({ submenu, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown-menus ${dropdownClass} ${dropdown? "show-dropdown" : ""}`}>
        {submenu.map((item:MenuData) => {
          return (
            <MenuItems item={item} key={ item.title } depthLevel={depthLevel} />
          )
        })}
    </ul>
  )
}

export default Dropdown