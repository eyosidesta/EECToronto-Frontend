import React from 'react';
import './style.css';

const BigSquareImg = (props) => {
    return (
        <div className='big-square-container'>
            <div className='big-square-img'>
                <img src={props.image} />
            </div>
            <div className='big-square-content'>
                <h1 className='big-square-text'>{props.text}</h1>
                <div className='big-square-btn'><button>{props.btn}</button></div>
            </div>
        </div>
    );
}
export default BigSquareImg;