import React from 'react';
import './style.css';
import Header from '../header';

const PageHeader = (props) => {
    return (
        <div className='page-header-container'>
            <Header />
        
        <div className="page-container">
            <div className="page-title">
            <h1 className="text">{props.title}</h1>
            </div>
            </div>
        </div>
    )
}

export default PageHeader;