import React from 'react';
import sample from '../../../images/event/church_event_1.jpg';
import ReactPlayer from 'react-player';
import './style.css';

const SermonSeries = () => {
    return (
        <div className="sermon-series-wrapper">
            <div className="sermon-series-container">
                <div className="sermon-series-content">
                    <div className="sermon-series-latest-text">LATEST SERMONS</div>
                    <div className="sermon-series-title">Foundational Truth of Christianity</div>
                    <div className="sermon-series-preacher">By James Wood</div>
                    <div className="sermon-series-date">Jul 10, 2025</div>
                </div>
                <div className="sermon-series-latest-video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=Lhw8c4809BQ"
                    controls
                    width="100%"
                    height="100%"
                    />
                    {/* <video poster={sample} controls>
                        <source src="/videos/preaching_1.mp4" type="video/mp4" />
                        Preaching Video
                    </video> */}
                </div>
            </div>
        </div>
    );
};

export default SermonSeries;
