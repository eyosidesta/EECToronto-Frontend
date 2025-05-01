import React from 'react';
import './style.css';
import card_img from '../../images/event/church_event_2.jpg';

const EnglishServiceMnistry = () => {
    return (
        <div className='ministry-container'>
            <h2>Our Services</h2>
            <div className='ministry-card-wrapper'>

                {/* Card 1 */}
                <div className='ministry-card'>
                    <img src={card_img} alt="Service 1" />
                    <div className='overlay'>
                        <div className='ministry-title'>I Said Yes</div>
                        <button>Learn More</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='ministry-card'>
                    <img src={card_img} alt="Service 2" />
                    <div className='overlay'>
                        <div className='ministry-title'>Sunday School</div>
                        <button>Learn More</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='ministry-card'>
                    <img src={card_img} alt="Service 3" />
                    <div className='overlay'>
                        <div className='ministry-title'>Youth Ministry</div>
                        <button>Learn More</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='ministry-card'>
                    <img src={card_img} alt="Service 4" />
                    <div className='overlay'>
                        <div className='ministry-title'>Bible Study</div>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EnglishServiceMnistry;
