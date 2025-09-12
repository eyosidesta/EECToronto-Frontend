import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';


const AdminLatestSermon = () => {
    return (
        <div className='als-container'>
            <ReactPlayer
                    url="https://www.youtube.com/watch?v=pN1gw7p4Fwo"
                    controls
                    width="100%"
                    height="100%"
                    />
        </div>
    )
}

export default AdminLatestSermon;