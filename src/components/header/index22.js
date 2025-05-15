import React, {useState} from 'react'
import Logo from '../../images/EECToronto_logo.png'
import {Link}  from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMinistries, setIsOpenMinistries] = useState(false);
    const [isOpenGetInvolved, setIsOpenGetInvolved] = useState(false);
    return(	
	<div className="middle-header header-style-3">
        <HeaderTopbar/>
        <div className="container-header">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="logo">
                        <Link to="/home" title=""><img src={Logo} alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                           {/*  <li><Link className="active" to="/home" title="">Home</Link>
                                <ul>
                                    <li><Link className="active" to="/home">Home style 1</Link></li>
                                    <li><Link to="/home2">Home style 2</Link></li>
                                    <li><Link to="/home3">Home style 3</Link></li>
                                </ul> 
                            </li> */ }
                            <li><Link to="/event" title="">Event</Link>
                                {/* <ul>
                                    <li><Link to="/event" title="">Event</Link></li>
                                    <li><Link to="/event-details" title="">Event Single</Link></li>
                                </ul> */}
                            </li>
                            <li 
                                onMouseEnter={() => setIsOpen(true)} 
                                onMouseLeave={() => setIsOpen(false)}>
                                    <Link to="/about" title="" onClick={() => setIsOpen(!isOpen)}>About Us<i className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`} style={{marginLeft: '6px'}}></i></Link>
                            {isOpen && <ul style={{marginTop: '-40px'}}>
                                    <li><Link to="/about" title="">Values and Vissions</Link></li>
                                    <li><Link to="/leadership" title="">Leadership</Link></li>
                                    <li><Link to="/volunteer" title="">Board of Members</Link></li>
                                </ul>}
                            </li>
                            <li><Link to="/case" title="">New Here <></></Link></li>
                            <li><Link to="/english-service" title="">English Service<></></Link></li>
                            <li onMouseEnter={() => setIsOpenMinistries(true)}
                                    onMouseLeave={() => setIsOpenMinistries(false)}><Link to="/case" title=""
                                    onClick={() => setIsOpenMinistries(!isOpenMinistries)}>Ministries <i className={`fa ${isOpenMinistries ? "fa-angle-up" : "fa-angle-down"}`} style={{marginLeft: '6px'}}></i></Link>
                                {isOpenMinistries &&  <ul style={{marginTop: '-40px'}}>
                                <li>
                                    <Link to="/case" title="">Mission Garagama</Link></li>
                                    <li><Link to="/case" title="">Youth - Amharic</Link></li>
                                    <li><Link to="/case-single" title="">Kids Ministry </Link></li>
                                    <li><Link to="/case-single" title="">Bible Study</Link></li>
                                    <li><Link to="/case-single" title="">Media Team</Link></li>
                                </ul>}
                            </li>
                            
                            <li
                             onMouseEnter={() => setIsOpenGetInvolved(true)} 
                             onMouseLeave={() => setIsOpenGetInvolved(false)}>
                                <Link to="/home" title="" onClick={() => setIsOpenGetInvolved(!isOpenGetInvolved)}>Ministries <i className={`fa ${isOpenGetInvolved ? "fa-angle-up" : "fa-angle-down"}`} style={{marginLeft: '6px'}}></i></Link>
                                {isOpenGetInvolved &&  <ul style={{marginTop: '-40px'}}>
                                <li><Link to="/about" title="">About</Link></li>
                                    <li><Link to="/donate" title="">Donate</Link></li>
                                    <li><Link to="/volunteer" title="">Volunteer</Link></li>
                                    <li><Link to="/404" title="">Error 404</Link></li>
                                </ul>}
                            </li>
                            {/* <li><Link to="/blog">Blog</Link>
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/blog-left">Blog Left sidebar</Link></li>
                                    <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/blog-details" title="">Details</Link>
                                        <ul>
                                            <li><Link to="/blog-details" title="">Blog single</Link></li>
                                            <li><Link to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                            <li><Link to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            <li><Link to="/contact" title="">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                    <div className="contact">
                        <div className="cart-search-contact">
                            <div className="header-search-form-wrapper">
                                <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                <div className="header-search-form">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search here..."/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="mini-cart">
                                <button className="cart-toggle-btn"> <i className="fi flaticon-shopping-bag"></i> <span className="cart-count">02</span></button>
                                <div className="mini-cart-content">
                                    <div className="mini-cart-items">
                                        <div className="mini-cart-item clearfix">
                                            <div className="mini-cart-item-image">
                                                <Link to="/home"><img src={min1} alt=""/></Link>
                                            </div>
                                            <div className="mini-cart-item-des">
                                                <Link to="/home">Hoodi with zipper</Link>
                                                <span className="mini-cart-item-price">$20.15</span>
                                                <span className="mini-cart-item-quantity">x 1</span>
                                            </div>
                                        </div>
                                        <div className="mini-cart-item clearfix">
                                            <div className="mini-cart-item-image">
                                                <Link to="/home"><img src={min2} alt=""/></Link>
                                            </div>
                                            <div className="mini-cart-item-des">
                                                <Link to="/home">Ninja T-shirt</Link>
                                                <span className="mini-cart-item-price">$13.25</span>
                                                <span className="mini-cart-item-quantity">x 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart-action clearfix">
                                        <span className="mini-checkout-price">$215.14</span>
                                        <Link to="/home" className="view-cart-btn theme-btn">View Cart</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;
