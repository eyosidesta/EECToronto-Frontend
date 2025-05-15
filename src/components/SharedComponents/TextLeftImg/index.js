import React from 'react';
import './style.css';

const TextLeftImg = (props) => {
    return (
        <div className='text-left-container'>
            <div className='text-left-content'>
                <div className='text-left-title'>
                    {props.title}
                </div>
                <div className='text-left-content'>
                    {props.content}
                </div>
                <div className='text-left-btn'>
                    <button style={{backgroundColor: props.btn_bg_color, color: props.btn_color}}>{props.btn}</button>
                </div>
            </div>
            <div className='text-left-img'>
                <img src={props.left_img} />
            </div>
        </div>
    );
}

export default TextLeftImg;