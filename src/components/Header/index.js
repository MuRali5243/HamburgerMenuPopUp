import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const webLogo =
  'https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png '

const HeaderPopUp = props => (
  <div className="head-cont">
    <Link to="/">
      <img className="web-logo" src={webLogo} alt="website logo" />
    </Link>
    <div className="popup-cont">
      <Popup
        trigger={
          <div>
            <GiHamburgerMenu testid="hamburgerIconButton" />
          </div>
        }
        modal
      >
        {close => (
          <ul className="pop-up-nav">
            <li className="close-btn-cont">
              <button testid="closeButton" onClick={() => close()}>
                <IoMdClose className="close" />
              </button>
            </li>
            <Link to="/">
              <li className="pop-up-nav-links">
                <AiFillHome />
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className="pop-up-nav-links">
                <BsInfoCircleFill />
                <p>About</p>
              </li>
            </Link>
          </ul>
        )}
      </Popup>
    </div>
  </div>
)
export default HeaderPopUp
