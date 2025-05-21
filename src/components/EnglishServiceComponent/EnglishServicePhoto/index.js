import React from 'react';
import './style.css';
import background_image from '../../../images/English_Service/toronto_city.jpg';

const EnglishServicePhoto = () => {
    return (
        <div className="page1-container">
            <div className='img2-container'>
                <img src={background_image} alt="Toronto" />
                
                <div className='text1-content'>
                    <div className='title'>Welcome to English Service</div>
                    <div className='more'>Join us every Sunday and experience God's presence.</div>
                    <div><button>Learn More</button></div>
                </div>
            </div>
        </div>
    );
}

export default EnglishServicePhoto;
