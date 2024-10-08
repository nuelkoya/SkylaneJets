import React, { useEffect, useState } from 'react'
import "./Footer.scss"
import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../../assets/aircraft.png";



const Footer = () => {
  
    const date = new Date()
    let year = date.getFullYear()
    
    const [scrollUp, setScrollUp] = useState(false)


  useEffect(()=>{
      if(scrollUp){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
            
          })
          setScrollUp(false)
      }
  },[scrollUp])  

  return (
    <div className="footer">
        <div className="container">
            <div className="top">
                <div className="logo" >
                    <a onClick={() => setScrollUp(true)}>
                        <span>Skylane Jets</span>
                    </a>
                    <div className='logo-wrapper' >
                        <a onClick={() => setScrollUp(true)}>
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>

                <div className="msg">
                    <p>For your world</p>
                </div>
            </div>
            <hr></hr>
            <div className="middle">

                <div className="middleTop">
                    <div className="contact">
                        <p>Scottsdale</p>
                        <p>Marc S. Alonso</p>
                        <p>(480) 342-0311</p>
                        <p>marc@gmail.com</p>
                    </div>

                    <div className="contact">
                        <p>Houston</p>
                        <p>Great B. Jackson</p>
                        <p>(409) 342-0211</p>
                        <p>greatjack@gmail.com</p>
                    </div>
                </div>

                <div className="middleBottom">
                    <div className="contact">
                        <p>New York</p>
                        <p>Aba B. fuche</p>
                        <p>(871) 242-0201</p>
                        <p>fuche@gmail.com</p>
                    </div>

                    <div className="contact">
                        <p>Atlanta</p>
                        <p>Darius M. Depaul</p>
                        <p>(609) 861-1038</p>
                        <p>darius@gmail.com</p>
                    </div>
                </div>
                

                

            </div>
            <hr></hr>

            <div className="bottom">
                <p>Copyright <FaRegCopyright /> {year} Skylane Jets</p>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
                <div className="sm-icons">
                    <p>Follow us</p>
                    <hr></hr>
                    <a target="_blank" href="https://www.instagram.com/">
                        <FaInstagram />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/">
                        <TbBrandFacebook />
                    </a>
                    <a target="_blank" href="https://www.twitter.com/">
                        <FaXTwitter />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/">
                        <SlSocialLinkedin />
                    </a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Footer