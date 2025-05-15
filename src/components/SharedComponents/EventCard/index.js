import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
    return (
        <div>
            <Link to={`${props.link_address}`}>
            <div className='event-card-img'>
                <img src={props.event_image} alt="Event" />
                <div className='event-card-title'>{props.title}</div>
            </div>
            <div className='event-card-details'>
                <div>{props.detail_title}</div>
                <ul>
                    <li><i className='fa  fa-calendar' aria-hidden="true"></i> {props.date}</li>
                    <li><i className='fa fa-clock-o'></i> {props.time}</li>
                    <li><i className='fa fa-map-marker'></i> {props.place}</li>
                </ul>
            </div>
            </Link>
        </div>
    );
};

export default EventCard;
