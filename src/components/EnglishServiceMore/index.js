import React from 'react';
import sample from '../../images/event/church_event_1.jpg';
import './style.css';

const EnglishServiceMore = () => {
    return (
        <div className='english-more-container'>
            <div className='more-content'>
                <div className='more-text-container'>
                    <div className='more-welcome-text'>Welcome</div>
                    <div className='more-welcome-description'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, .</div>
                        <div>
                        it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting,
                        </div>
                        <div className='more-buttons'>
                            <div><button>See More Sermons</button></div>
                            <div><button>Welcome to Church</button></div>
                        </div>
                </div>
                <div className='more-video-container'>
                    <div className='see-sermons'>See Our Sermons</div>
                    <div className='more-video'>
                        <video width='100%' height='100%' poster={sample} controls>
                            <source src="/videos/preaching_1.mp4" type="video/mp4" />
                            Your browser doesn't support the video tag.
                        </video>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EnglishServiceMore;