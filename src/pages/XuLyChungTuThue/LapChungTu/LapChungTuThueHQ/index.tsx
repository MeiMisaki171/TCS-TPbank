
import Header from '~/components/Layout/Header';
import './style.css'
import CtblFormLeft from '~/components/Layout/Body/CTBL/CtblFormLeft';
import HaiQuan from '~/components/Layout/Body/CTBL/HaiQuan';
import Body from '~/components/Layout/Body';

const LapChungTuThueHQ = () => {


  return (
    <div>
      <Header />
      <Body>
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
      </Body>
    </div>
  )
}

export default LapChungTuThueHQ