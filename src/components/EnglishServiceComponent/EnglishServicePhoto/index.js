import React from 'react';
import './style.css';
// import background_image from '../../../images/English_Service/toronto_city.jpg';
import background_img from '../../../images/English_Service/vancouver_fall_1.jpg';

const EnglishServicePhoto = () => {
    return (
        <div className="page1-container">
            <div className='img2-container'>
                <img src={background_img} alt="Vancouver City" />
                
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
