import React from 'react';
import './style.css';

const PageHeader = (props) => {
    return (
        <div className="page-container">
            <div className="page-title">
            <h1 className="text">{props.title}</h1>
            </div>
        </div>
    )
}

export default PageHeader;