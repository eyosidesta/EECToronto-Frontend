import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { differenceInSeconds, nextSunday, setHours, setMinutes } from "date-fns";
import './style.css';

const LiveStream = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLive, setIsLive ] = useState(false);
    const [videoUrl, setVideoUrl ] = useState("");
    const [countDown, setCountDown] = useState("");

    const channelId = "YOUR_CHANNEL_ID";
    
    const fetchLiveStream = async() => {
        try {
            const response = await fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/live?channelId=${channelId}`);
            const data = await response.json();

            if (data.live) {
                setIsLive(true);
                setVideoUrl(data.videoUrl);
            } else {
                setIsLive(false);
            }

        } catch (error) {
            console.log("Error Checking live status: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    const updateCountDown = () => {
        const now = new Date();
        let nextStream = nextSunday(now);
        nextStream = setHours(nextStream, 10);
        nextStream = setMinutes(nextStream, 0);

        const diff = differenceInSeconds(nextStream, now);

        if (diff <= 0) {
            setCountDown("Starting Soon...");
        } else {
            const hours = Math.floor(diff / 3600);
            const minutes = Math.floor((diff % 3600) / 60);
            const seconds = diff % 60;
            setCountDown(`${hours}h ${minutes}m ${seconds}s`);
        }
    };

    useEffect(() => {
        fetchLiveStream();
        updateCountDown();

        const statusInterval = setInterval(fetchLiveStream, 30000);
        const countDownInterval = setInterval(updateCountDown, 1000);

        return () => {
            clearInterval(statusInterval);
            clearInterval(countDownInterval);
        }
    }, [])

    if (isLoading) {
        return <div className="text-center p-6">Loading stream...</div>;
      }

    return (
        <div className="liveStreamWrapper">
      <h1 className="pageTitle textCenter">Live Stream</h1>

      {true ? (
        <div className="videoContainer">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=pN1gw7p4Fwo&t=1s"}
            controls
            playing
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <div className="textCenter">
          <p className="noStreamTitle">No live stream right now.</p>
          <p className="noStreamSubtitle">Next stream starts in:</p>
          <p className="countdown">{countDown}</p>
        </div>
      )}
    </div>
      );
}

export default LiveStream;