import { useLocation } from 'react-router-dom';
import Navigation from './Navigation'
import './style.css'
import { findTitleByPath } from '~/hook/findTitleByPath';
import { IMenuData } from '../Header/Menu/Menu';

const Body = ({ children }: any) => {

    const location = useLocation();

    const title = findTitleByPath(IMenuData, location.pathname);

    return (
        <div className='page-wrapper'>
            <div className='page-content'>
                <Navigation title={title} />
                <div className='form-wrapper'>
                    <div className='form-title'>{title}</div>
                    <hr className='hr-ctbc'></hr>
                    {children}
                </div>
            </div>
        </div>
    )
  }
  
  export default Body