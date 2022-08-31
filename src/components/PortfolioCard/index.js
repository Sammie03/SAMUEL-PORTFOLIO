import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './style.scss'


export default class PortfolioCard extends Component {
    portfolioDetails = [
        {
            id: 1,
            projectName: 'HouseMe',
            tools: 'html, css, bootstrap 5, javascript, ajax, jquery, python(flask)',
            projectImg: <img src="assets/images/Houseme.png" alt="HousemeImg" className="project-images" />,
            liveDemoLINK: 'https://houseme.pythonanywhere.com',
            sourceCodeLINK: 'https://github.com/Sammie03/Houseme'
        },
        {
            id: 2,
            projectName: 'My portfolio website',
            tools: 'html, scss, react js',
            projectImg: <img src="assets/images/myPortfoliosite.png" alt="myPortfolio" className="project-images" />,
            liveDemoLINK: 'https://samuelokediya.netlify.app/',
            sourceCodeLINK: 'https://github.com/Sammie03/SAMUEL-PORTFOLIO'
        },
        {
            id: 3,
            projectName: 'Conference',
            tools: 'html, css, bootstrap 5, javascript, ajax, jquery, python(flask)',
            projectImg: <img src="assets/images/conference.png" alt="conferenceApp" className="project-images" />,
            liveDemoLINK: 'http://psalmie.pythonanywhere.com',
            sourceCodeLINK: 'https://github.com/Sammie03/conference'
        },
        {
            id: 4,
            projectName: 'Pet store',
            tools: 'html, css, bootstrap, javascript',
            projectImg: <img src="assets/images/petstore.png" alt="petstore" className="project-images" />,
            liveDemoLINK: 'https://thepetstore.netlify.app/',
            sourceCodeLINK: 'https://github.com/Sammie03/The-pet-shop'
        },
        {
            id: 5,
            projectName: 'Kid\'s birthday',
            tools: 'html, css, bootstrap',
            projectImg: <img src="assets/images/kidbirthday.png" alt="kidBirthday" className="project-images" />,
            liveDemoLINK: 'https://kidbirthday.netlify.app/',
            sourceCodeLINK: 'https://github.com/Sammie03/Birthday-website'
        },
        {
            id: 6,
            projectName: 'Facebook login clone',
            tools: 'html, css, bootstrap',
            projectImg: <img src="assets/images/fbclone.png" alt="facebookclone" className="project-images" />,
            liveDemoLINK: 'https://signupclone.netlify.app',
            sourceCodeLINK: 'https://github.com/Sammie03/Facebook-login-clone'
        },
        {
            id: 7,
            projectName: 'Construction firm',
            tools: 'html and css',
            projectImg: <img src="assets/images/construction.png" alt="constructionFirm" className="project-images" />,
            liveDemoLINK: 'https://constructionwebpage.netlify.app',
            sourceCodeLINK: 'https://github.com/Sammie03/construction-website'
        },
        {
            id: 8,
            projectName: 'School website',
            tools: 'html and css',
            projectImg: <img src="assets/images/school.png" alt="schoolwebsite" className="project-images" />,
            liveDemoLINK: 'https://myschooldesign.netlify.app',
            sourceCodeLINK: 'https://github.com/Sammie03/school-design'
        },
        {
            id: 9,
            projectName: 'Portfolio website',
            tools: 'html, css, bootstrap',
            projectImg: <img src="assets/images/portfolio.png" alt="portfolio" className="project-images" />,
            liveDemoLINK: 'https://myportfolio-webpage.netlify.app/',
            sourceCodeLINK: 'https://github.com/Sammie03/portfoliowebsite'
        }


    ]
    render() {
        return (
            <div className='portfolio-container'>
                <div className="screen-background">
                    {this.portfolioDetails.map((project, index) => {
                        return (
                            <div className="portfolio-parent">
                                <div className="portfolio-items">
                                    <div className="project-img-div" key={index}>{project.projectImg}</div>
                                    <h5 className='projectTitle'>{project.projectName}</h5>
                                    <span className='projectTools'>{project.tools}</span>
                                    <div className="">
                                        <a href={project.liveDemoLINK} className="btn linkBTN" target="_blank"><img src="assets/images/livedemo.png" alt="livedemo-icon" width={15} height={15} className='btnIcons' /> Live Demo</a>
                                        <a href={project.sourceCodeLINK} className="btn linkBTN" target="_blank"><img src="assets/images/sourcecode.png" alt="sourcecode-icon" width={15} height={15} className='btnIcons' /> Source Code</a>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
