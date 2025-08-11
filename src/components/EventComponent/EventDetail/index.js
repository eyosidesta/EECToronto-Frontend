import React from 'react';
import './style.css';
import image from '../../../images/event/church_event_3.jpg';

const EventDetail = () => {
    return (
        <div className="event-detail-new-container">
            <div className="event-detail-card">
                <h2 className="event-title">Young Adults Program</h2>

                <ul className="event-info-list">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i> Wed, Jan 20, 2024</li>
                    <li><i className="fa fa-clock-o" aria-hidden="true"></i> 9:00 PM</li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> 2275 Markham Rd</li>
                </ul>

                <div className="event-image">
                    <img src={image} alt="Young Adults Program" />
                </div>

                <p className="event-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sit amet justo vitae mauris egestas tristique. 
                    Nulla facilisi. In vel elit non velit laoreet tincidunt. 
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    );
};

export default EventDetail;
