import React from 'react';
import './style.css';

const StoryCard = (props) => {
    return (
        <div className='story-card-container'>
            <div className='story-card-content'>

                    <img src={props.story_img} />
            </div>
            <div className='story-card-texts'>
                <h6>
                    {props.title}
                </h6>
                <h5>
                    {props.caption}
                </h5>
                <div className='story-card-date'>
                    {props.date}
                </div>
                <div className='story-card-btn'>
                    {props.read_more}  <i className='fa fa-angle-right'></i>
                </div>
            </div>
        </div>
    )
}

export default StoryCard;