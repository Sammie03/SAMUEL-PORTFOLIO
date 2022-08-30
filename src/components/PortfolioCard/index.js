import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './style.scss'


export default class PortfolioCard extends Component {
portfolioDetails = [
{
    id: 1,
    projectName: 'HouseMe',
    tools: 'html, css, bootstrap 5, javascript, ajax, jquery, python(flask)',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images"/>,
    aboutProject: 'Property listing platform',
    liveDemoLINK: 'https://houseme.pythonanywhere.com',
    sourceCodeLINK: 'https://github.com/Sammie03/Houseme'
},
{
    id: 2,
    projectName: 'My portfolio website',
    tools: 'html, scss, react js',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://samuelokediya.netlify.app/',
    sourceCodeLINK: 'https://github.com/Sammie03/SAMUEL-PORTFOLIO'
},
{
    id: 3,
    projectName: 'Conference',
    tools: 'html, css, bootstrap 5, javascript, ajax, jquery, python(flask)',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'http://psalmie.pythonanywhere.com',
    sourceCodeLINK: 'https://github.com/Sammie03/conference'
},
{
    id: 4,
    projectName: 'Pet store',
    tools: 'html, css, bootstrap, javascript',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://thepetstore.netlify.app/',
    sourceCodeLINK: 'https://github.com/Sammie03/The-pet-shop'
},
{
    id: 5,
    projectName: 'Kid\'s birthday',
    tools: 'html, css, bootstrap',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://kidbirthday.netlify.app/',
    sourceCodeLINK: 'https://github.com/Sammie03/Birthday-website'
},
{
    id: 6,
    projectName: 'Facebook login clone',
    tools: 'html, css, bootstrap',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://signupclone.netlify.app',
    sourceCodeLINK: 'https://github.com/Sammie03/Facebook-login-clone'
},
{
    id: 7,
    projectName: 'Construction firm',
    tools: 'html and css',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://constructionwebpage.netlify.app',
    sourceCodeLINK: 'https://github.com/Sammie03/construction-website'
},
{
    id: 8,
    projectName: 'School website',
    tools: 'html and css',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://myschooldesign.netlify.app',
    sourceCodeLINK: 'https://github.com/Sammie03/school-design'
},
{
    id: 9,
    projectName: 'Portfolio website',
    tools: 'html, css, bootstrap',
    projectImg: <img src="assets/images/displayScreen2.png" alt="" className="project-images" />,
    aboutProject: 'Self listing platform',
    liveDemoLINK: 'https://myportfolio-webpage.netlify.app/',
    sourceCodeLINK: 'https://github.com/Sammie03/portfoliowebsite'
}


]
  render() {
    return (
      <div className='portfolio-container'>
        <h3 className="projectTitle">MY PORTFOLIO</h3>
        <div className="screen-background">
            {this.portfolioDetails.map((project,index) =>{
                return (
                    <div className="portfolio-parent">
                        <div className="portfolio-items">
                        <div className="" key={index}>{project.projectImg}</div>
                        <h5 className='projectTitle'>{project.projectName}</h5>
                        <h6>{project.aboutProject}</h6>
                        <p>{project.tools}</p>
                        <a href={project.liveDemoLINK} className="btn linkBTN" target="_blank">Live Demo</a>
                        <a href={project.sourceCodeLINK} className="btn linkBTN" target="_blank">Source Code</a>
                    </div>
                    </div>
             
                )
            })}
        </div>
      </div>
    )
  }
}
