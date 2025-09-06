import React from 'react';
import './style.css';
import serve_img from '../../../images/departments/Jesus_hands.jpg';
import { Link } from 'react-router-dom';


const ServeCard = (props) => {
    const handleCardClick = () => {
        window.scrollTo(10,0)
    }
    return (
        <div>
            <Link to={`${props.service_link}`} className='serve-card-wrapper' onClick={handleCardClick}>
            <div className='serve-card-img'>
                <img src={props.service_img} alt='Serve Image' />
            </div>
            <div className='service-title'>
                {props.title}
            </div>
            <div className='service-mini-detail'>
                {props.mini_detail}
            </div>
            </Link>
         </div>
    )
}
export default ServeCard;