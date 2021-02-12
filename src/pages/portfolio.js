import React, { Component } from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import Main from "../components/Main"

class PortfolioPage extends Component {
  
  render() {
    const toggler = () => {
        return(
          <div className="portfolio-page">
            <SEO title="Portfolio" />
            <Nav />
            <Main />
          </div>
        );
    }
    
    return (
      <div className="portfolio-page-container">
        {toggler()}
      </div>
    )
  }
}


export default PortfolioPage;