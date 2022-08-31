import React, { Component } from 'react'
import './style.scss'

export default class AboutMeCard extends Component {

    skills = [
        "React JS",
        "Javascript",
        "HTML 5",
        "CSS3",
        "Bootstrap",
        "Angular",
        "Sass",
        "Python",
        "Git",
        "JQUERY",
        "Mysql"
    ]

    hobbies = [
        "Coding",
        "Movies",
        "Swimming",
        "Reading",
        "Watching football"
    ]

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

                            <p className="blue-text">About me</p>

                            Hello! I'm Samuel, a young tech enthusiast seeking a career in a growing organization, where I can have the opportunities to prove my abilities by accepting challenges as well as fulfilling the organization’s goal and climb the career ladder through continuous learning, hard work, determination, and commitment.

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
                            {this.skills.map((skill, index) => {
                                return <p><span key={index}>{skill}</span></p>
                            })}
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
                                {this.hobbies.map((hobby, index) => {
                                    return <li key={index}>{hobby}</li>
                                })}
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
