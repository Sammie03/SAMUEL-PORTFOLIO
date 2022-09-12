import React, { Component } from 'react'
import './style.scss'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NavBar extends Component {
    state = {
        darkMode: JSON.parse(window.localStorage.getItem("mode"))
    }

    changeMode = () => {
        this.state.darkMode = !this.state.darkMode
        window.localStorage.setItem("mode", this.state.darkMode)
        this.setState({
            darkMode: JSON.parse(window.localStorage.getItem("mode"))
        })


    }

    render() {
        let darkLogo = <img src="assets/images/letter-s (2).png" alt="logo" width={40} height={40} className='logo' />
        let lightLogo = <img src="assets/images/letter-s (3).png" alt="logo" width={40} height={40} className='logo logo2' />

        let darkTexts =
            <Nav
                className="me-auto my-2 my-lg-0"
            >
                <li className="nav-items nav-items2 navitem-dark-texts"><a href="/">home</a></li>
                <li className="nav-items nav-items2 navitem-dark-texts"><a href="/aboutme">about me</a></li>

                <li className="nav-items nav-items2 navitem-dark-texts"><a href="/portfolio">portfolio</a></li>
                <li className="nav-items navitem-dark-texts">
                    <span className='moon-icon' onClick={this.changeMode}>
                        {this.state.darkMode ? <span className='mode-text'>light mode <img src="assets/images/sun.png" alt="sun" width={25} height={25} /></span> : <span className='mode-text'>dark mode <img src="assets/images/half-moon.png" alt="moon" width={25} height={25} /></span>}
                    </span>
                </li>
            </Nav>

        let lightTexts = <Nav
            className="me-auto my-2 my-lg-0"
        >
            <li className="nav-items nav-items2 navitem-light-texts"><a href="/">home</a></li>
            <li className="nav-items nav-items2 navitem-light-texts"><a href="/aboutme">about me</a></li>

            <li className="nav-items nav-items2 navitem-light-texts"><a href="/portfolio">portfolio</a></li>
            <li className="nav-items navitem-light-texts">
                <span className='moon-icon' onClick={this.changeMode}>
                    {this.state.darkMode ? <span className='mode-text'>light mode <img src="assets/images/sun.png" alt="sun" width={25} height={25} /></span> : <span className='mode-text'>dark mode <img src="assets/images/half-moon.png" alt="moon" width={25} height={25} /></span>}
                </span>
            </li>
        </Nav>
        return (
            <div className='navbar-container'>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className='nav-logo'>
                            <li className="nav-items">
                                {this.state.darkMode ? <span><a href="/">{lightLogo}</a></span> : <span><a href="/">{darkLogo}</a></span>}
                            </li></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            {this.state.darkMode ? darkTexts : lightTexts}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {this.state.darkMode ? <Helmet><style>{'body { background-color: black; color: white; max-width: 100%; overflow-x:hidden; }'}</style></Helmet> : ''}
            </div>
        )
    }
}
