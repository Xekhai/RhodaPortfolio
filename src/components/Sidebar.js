import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, NavLink  } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import LogoS from '../assets/images/Logo.jpg'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'> 
          {/* <img src={LogoS} alt='logo' />  */}
          <h1> RA </h1>      
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='http://linkedin.com/in/olabisiabolarin'
            >
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/RhodaAramide'
            >
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='mailto:olabisiabolarin5@gmail.com'
            >
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar