import { BiChevronRight, BiHome } from 'react-icons/bi'
import './navigation.css'
import { Link } from 'react-router-dom'
const Navigation = ({ title }: any) => {
  return (
      <div className='navigation'>
          <Link to={'/'}><BiHome className='nav-icon__home' /></Link>
          <BiChevronRight className='nav-icon__arrow' />
          {title}
      </div>
  )
}

export default Navigation