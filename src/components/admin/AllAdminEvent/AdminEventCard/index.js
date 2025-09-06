import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const AdminEventCard = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10,0);
    }
    return (
        <div>
             <Link onClick={ClickHandler} to={`${props.link_address}`}>
            <div className='admin-event-card-img'>
                <img src={props.event_image} alt="Event" />
                <div className='admin-event-card-title'>{props.title}</div>
            </div>
            <div className='admin-event-card-details'>
                <div>{props.title}</div>
                <ul>
                    <li><i className='fa  fa-calendar' aria-hidden="true"></i> {props.date}</li>
                    <li><i className='fa fa-clock-o'></i> {props.time}</li>
                    {/* <li><i className='fa fa-map-marker'></i> {props.place}</li> */}
                </ul>
            </div>
            </Link>
        </div>
    )
}

export default AdminEventCard;