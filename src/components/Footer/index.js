import React, { Component } from 'react'
import './style.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <p className="footer-writeup">Made with <span className='footer-love'>♥</span> by <i>Samuel Okediya</i></p>
      </div>
    )
  }
}
