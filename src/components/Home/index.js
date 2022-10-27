import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-cont">
    <Header />
    <div className="home-img-cont">
      <img
        className="home-img"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
      />
    </div>
  </div>
)
export default Home
