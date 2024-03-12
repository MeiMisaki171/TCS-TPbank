import Header from '~/components/Layout/Header/'
import './style.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='page-wrapper bg-main'>
        <div className='page-content'></div>
      </div>
    </div>
  )
}

export default Home