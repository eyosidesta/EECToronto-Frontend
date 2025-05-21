import React from 'react';
import './style.css';
import card_img from '../../../images/event/church_event_2.jpg';
import card_img2 from '../../../images/event/church_event_1.jpg'
import CardTextButtonBig from '../../SharedComponents/CardTextButtonBig';

const EnglishServiceMnistry = () => {
    return (
        <div className='ministry-container'>
            <h2>Our Services</h2>
            <div className='ministry-card-wrapper'>
                <CardTextButtonBig card_img={card_img} card_title='I said Yes' card_btn='Learn More' />
                <CardTextButtonBig card_img={card_img2} card_title='I said Yes' card_btn='Learn More' />
                <CardTextButtonBig card_img={card_img} card_title='I said Yes' card_btn='Learn More' />
                <CardTextButtonBig card_img={card_img} card_title='I said Yes' card_btn='Learn More' />
            </div>
        </div>
    );
};

export default EnglishServiceMnistry;
