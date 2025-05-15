import React from 'react';
import './style.css';

const PhotoTitle = (props) => {
    return (
        <div className='photo-title-container'>
            <div className='photo-title-img'>
                <img src={props.photo} />
            </div>
            <div className='photo-title-title'>
                <div>{props.title}</div>
            </div>
        </div>
    )
}

export default PhotoTitle;