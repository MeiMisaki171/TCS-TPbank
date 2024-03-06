import { useLocation } from 'react-router-dom';
import Navigation from '~/components/Layout/Body/Navigation'
import Header from '~/components/Layout/Header';
import { IMenuData } from '~/components/Layout/Header/Menu/Menu';
import { findTitleByPath } from '~/hook/findTitleByPath';
import './style.css'

const LapChungTuThueHQ = () => {

  const location = useLocation();

  const title = findTitleByPath(IMenuData, location.pathname);
  console.log(title);

  return (
    <div>
      <Header />
      <div className='page-wrapper'>
        <div className='page-content'>
          <Navigation title={title} />
          <div className='form-wrapper'>
            <div className='form-title'>{title}</div>
            <hr className='hr-ctbc'></hr>
            <div className='form-content'>
              form-content
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LapChungTuThueHQ