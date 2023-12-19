import React from 'react'
import './NavBar.css'
import BtnComponent from '../ButtonComponent/BtnComponent'
import logo from '../../assets/images/logo.svg'
import Hamburger from '../../assets/images/icon-hamburger.svg'
import mobileBackground from '../../assets/images/bg-intro-mobile.svg'
import phone02 from '../../assets/images/image-mockups.png'

const NavBar = () => {
  return (
    <div className='Container'>
      <header className='navContainer'>
        <section className='navContainerContent'>
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className='navInfo'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <div>

          </div>
          <div className='btnContainer'>
            <BtnComponent/>
          </div>
          <div className='hamburgerContainer'>
            <img src={Hamburger} alt="" />
          </div>
        </section>
      </header>
      <header className='subHero'>
        {/* DESKTOP CONTENT */}
        <div className='backgroundContainer'>
          <div className='overlayImage'></div>
          <div className='phone'></div>
          <div className='mainText'>
            <h1 className='nextGen'> Next generation digital banking</h1>
            <h3 id='mainParaagraph'>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</h3>
            <button className='btn'><h3>Request Invite</h3></button>
          </div>

          {/* MOBILE CONTENT */}
          <div className='mobileMockup'>
            <img src={mobileBackground} alt="" className='overlayImage02' />
            <img src={phone02} alt="" className='phone02'/>
          </div>
          <div className='mobileText'>
            <h1 className='nextGen'> Next generation digital banking</h1>
            <h3 id='mainParaagraph'>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</h3>
            <button className='btn'><h3>Request Invite</h3></button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar