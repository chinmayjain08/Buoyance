import './Navbar.css'
import Logo from '../../../public/images/logo.png'
import { CgMenuGridO } from "react-icons/cg";
import { GiSplitCross } from "react-icons/gi";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import { useState } from 'react';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <div>
            <nav>
                <div className="navLogo">
                    <img src={Logo} alt="" />
                </div>

                <div className="menuButton">
                    <CgMenuGridO onClick={toggleNav} className='menuLogo' />
                </div>

                <div className={`navMenu ${isNavActive ? 'activeNav' : ''}`}>

                    <GiSplitCross onClick={toggleNav} className='crossLogo' />

                    <div className="menuContent">
                        <div className="menuElements">
                            <a onClick={toggleNav} href="#Home">Home</a>
                            <a onClick={toggleNav} href="#About">About</a>
                            <a onClick={toggleNav} href="#Work">Work</a>
                            <a onClick={toggleNav} href="#Service">Service</a>
                            <a onClick={toggleNav} href="#Contact">Contact</a>
                        </div>

                        <div className="contactInfo">
                            <h1>Say <br /> Hello,</h1>
                            <a href="">contact@Buoyance.com</a>
                            <div className="socialLogos">
                                <CiInstagram onClick={toggleNav} className='sologo' />
                                <CiLinkedin onClick={toggleNav} className='sologo' />
                                <FaXTwitter onClick={toggleNav} className='sologo' />
                            </div>

                        </div>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar