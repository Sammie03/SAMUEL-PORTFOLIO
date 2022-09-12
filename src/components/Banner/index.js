import React, { Component } from 'react'
import './style.scss'

export default class Banner extends Component {
    state = {
        hour: null,
        day: null,
        weekday: null,
        month: null,
        time: null
    }

    componentDidMount() {
        this.getDateTime()
    }

    getDateTime = () => {
        const currentDate = new Date()
        const currentHour = currentDate.getHours()
        const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

        this.setState(prevState => {
            return {
                ...prevState,
                hour: currentHour,
                day: currentDate.toLocaleString('en-US', { day: 'numeric' }),
                weekday: daysOfWeek[currentDate.getDay()],
                month: currentDate.toLocaleString('en-us', { month: 'short' }),
                time: currentDate.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
            }
        })
    }

    timeInterval = setInterval(this.getDateTime, 1000)

    render() {
        const { hour, day, weekday, month, time } = this.state
        let timeOfDay = ''

        if (hour >= 4 && hour < 12) {
            timeOfDay = (
                <span>
                    {' '}
                    <b>Good morning</b>{' '}
                    <span role="img" aria-label="coffee-cup">
                        ☕
                    </span>
                </span>
            )
        } else if (hour >= 12 && hour < 17) {
            timeOfDay = (
                <span>
                    {' '}
                    <b>Good afternoon</b>{' '}
                    <span role="img" aria-label="sun-face">
                        🌞
                    </span>
                </span>
            )
        } else if (hour >= 17 && hour < 24) {
            timeOfDay = (
                <span>
                    {' '}
                    <b>Good evening</b>{' '}
                    <span role="img" aria-label="sun-down">
                        🌆
                    </span>
                </span>
            )
        } else {
            timeOfDay = (
                <span>
                    {' '}
                    <b>You should be sleeping</b>{' '}
                    <span role="img" aria-label="sleeping">
                        💤
                    </span>
                </span>
            )
        }
        return (
            <div className='banner-container'>
                <div className="banner-img">
                    <img src="assets/images/sam06.png" alt="profile" width={335} height={335} className='banner-img-inner' />
                </div>
                <div className="banner-writeup">
                    <h1 className="writeup">Hi, I'm <span className='myname'>Samuel Okediya</span><span className="wave"><img src="assets/images/hand.png" alt="waving hand" width={30} height={30} /></span></h1>
                    <h2 className="writeup"><img src="assets/images/it-department.png" alt="programmer" width={20} height={20} /> I'm a fullstack developer.</h2>
                    <p className="writeup"><img src="assets/images/pin.png" alt="location" width={20} height={20} /> Based in Lagos, Nigeria.</p>
                    <p className="writeup"><img src="assets/images/meeting.png" alt="meeting" width={20} height={20} /> I love to hangout and watch football.</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelokediya@gmail.com" target='_blank' rel="noreferrer"><p className="writeup"><img src="assets/images/message.png" alt="email" width={20} height={20} /> Let's get in touch!</p></a>
                    <p className="writeup"><img src="assets/images/calendar.png" alt="dateTime" width={20} height={20} /> {weekday} {day} {month} | {time} -- {timeOfDay}</p>

                    <span className="social-media-icons">
                        <a href="https://github.com/Sammie03" target='_blank' rel='noreferrer' className='iconsAlign'><img src="assets/images/github.png" alt="github" width={40} height={40} /></a>
                        <a href="https://www.linkedin.com/in/okediya-samuel-a7282316b/" target='_blank' rel='noreferrer' className='iconsAlign'><img src="assets/images/linkedin.png" alt="linkedin" width={40} height={40} /></a>
                        <a href="https://twitter.com/sammie__01" target='_blank' rel='noreferrer' className='iconsAlign'><img src="assets/images/twitter.png" alt="twitter" width={40} height={40} /></a>
                    </span>

                </div>
            </div>
        )
    }
}
