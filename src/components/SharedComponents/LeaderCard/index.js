import React from 'react';
import './style.css';

const LeaderCard = (props) => {
    return (
        <div className='leader-card-container'>
            <div className='leader-card-img'>
                <img src={props.image} />
            </div>
            <div className='leeader-card-detail-container'>
            <div className='leader-card-name'>{props.name}</div>
            <div className='leader-card-detail'>
                {props.detail}
            </div>
            </div>
        </div>
    )
}

export default LeaderCard;