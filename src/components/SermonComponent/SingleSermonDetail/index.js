// import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import './style.css';
// import { format, parseISO } from 'date-fns'
// import { useParams } from 'react-router-dom';

// const SingleSermonDetail = () => {
//     const {sermonId} = useParams();
//     const [isLoading, setIsLoading] = useState(false);
//     const [sermon, setSermon] = useState({});
    
//     useEffect(() => {
//         setIsLoading(true);
//             fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/sermons/${sermonId}`)
//             .then(response => response.json())
//             .then(sermonData => {
//                 console.log("response: " + sermonData)
//               const sermonDate = parseISO(sermonData.sermonDate);
              
//               const formattedDate = format(sermonDate, 'MMMM d, yyyy');
      
//               setSermon({
//                 ...sermonData,
//                 formattedDate,
//               });
      
//               setIsLoading(false);
//             }).catch(error => {
//                 setIsLoading(false);
//                 throw error;
//         })
//     }, [])
//     return (
//         <div className="single-sermon-detail-wrapper">
//             <div className="single-sermon-detail-container">
//                 <div className="single-sermon-detail-content">
//                     <div className="single-sermon-detail-latest-text">LATEST SERMONS</div>
//                     <div className="single-sermon-detail-title">{sermon.sermonTitle}</div>
//                     <div className="single-sermon-detail-preacher">{sermon.preacherName}</div>
//                     <div className="single-sermon-detail-date">Jul 10, 2025</div>
//                 </div>
//                 <div className="single-sermon-detail-latest-video">
//                     <ReactPlayer
//                     url="https://www.youtube.com/watch?v=m5fGe8gwkTo"
//                     controls
//                     width="100%"
//                     height="100%"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleSermonDetail;

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './style.css';
import { format, parseISO } from 'date-fns';
import { useParams } from 'react-router-dom';

const SingleSermonDetail = () => {
  const { sermonId } = useParams();
  const [sermon, setSermon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/sermons/${sermonId}`, {
      headers: { 'Cache-Control': 'no-cache' }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch sermon');
        return res.json();
      })
      .then((data) => {
        const formattedDate = format(parseISO(data.sermonDate), 'MMMM d, yyyy');
        setSermon({ ...data, formattedDate });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

//   const getYouTubeThumbnail = (url) => {
//     if (!url) return null;
//     const videoIdMatch = url.match(/[?&]v=([^&]+)/);
//     return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg` : null;
//   };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!sermon) return <div>No sermon found</div>;

//   const thumbnail = getYouTubeThumbnail(sermon.youtubeLink);

  return (
    <div className="single-sermon-detail-wrapper">
      <div className="single-sermon-detail-container">
        <div className="single-sermon-detail-content">
          <div className="single-sermon-detail-latest-text">LATEST SERMONS</div>
          <div className="single-sermon-detail-title">{sermon.sermonTitle}</div>
          <div className="single-sermon-detail-preacher">{sermon.preacherName}</div>
          <div className="single-sermon-detail-date">{sermon.formattedDate}</div>
        </div>
        <div className="single-sermon-detail-latest-video">
          {sermon.youtubeLink ? (
            <ReactPlayer
              url={sermon.youtubeLink}
              controls
              width="100%"
              height="100%"
            />
          ) : (
            <div>No video available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleSermonDetail;
