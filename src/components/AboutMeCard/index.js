import React, { Component } from 'react'
import './style.scss'

export default class AboutMeCard extends Component {
    render() {
        return (
            <div className='aboutme-card-container'>
                <div className="aboutme-card">
                    <div className="card-top">
                        <div className="top-circle red-circle"></div>
                        <div className="top-circle yellow-circle"></div>
                        <div className="top-circle green-circle"></div>
                    </div>
                    <div className="card-body">
                        <span className="aboutMe-text">
                            <span className="green-text">$(main)</span>

                            <p>About me</p>

                            Hello! I'm<span className="blue-text"> Samuel </span>, a full stack developer based in Lagos, Nigeria. I love creating web applications with React and Python, I also have a good knowledge of Angular and I'm currently studying Java.

                            I love to watch football and hangout with friends🍻.
                        </span>
                    </div>
                </div>
                <div className="aboutme-card">
                    <div className="card-top">
                        <div className="top-circle red-circle"></div>
                        <div className="top-circle yellow-circle"></div>
                        <div className="top-circle green-circle"></div>
                    </div>
                    <div className="card-body">
                        <span className="aboutMe-text">
                            <span className="blue-text"> samuel </span> $ cd skills/tools
                            <p><span className="green-text">skills/tools</span>(main) $</p>
                            Proficient with -

                            <p><span>Javascript</span><span className='right-list'>CSS3</span></p>

                            <p><span>React JS </span><span className='right-list'>Bootstrap</span></p>

                            <p><span>Angular</span><span className='right-list'>Sass</span></p>

                            <p><span>HTML 5</span><span className='right-list'>Scss</span></p>

                            <p><span>Python</span><span className='right-list'>Git</span></p>

                            <p><span>JQUERY</span><span className='right-list'>Mysql</span></p>
                        </span>
                    </div>
                </div>

                <div className="aboutme-card">
                    <div className="card-top">
                        <div className="top-circle red-circle"></div>
                        <div className="top-circle yellow-circle"></div>
                        <div className="top-circle green-circle"></div>
                    </div>
                    <div className="card-body">
                        <span className="aboutMe-text">
                        <span className="blue-text"> samuel </span> $ cd hobbies/interests
                            <p><span className="green-text">hobbies/interests</span>(main) $</p>
                            <ul className="">
                                <li className="">Coding</li>
                                <li className="">Movies</li>
                                <li className="">Swimming</li>
                                <li className="">Reading</li>
                                <li className="">Watching football</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
