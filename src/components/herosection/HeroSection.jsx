import React from 'react'
import './herosection.css'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";

import picture from '../../websitedesignimages/heropicture1.jpeg'
import Buttons from '../Buttons';






const HeroSection = () => {

  const heroSectionIconData = [
    {
      icon: <IoLogoInstagram />,
      link: 'https://instagram.com',
      color: "#E1306C"
    },
    {
      icon: <CiLinkedin />,
      link: 'www.linkedin.com/in/raza-hussain-kandhro-3b02342aa',
      color: "#0A66C2"
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com',
      color: "#1DA1F2"
    }
  ]





  return (
    <div className='herosection-main-container' id='#'>

      <div className='herosection-icon-container' >
        {heroSectionIconData.map((muzammil, index) => {
          return (
            <a href={muzammil.link} className={`icon-container-hover-${index}`}>{muzammil.icon}</a>
          )
        })}
      </div>

      <div className='herosection-name-container'>
        <div className='herosection-name-container-top'>

          <div className='name-part'>
           <h1>Raza Hussain</h1>
            <span><GiHand /></span>
          </div>


          <h2>Frontend Developer</h2>
          <p>I'm a dedicated Front-End Developer skilled in HTML, CSS, JavaScript, and React. I create responsive, visually engaging websites with a focus on seamless user experiences. My work emphasizes clean code and smooth functionality across all platforms.</p>
        </div>

        <Buttons btnTitle={"Say Hello"} btnIcon={<FaTelegramPlane />} />
        
      </div>

      <div className='herosection-image-container'>
        <img src={picture} />
      </div>

    </div>
  )
}

export default HeroSection