import React from 'react';
import './style.css';
import img from '../../images/leadership/church_worship_18.jpg';

const LeaderDetail = (props) => {
    return (
        <div className='leader-container'>
            <div className='img-container'>
                <img src={img} alt="Leader" />
            </div>
            <div className="text-items">
                <h3>Pastor Ephraim</h3>
                <h4>Senior Pastor</h4>
                <div className="contact-icons">
                    <div>Email Icon</div>
                    <div>Phone Icon</div>
                </div>
                <button className="back-button">Back</button>
            </div>
        </div>
    );
};

export default LeaderDetail;
