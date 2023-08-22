import React from 'react'
import '../styles.scss'

import gpt3logo from '../assets/logo.svg'

function Footer() {
  return (
    <div className='footer section-padding'>
        <div className="footer-heading">
          <h1 className="gradient-text">Do you want to step in to the future before others</h1>
        </div>

        <div className="footer-btn">
          <p>Request Early Access</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-logo">
            <img src={gpt3logo} alt="logo of gpt" />
            <p>All Rights Reserved</p>
          </div>

          <div className="footer-links-div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="footer-links-div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="footer-links-div">
            <h4>Get in touch</h4>
            <p>If you enjoyed this clone reach me</p>
            <a href='www.ligiamonteiro.com'>www.ligiamonteiro.com</a>
            <a href='mailto:ligiatmonteiro@gmail.com'>E-mail me</a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>©2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer