import React from 'react';
import './style.css';

const MediumCuteSquare = (props) => {
    return (
        <div className='medium-cute-square-container'>
            <div className='medium-cute-square-img'>
                <img src={props.image} alt="Sermon Image"/>
            </div>
            <div className='medium-cute-square-content'>
                <div className='medium-cute-square-title'>{props.title}</div>
                {props.person && <div className='medium-cute-squre-detail-container'>
                <div className='medium-cute-square-person'>{props.person}</div>
                {props.date && <div className='medium-cute-square-date'>{props.date}</div>}
                </div>}
            </div>
        </div>
    )
}

export default MediumCuteSquare;