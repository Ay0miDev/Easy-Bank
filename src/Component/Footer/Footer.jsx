import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import youtube from '../../assets/images/icon-youtube.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import instagram from '../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='Containers'>
       <section className='footerContainer'>
            <div className='footerIcon'>
                <div>
                    <img src={logo} alt="" className='footerLogo'/>
                </div>    
                <div className='socialIcons'>
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div> 
            <div className='footerInfo'>
                <ul className='info'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul className='info'>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div> 
            <div className='footerEnd'>
                <button className='btn'><h3>Request Invite</h3></button>
                <h2 className='copyright'>Easybank. All rights reserved</h2>
            </div> 
       </section>
    </div>
  )
}

export default Footer