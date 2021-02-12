import React from "react"
import LinkedInSVG from "../Icons/LinkedInSVG"
import MailSVG from "../Icons/MailSVG"
import GithubSVG from "../Icons/GithubSVG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import Hippo from './Hippo';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-container">
      <div className="user-info-container">
        <div className="user-info">
          <p>Anjali Kabariya</p>
          <p>Full-Stack Developer</p>
        </div>
        <div className="x-icon">
          <FontAwesomeIcon icon={ faTimes } style={{ color: '#C4C4C4', fontSize:'20px', fontWeight:'0px', display:'inline-block'}}/>  
        </div>
      </div>
      
      <Hippo />
      
      <div className="icons-container">
            <a href="anjali.kabariya21@gmail.com">
              <MailSVG />
            </a>

            <a href="https://www.linkedin.com/in/anjalikabariya">
              <LinkedInSVG />
            </a>

            <a href="https://github.com/anjalikabariya">
              <GithubSVG />
            </a>
      </div>
    </div>
   
   </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
