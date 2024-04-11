import { IMenuData } from './Menu'
import MenuItems from './MenuItems'
import './menu.css'

const Menu = () => {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {IMenuData.map((item) => {
          return (
            <MenuItems item={item} key={item.title} depthLevel={depthLevel} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu