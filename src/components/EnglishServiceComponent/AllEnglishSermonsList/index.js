import React, { useEffect, useState } from 'react';
import './style.css';
import image from '../../../images/English_Service/joy.jpg';
import image2 from "../../../images/event/church_event_1.jpg"
import { format, parseISO } from 'date-fns';
import MediumCuteSquare from '../../SharedComponents/MediumCuteSquare';

const AllEnglishSermonsList = () => {
    const [sermons, setSermons] = useState([]);
    const [formData, setFormData] = useState({
        preacherName:'',
        sermonTitle: '',
        youtubeLink: '',
        sermonDate: '',
        sermonType: '',
      });
      const getYoutubeThumbnail = (url) => {
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
        }
        return null; // fallback if no video ID
    }
    useEffect(() => {
        fetch(`http://localhost:8080/api/sermons`)
          .then(response => response.json())
          .then(sermonData => {
            
            console.log("sermon Data:  ", sermonData);
            // const sermon_date = parseISO(sermonData.sermonDate);
    
            // const formattedDate = format(sermon_date, 'MMMM d, yyyy');

            // setSermons({
            //   ...sermonData,
            //   formattedDate,
            //   image: image
            // });
            const formattedSermons = sermonData.map(s => ({
                ...s,
                formattedDate: format(parseISO(s.sermonDate), 'MMMM d, yyyy'),
                 image: getYoutubeThumbnail(s.youtubeLink),// or dynamically choose images
              }));
              setSermons(formattedSermons);
            console.log("seee: ", sermons)
            formData.preacherName = sermonData.preacherName;
            formData.sermonTitle = sermonData.sermonTitle;
            formData.youtubeLink = sermonData.youtubeLink;
            formData.sermonDate = sermonData.sermonDate;
            formData.sermonType = "AMHARIC";
           
            // formData.eventTitle = eventData.eventTitle;
            // formData.eventDescription = eventData.eventDescription;
            // formData.eventStreet = eventData.eventStreet;
            // formData.eventCity = eventData.eventCity;
            // formData.eventType = eventData.eventType;
            // formData.eventImageUrl = eventData.eventImageUrl;
    
            // const dt = new Date(eventData.eventDate);
    
            // const dateStr = dt.toISOString().split("T")[0];
            // const timeStr = dt.toISOString().split("T")[1].substring(0,5);
    
            // formData.eventDate = dateStr;
            // formData.eventTime = timeStr;
    
          }).catch(error => {
            throw error;
          })
      }, [])
    // const all_series = [
    //     {
    //         id: 1,
    //         image: image,
    //         title: "God is Good",
    //         person: "Pastor Fitsum",
    //         date: "Jul 09, 2025",
    //     },
    //     {
    //         id: 2,
    //         image: image2,
    //         title: "Jesus is Lord",
    //         person: "Pastor Yonathan",
    //         date: "Aug 23, 2025",
    //     },
    //     {
    //         id: 3, 
    //         image: image,
    //         title: "Time to Repent",
    //         person: "Pastor Jonathan",
    //         date: "Sep 19, 2025",
    //     },

    //     {
    //         id: 4,
    //         image: image,
    //         title: "God is Good",
    //         person: "Pastor Fitsum",
    //         date: "Jul 09, 2025",
    //     },
    //     {
    //         id: 5,
    //         image: image2,
    //         title: "Jesus is Lord",
    //         person: "Pastor Yonathan",
    //         date: "Aug 23, 2025",
    //     },
    //     {
    //         id: 6,
    //         image: image,
    //         title: "Time to Repent",
    //         person: "Pastor Jonathan",
    //         date: "Sep 19, 2025",
    //     },
    //     {
    //         id: 7,
    //         image: image,
    //         title: "God is Good",
    //         person: "Pastor Fitsum",
    //         date: "Jul 09, 2025",
    //     },
    //     {
    //         id: 8,
    //         image: image2,
    //         title: "Jesus is Lord",
    //         person: "Pastor Yonathan",
    //         date: "Aug 23, 2025",
    //     },
    //     {
    //         id: 9,
    //         image: image,
    //         title: "Time to Repent",
    //         person: "Pastor Jonathan",
    //         date: "Sep 19, 2025",
    //     },
    // ]
    const handleSermonClick = (id) => {
        try {
            window.location.href = `/sermon/${id}`;
          } catch (error) {
            console.error("Navigation failed", error);
          }
    }
    return (
        <div className='all-english-sermons-list-wrapper'>
            <div className='all-english-sermons-list-container'>
            <div className='all-english-sermon-list-series-content'>
                    {sermons.map((series, index) => {
                        return (
                            <div key={index} onClick={() => handleSermonClick(series.id)}>
                                <MediumCuteSquare image={series.image} title={series.sermonTitle} person={series.preacherName} date={series.formattedDate} />
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
export default AllEnglishSermonsList;