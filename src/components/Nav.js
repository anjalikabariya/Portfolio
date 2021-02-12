import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faFolderPlus, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import Collapsible from 'react-collapsible'

class Nav extends React.Component  {
  constructor() {
    super();
    this.state = {
      index_classname:"clicked-file",
      about_classname: "unclicked-file",
      portfolio_classname: "unclicked-file",
      contact_classname: "unclicked-file",

    }
  }
  
  componentDidMount() {
    if(window.location.href.includes("portfolio")) {
      this.setState({ 
        index_classname:"unclicked-file",
        about_classname: "unclicked-file",
        portfolio_classname: "clicked-file",
        contact_classname: "unclicked-file",
      })
    }
    else if(window.location.href.includes("about")) {
      this.setState({ 
        index_classname:"unclicked-file",
        about_classname: "clicked-file",
        portfolio_classname: "unclicked-file",
        contact_classname: "unclicked-file",
      })
    }
  }
  
  render() {
    const { index_classname, portfolio_classname, about_classname, contact_classname } = this.state; 
    return(
      <div className="navbar-container">
        <div className="navbar-list">
        <Collapsible trigger={ <div className="folder-name-container" >
            <FontAwesomeIcon icon={ faFolderPlus } style={{ color: '#C4C4C4', fontSize:'25px'}}/> &nbsp;&nbsp;
            <p>Anjali's Portfolio Site</p>
        </div>}>
        <div className="navbar-pages-container">
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } className={index_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/"><p>index.html</p></Link>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } className={about_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/about"><p>about.html</p></Link>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } className={portfolio_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/portfolio"><p>projects.html</p></Link>
            </div>
        </div>
        </Collapsible>
        </div>
      </div>
    );
  }
}


export default Nav;

