import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/EECToronto_logo.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) =>{
    const today = new Date();
    const year = today.getFullYear();

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/home"><img src={Logo} alt=""/></Link>
                            </div>
                            <p>Build and Earn with your online store with lots of cool and exclusive wpo-features </p>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget resource-widget">
                            <div className="widget-title">
                                <h3>Top News</h3>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src={n1} alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                    <span>12 Nov, 2020</span>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src={n2} alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                    <span>12 Nov, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Our Causes</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Our Mission</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Our Event</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <p>online store with lots of cool and exclusive wpo-features</p>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>28 Street, New York City, USA</li>
                                    <li><i className="fi flaticon-call"></i>+000123456789</li>
                                    <li><i className="fi flaticon-envelope"></i>nasarna@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; {year} Ethiopian Evangelical Church Toronto</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;