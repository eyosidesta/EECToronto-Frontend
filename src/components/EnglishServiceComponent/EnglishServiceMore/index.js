import React from 'react';
import { Link } from 'react-router-dom';
import sample from '../../../images/event/church_event_1.jpg';
import './style.css';

const EnglishServiceMore = () => {
    const ClickHandler = () => { 
        window.scrollTo(10, 0); 
    }
    return (
        <div className='english-more-container' id="english-sermon">
            <div className='more-content'>
                <div className='more-text-container'>
                    <div className='more-welcome-text'>Welcome</div>
                    <div className='more-welcome-description'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, .</div>
                        <div className='more-welcom-second-detail'>
                        it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting,
                        </div>
                        <div className='more-buttons'>
                            <div><Link onClick={ClickHandler} to="/english-sermon-series" className="button-link">See More Sermons</Link></div>
                            <div><Link onClick={ClickHandler} to="/all-sermons" className="button-link">Welcome to Church</Link></div>
                        </div>
                </div>
                <div className='more-video-container'>
                    <div className='see-sermons'>See Our Sermons</div>
                    <div className='more-video'>
                        <video width='100%' height='100%' controls> {/*  poster={sample} */}
                            <source src="/videos/Pastor_Fitsum_Preaching.mp4" type="video/mp4" />
                            Preaching Video
                        </video>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EnglishServiceMore;