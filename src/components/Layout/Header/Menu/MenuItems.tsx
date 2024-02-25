import React, { useCallback, useMemo } from 'react'
import Dropdown from './Dropdown/Dropdown'
import { Children } from './Menu';

interface Props {
    title: string;
    url: string;
    icon: JSX.Element;
    children?: Children[];
    handlerDropdown: (title: string) => void;
    dropdown?: string | null;
}

const MenuItems = ( {title, url, icon, children, handlerDropdown, dropdown} : Props) => {
    // const [dropdown, setDropdown] = useState(false);
    // const handlerDropdown = useCallback((dropdown: boolean) => {
    //     setDropdown(!dropdown)
    // }, [])
    
    // const ref = useOutsideClick(() => {
    //     handlerDropdown(dropdown)
    // })
    console.log(dropdown)
    const showMenuChildren = useMemo(() => {
        return title === dropdown
    }, [dropdown, title]);

    const handlerClick = useCallback(() => {
        handlerDropdown(url)
    },[url, handlerDropdown])

  return (
      <li
          className='menu-items'
      >
          {children ? (
              <>
                  <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={ showMenuChildren ? "true" : "false"}
                      onClick={handlerClick}
                  >
                      { icon }{title}{' '}
                  </button>
                  <Dropdown
                      children={children}
                      dropdown={showMenuChildren}
                  />
              </>
          ) : (
            <a href={url}>{ title }</a>
          )}
      </li>
  )
}
export default MenuItems