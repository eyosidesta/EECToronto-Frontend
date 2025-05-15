import React from 'react';
import './style.css';

const PhotoTitleBtn = (props) => {
    return (
        <div className='photo-title-btn-container'>
            <div className='photo-title-btn-img'>
                <img src={props.photo} />
            </div>
            <div className='title-btn'>
            <div className='photo-title-btn-title'>
                {props.title}
            </div>
            <div className='title-description'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
            <button>Sign Up to Serve</button>
            </div>
        </div>
    )
}

export default PhotoTitleBtn;