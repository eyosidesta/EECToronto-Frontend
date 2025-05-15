import React from 'react';
import './style.css';

const CardTextButtonBig = (props) => {
    return (
        <div>
            <div className='ministry-card'>
                <img src={props.card_img} alt="Service 1" />
                <div className='overlay'>
                    <div className='ministry-title'>{props.card_title}</div>
                    <button>{props.card_btn}</button>
                </div>
            </div>
        </div>
    )
}
export default CardTextButtonBig;

