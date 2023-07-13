import React, { useState } from 'react'
import { VscClose, VscListSelection } from 'react-icons/vsc'
import '../styles.scss';

import logo from '../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt="" /> 
        </div>
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu 
          ? <VscClose color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          : <VscListSelection color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='navbar-menu-container'> 
            <div className='navbar-menu-container-links'>
              <Menu />
            </div>
            <div className='navbar-menu-container-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar