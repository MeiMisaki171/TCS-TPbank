import { BiChevronRight, BiHome } from 'react-icons/bi'
import './navigation.css'
import { Link } from 'react-router-dom'
const Navigation = ({ title }: any) => {

  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <div className='navigation-wrapper'>
      <div className='navigation'>
        <Link to={'/'}><BiHome className='nav-icon__home' /></Link>
        <BiChevronRight className='nav-icon__arrow' />
        {title}
      </div>
      <div className='user-information'>
        <span className='current-date'>Ngày làm việc: {currentDate}</span>
        <span className='user-name'>Người sử dụng: Nguyen Thanh Nam</span>
      </div>
    </div>
  )
}

export default Navigation