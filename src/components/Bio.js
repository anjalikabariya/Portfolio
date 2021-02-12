import React from "react"
import picture from "../images/about-picture.jpg"
import { faBlenderPhone, faHistory, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var ReactRotatingText = require("react-rotating-text");

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>
        
        <div className="about-content-container">
          <div className="comments">
                <p>// This is a comment.</p>
          </div>
          <div>
          <ReactRotatingText
              items={[
                " Turn your ideas and concepts into real working web applications ",
                " Design | Develop | Deploy",
                " Agile | Waterfall ",
                " Full Stack Developer ",
                " Business Analyst "
              ]}
              color="#69DDFF"
              />
          </div>
          <div className="comments">
              <p>// This is a comment.</p>
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#FF97FF"}}>.name</span> &#123; </p>
                    <p className="tag-info">Anjali Kabariya</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                    <p className="tag-info"><span style={{ color: "#cc33ff"}}>&#38;__frontend</span> &#123;</p>
                    <p className="tag-info">HTML5, CSS3, JavaScript, ReactJS, Redux, SASS, GatsbyJS</p><p>&#125;</p>
                    <p className="tag-info"><span style={{ color: "#ff9933"}}>&#38;__backend</span> &#123;</p>
                    <p className="tag-info">Express, NodeJS, AWS, MySQL, FireBase, Python</p><p>&#125;</p>
                    <p className="tag-info"><span style={{ color: "#0066cc"}}>&#38;__other</span> &#123;</p>
                    <p className="tag-info">Agile, Git, C++, Figma, Prototyping</p>
                    <p className="tag-info">[...and learning more cool skills]</p><p>&#125;</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#F204EF"}}>.experience</span> &#123;</p>
                    <p className="tag-info"><span style={{ color: "#FFF02d"}}>@Infosys Ltd</span> &#123; </p>
                    <p className="tag-info">-Software Developer (2017-2019) </p>
                    <p className="tag-info">--Redesigned applications and improved user friendliness and customer interaction</p>
                    <p className="tag-info">--Worked on restructuring database</p>
                    <p className="tag-info">--Modified, migrated and improved code of existing system</p>
                    <p>&#125;</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#86FFF8"}}>.education</span> &#123; </p>
                    <p className="tag-info"> Web Development @BrainStation, Toronto, ON </p>
                    <p className="tag-info"><FontAwesomeIcon icon={faHistory} /> 2020-2021 </p>
                    <p className="tag-info"> Information Technology Business Analysis </p>
                    <p className="tag-info"> @Conestoga College, Kitchener, ON </p>
                    <p className="tag-info"><FontAwesomeIcon icon={faHistory} /> 2019-2020 </p>
                    <p className="tag-info"> Information Technology Engineering </p>
                    <p className="tag-info"> @Dharmsinh Desai University, India </p>
                    <p className="tag-info"><FontAwesomeIcon icon={faHistory} /> 2013-2017 </p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#ffff00"}}>.contact</span> &#123; </p>
                    <p className="tag-info"> <FontAwesomeIcon icon={faBlenderPhone} /> +1(437)239-8902 </p>
                    <p className="tag-info"> <FontAwesomeIcon icon={faEnvelopeOpen} /> anjali.kabariya21@gmail.com </p>
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
