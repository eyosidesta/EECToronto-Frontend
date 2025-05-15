
import React from 'react';
import './style.css';
import bannerImg from '../../images/English_Service/mountains.jpg';


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="top-section">
        <div className="welcome-text">
          Welcome to EECToronto English Service
        </div>
        <div className="welcome-video">
          <video
            className="video-player"
            src="/videos/preaching_1.mp4"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="bottom-banner">
        <img src={bannerImg} alt="Bottom Banner" />
      </div>
    </div>
  );
};

export default WelcomePage;
