import React, {useEffect, useState} from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';


const EnglishEventDetail = () => {
    const {eventId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [event, setEvent] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
            fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/events/${eventId}`)
            .then(response => response.json())
            .then(eventData => {
              const eventDate = parseISO(eventData.eventDate);
              
              const formattedDate = format(eventDate, 'MMMM d, yyyy');
              const formattedTime = format(eventDate, 'hh:mm a'); 
      
              setEvent({
                ...eventData,
                formattedDate,
                formattedTime,
              });
      
              setIsLoading(false);
            }).catch(error => {
                setIsLoading(false);
                throw error;
        })
    }, [])
    return (
        <div className="english-event-detail-new-container">
            <div className="english-event-detail-card">
                <h2 className="english-event-title">{event.eventTitle}</h2>

                <ul className="english-event-info-list">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>{event.formattedDate}</li>
                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>{event.formattedTime}</li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> {event.event_place}</li>
                </ul>

                <div className="english-event-image">
                    <img src={event.eventImageUrl} alt="Young Adults Program" />
                </div>
                <p className="english-event-description">
                   {event.eventDescription}
                </p>
            </div>
        </div>
    );
};

export default EnglishEventDetail;
