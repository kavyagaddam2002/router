// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="main-container">
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave"
        alt="wave"
      />
      <p className="text"> wave</p>
    </div>
    <ul className="text-container">
      <li>
        <Link to="/" className="text1">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="text1">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text1">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
