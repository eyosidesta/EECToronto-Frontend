import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/EECToronto_logo.png';
import HeaderTopbar from '../HeaderTopbar';
import './style.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMinistries, setIsOpenMinistries] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <HeaderTopbar />
            <header className="header">
                <div className="header-left">
                    <Link to="/home">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>

                <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className="fa fa-bars"></i>
                </div>

                <nav className={`header-right ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-menu">
                        <li><Link to="/all-events">Event</Link></li>

                        <li
                            onMouseEnter={() => !mobileMenuOpen && setIsOpen(true)}
                            onMouseLeave={() => !mobileMenuOpen && setIsOpen(false)}
                        >
                            <Link to='' onClick={() => setIsOpen(!isOpen)}>
                                About Us <i className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`} />
                            </Link>
                            {(isOpen || mobileMenuOpen) && (
                                <ul className="dropdown">
                                    <li><Link to="/statement-of-faith">Values and Visions</Link></li>
                                    <li><Link to="/leadership">Leadership</Link></li>
                                    <li><Link to="/volunteer">Board of Members</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/case">New Here</Link></li>
                        <li><Link to="/english-service">English Service</Link></li>

                        <li
                            onMouseEnter={() => !mobileMenuOpen && setIsOpenMinistries(true)}
                            onMouseLeave={() => !mobileMenuOpen && setIsOpenMinistries(false)}
                        >
                            <Link to="" onClick={() => setIsOpenMinistries(!isOpenMinistries)}>
                                Ministries <i className={`fa ${isOpenMinistries ? "fa-angle-up" : "fa-angle-down"}`} />
                            </Link>
                            {(isOpenMinistries || mobileMenuOpen) && (
                                <ul className="dropdown">
                                    <li><Link to="/case">Mission Garagama</Link></li>
                                    <li><Link to="/young-adults-amharic">Young Adults - Amharic</Link></li>
                                    <li><Link to="/young-adults-amharic-old">Young Adults - Amharic - Old</Link></li>
                                    <li><Link to="/case-single">Kids Ministry</Link></li>
                                    <li><Link to="/bible-study">Bible Study</Link></li>
                                    <li><Link to="/case-single">Media Team</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
