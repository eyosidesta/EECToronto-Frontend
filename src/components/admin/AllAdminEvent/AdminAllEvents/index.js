import React, { useEffect, useState } from 'react';
import AdminEventCard from '../AdminEventCard';
import './style.css';

const AdminAllEvents = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [allEnglishEvents, setAllEnglishEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/api/events/type/english").then(response => {
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
        <div className='admin-english-event-container'>
        <h2>Upcoming Events</h2>
        <div className='admin-english-event-content'>

            {allEnglishEvents.map((events, map) => {
                return (
                    <div className='admin-english-first-event-card'>
                        <AdminEventCard event_image={events.eventImageUrl}
                        link_address={`/admin/english-events/${events.id}`}
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

export default AdminAllEvents;