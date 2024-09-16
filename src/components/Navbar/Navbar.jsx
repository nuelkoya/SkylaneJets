import React, { useState } from 'react'
import "./Navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link,NavLink } from 'react-router-dom';



const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false)
  return (
    <div className="navbar">
        <div className="left">
            <a href="/">
                <span>Skylane Jets</span>
            </a>
            <div className='logo-wrapper'>
                <a to="/">
                    <img src="src/assets/aircraft.png" alt="" />
                </a>
            </div>
            
        </div>

        <div className={`right ${showHamburger ? 'active' : ''}`}>
            <div className='closeWrapper'>
                <RiCloseLargeLine size={45} 
                    className="closeBtn"
                    onClick={() => setShowHamburger(false)}
                />
            </div>
            

            <ul className="">
                <Link to="/inventory"
                    onClick={() => setShowHamburger(false)}
                >
                    <li>Inventory</li>
                </Link>
                <Link to="/offer"
                    onClick={() => setShowHamburger(false)}
                >
                    <li>Inquiry</li>
                </Link>
            
                <Link to="/contact"
                    onClick={() => setShowHamburger(false)}
                >
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>

            
        <div className="hamburger" >
            <GiHamburgerMenu size={45} onClick={() => setShowHamburger(true)}/>
        </div>

    </div>
  )
}

export default Navbar