import React from 'react';
import './style.css';
import img from '../../images/leadership/church_worship_18.jpg';
import { Link } from 'react-router-dom';

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
                <Link to="/leadership" className="back-button">Back</Link>
            </div>
        </div>
    );
};

export default LeaderDetail;
