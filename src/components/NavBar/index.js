import React, { Component } from 'react'
import './style.scss'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
    state = {
        darkMode: false
    }

    changeMode = () => {
        this.setState((prevState) => {
            return {
                darkMode: !prevState.darkMode
            }
        })
    }

    render() {
        let darkLogo = <img src="assets/images/letter-s (2).png" alt="logo" width={40} height={40} className='logo' />
        let lightLogo = <img src="assets/images/letter-s (9).png" alt="logo" width={40} height={40} className='logo' />
        return (
            <div className='navbar-container'>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className='nav-logo'>
                            <li className="nav-items">
                                {this.state.darkMode ? <span><a href="/">{lightLogo}</a></span> : <span><a href="/">{darkLogo}</a></span>}
                            </li></Navbar.Brand>
                       <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                            >
                                <li className="nav-items nav-items2"><a href="/">home</a></li>
                                <li className="nav-items nav-items2"><a href="/aboutme">about me</a></li>

                                <li className="nav-items nav-items2"><a href="/portfolio">portfolio</a></li>
                                <li className="nav-items">
                                    <span className='moon-icon' onClick={this.changeMode}>
                                        {this.state.darkMode ? <img src="assets/images/sun.png" alt="sun" width={25} height={25} /> : <img src="assets/images/half-moon.png" alt="moon" width={25} height={25} />}
                                    </span>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {this.state.darkMode ? <Helmet><style>{'body { background-color: black; color: white; max-width: 100%; overflow-x:hidden; }'}</style></Helmet> : ''}
            </div>
        )
    }
}
