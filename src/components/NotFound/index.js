import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="home-cont">
    <Header />
    <div className="home-img-cont">
      <img
        className="home-img"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)
export default NotFound
