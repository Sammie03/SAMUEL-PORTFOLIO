import React, { Component } from 'react'
import HomePage from './modules/Homepage'
import AboutMe from './modules/AboutMe'
import Portfolio from './modules/Portfolio'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
       <NavBar/>
        <Routes>
            <Route exact path= "/" element={<HomePage/>}/>
            <Route exact path= "/aboutme" element={<AboutMe/>}/>
            <Route exact path= "/portfolio" element={<Portfolio/>}/>
            <Route exact path= "/" element={<HomePage/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    )
  }
}

