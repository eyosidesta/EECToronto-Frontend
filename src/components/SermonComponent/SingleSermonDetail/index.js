import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

const SingleSermonDetail = () => {
    return (
        <div className="single-sermon-detail-wrapper">
            <div className="single-sermon-detail-container">
                <div className="single-sermon-detail-content">
                    <div className="single-sermon-detail-latest-text">LATEST SERMONS</div>
                    <div className="single-sermon-detail-title">Foundational Truth of Christianity</div>
                    <div className="single-sermon-detail-preacher">By James Wood</div>
                    <div className="single-sermon-detail-date">Jul 10, 2025</div>
                </div>
                <div className="single-sermon-detail-latest-video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=m5fGe8gwkTo"
                    controls
                    width="100%"
                    height="100%"
                    />
                    {/* <video poster={sample} controls>
                        <source src="/videos/GEEC_video.mp4" type="video/mp4" />
                        Preaching Video
                    </video> */}
                </div>
            </div>
        </div>
    );
};

export default SingleSermonDetail;
