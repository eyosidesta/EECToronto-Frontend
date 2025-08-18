import React from 'react';
import './style.css';
import headerImg from '../../../images/event/church_event_1.jpg';
import { Link } from 'react-router-dom';

const EnglishServiceHeader = () => {
    return (
        <div className='header-container'>
            <nav className='nav-links'>
                <a href="#english-service-events">Events</a>
                <a href="#english-sermon">Watch Sermons</a>
                <a href="/accept-christ">Accept Christ</a>
                <Link to="/contact">Contact Us</Link>
            </nav>

            <div className='header-content'>
                <div className='text-content'>
                    <h1>Welcome</h1>
                    <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='image-container'>
                    <img src={headerImg} alt="Header" />
                </div>
            </div>
        </div>
    );
}

export default EnglishServiceHeader;
