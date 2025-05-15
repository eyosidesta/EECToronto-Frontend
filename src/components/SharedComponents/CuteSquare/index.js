import React from 'react';
import './style.css';

const CuteSquare = (props) => {
    return (
        <div className='cute-square-container'>
            <div className='cute-square-img'>
                <img src={props.square_img} />
            </div>
            <div className='cute-square-text'>
                <div className='cute-square-title'>{props.title}</div>
                <div className='cute-square-person'>By {props.person}</div>
            </div>
        </div>
    )
}

export default CuteSquare;