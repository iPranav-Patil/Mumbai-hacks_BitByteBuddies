import {Link} from 'react-router-dom'
import './nav.css'
import Logo from '../assets/logo-final.jpeg'

export default function Navbar(){
  return(
    <>
    <div className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo}></img>
        </div>
          <div className="nav-link">
            <ul>
              <li>
                  <Link to='/' className='nav-list'>Home</Link>
              </li>
              <li>
                  <Link  className='nav-list'>About</Link>
              </li>
              <li>
                  <Link to='/dashboard' className='nav-list'>Stocks Analysis</Link>
              </li>
              <li>
                  <Link to='/not' className='nav-list'>News</Link>
              </li>
              <li>
                  <Link to='/subs' className='nav-list'>Pricing</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}