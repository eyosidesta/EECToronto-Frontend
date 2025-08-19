import React, { useEffect, useState } from 'react';
import EventCard from '../../SharedComponents/EventCard';
import event_image from '../../../images/event/church_event_4.jpg';
import event_image2 from '../../../images/event/church_event_2.jpg';
import './style.css';

const EnglishServiceEvents = () => {
    // const handleFirstEventClick = () => {
    //     window.location.href="http://localhost:3036/event"
    // }
    // const handleSecondEventClick = () => {

    // }
    const [isLoading, setIsLoading] = useState(false);
    const [allEnglishEvents, setAllEnglishEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/api/events").then(response => {
            response.json().then(eventList => {
                const formattedEvents = eventList.map(event => {
                    const eventDate = new Date(event.event_date);

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
    const [englishServiceEvents, setEnglishServiceEvents] = useState([{id: 0, title: '', detail_title: '', place: '', event_image: ''}]);
    const eventsList = [
        {
            id: 1, 
            title: 'Conference on May 3rd',
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Jun 10, 2025',
            time: '8:00 pm',
            event_image: event_image,
        },
        {
            id: 2, 
            title: 'Young Adults',
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Mar 10, 2025',
            time: '8:00 pm',
            event_image: event_image2,
        },
        {
            id: 3, 
            title: 'Young Adults',
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Mar 10, 2025',
            time: '8:00 pm',
            event_image: event_image2,
        },
        {
            id: 3, 
            title: 'Young Adults',
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Mar 10, 2025',
            time: '8:00 pm',
            event_image: event_image2,
        },
    ]
    useEffect(() => {
        setEnglishServiceEvents(eventsList);
    }, [])
    return (
        <div className='young-adults-event-container' id="english-service-events">
            <h2>Upcoming Events</h2>
            <div className='young-adults-event-content'>

                {allEnglishEvents.map((events, map) => {
                    return (
                        <div className='yae-first-event-ard'>
                            <EventCard event_image={events.event_imageUrl}
                            link_address={`/english-events/${events.id}`}
                            title={events.event_title}
                            date={events.formattedDate}
                            place={events.event_place}
                            detail_title={events.event_description}
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