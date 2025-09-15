import React, { useEffect, useState } from 'react';
import EventCard from '../../SharedComponents/EventCard';
import event_image from '../../../images/event/church_event_4.jpg';
import event_image2 from '../../../images/event/church_event_2.jpg';
import './style.css';

const EnglishServiceEvents = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allEnglishEvents, setAllEnglishEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/events").then(response => {
            response.json().then(eventList => {
                const formattedEvents = eventList.map(event => {
                    const eventDate = new Date(event.eventDate);

                    const formattedDate = eventDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    });
                    const formattedTime = eventDate.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    });
                    return {
                        ...event,
                        formattedDate,
                        formattedTime
                    };
                })
                setAllEnglishEvents(formattedEvents);
                setIsLoading(false);
            }).catch(error => {
                setIsLoading(false);
                throw error;
            })
        })
    }, [])

    return (
        <div className='young-adults-event-container' id="english-service-events">
            <h2>Upcoming Events</h2>
            <div className='young-adults-event-content'>

                {allEnglishEvents.map((events, map) => {
                    return (
                        <div className='yae-first-event-card'>
                            <EventCard event_image={events.eventImageUrl}
                            link_address={`/english-events/${events.id}`}
                            title={events.eventTitle}
                            date={events.formattedDate}
                            place={events.event_place}
                            detail_title={events.eventDescription}
                            time={events.formattedTime}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnglishServiceEvents;