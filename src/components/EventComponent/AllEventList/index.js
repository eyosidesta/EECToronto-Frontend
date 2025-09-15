import React, { useState, useEffect } from 'react';
import './style.css';
import EventCard from '../../SharedComponents/EventCard';

const AllEventList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allEvents, setAllEvents] = useState([]);
    
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
                setAllEvents(formattedEvents);
                setIsLoading(false);
            }).catch(error => {
                setIsLoading(false);
                throw error;
            })
        })
    }, [])
    return (
        <div>
            <div className='all-event-list-content'>
                {allEvents.map((events, map) => {
                    return (
                        <div className='individual-all-event-list'>
                            <EventCard event_image={events.eventImageUrl}
                            link_address={`${events.id}`}
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

export default AllEventList;