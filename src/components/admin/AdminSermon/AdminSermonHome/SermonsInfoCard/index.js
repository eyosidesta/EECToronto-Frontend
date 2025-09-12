import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import './style.css';

const SermonsInfoCard = (props) => {
    return (
        <div className='si-container' style={{ backgroundColor: props.backgroundColor }}>
            <div className='si-title-arrow'>
                <div className='si-title'>{props.title}</div>
                <div className='si-arrow'>
                    <GoArrowUpRight />
                </div>
            </div>
            <div className='si-value'>{props.value}</div>
            <div className='si-description'>{props.description}</div>
        </div>
    )
}

export default SermonsInfoCard;