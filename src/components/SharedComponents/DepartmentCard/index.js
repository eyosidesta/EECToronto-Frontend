import React from 'react';
import './style.css';

const DepartmentCard = (props) => {
    return (
        <div className='department-card-container'>
            <div className='department-card-img'>
                <img src={props.image} />
            </div>
            <div className='department-card-detail-container'>
            <div className='department-card-name'>{props.name}</div>
            <div className='department-card-detail'>
                {props.detail}
            </div>
            </div>
        </div>
    )
}

export default DepartmentCard;