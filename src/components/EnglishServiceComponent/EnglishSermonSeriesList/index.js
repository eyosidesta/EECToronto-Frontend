import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

const EnglishSermonSeriesList = () => {
    return (
        <div className="english-sermon-series-list-wrapper">
            <div className="english-sermon-series-list-container">
                <div className="english-sermon-series-list-content">
                    <div className="english-sermon-series-list-latest-text">LATEST SERMONS</div>
                    <div className="english-sermon-series-list-title">Foundational Truth of Christianity</div>
                    <div className="english-sermon-series-list-preacher">By James Wood</div>
                    <div className="english-sermon-series-list-date">Jul 10, 2025</div>
                </div>
                <div className="english-sermon-series-list-latest-video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=pN1gw7p4Fwo"
                    controls
                    width="100%"
                    height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default EnglishSermonSeriesList;
