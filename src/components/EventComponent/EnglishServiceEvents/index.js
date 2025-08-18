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

                {englishServiceEvents.map((events, map) => {
                    return (
                        <div className='yae-first-event-ard'>
                            <EventCard event_image={events.event_image}
                            link_address={`/all-events/${events.id}`}
                            title={events.title}
                            date={events.date}
                            place={events.place}
                            detail_title={events.detail_title}
                            time={events.time}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnglishServiceEvents;