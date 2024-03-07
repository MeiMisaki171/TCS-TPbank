import { useLocation } from 'react-router-dom';
import Navigation from '~/components/Layout/Body/Navigation'
import Header from '~/components/Layout/Header';
import { IMenuData } from '~/components/Layout/Header/Menu/Menu';
import { findTitleByPath } from '~/hook/findTitleByPath';
import './style.css'
import CtblFormLeft from '~/components/Layout/Body/CTBL/CtblFormLeft';
import HaiQuan from '~/components/Layout/Body/CTBL/HaiQuan';

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
            <div className='form-content card border-ctbc'>
              <div className='card-body'>
                <div className='row mb-3'>
                  <div className='col-sm-4'>
                    <CtblFormLeft />
                  </div>
                  <div className='col-sm-8'>
                    <HaiQuan />
                  </div>
                </div>
                <hr></hr>
                <div className='row mb-3 text-center'>bottom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LapChungTuThueHQ