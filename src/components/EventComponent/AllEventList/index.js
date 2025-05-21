import React, { useState, useEffect } from 'react';
import './style.css';
import EventCard from '../../SharedComponents/EventCard';
import event_image from '../../../images/event/church_event_1.jpg';
import event_image2 from '../../../images/event/church_event_2.jpg';
import event_image3 from '../../../images/event/church_event_3.jpg';
import event_image4 from '../../../images/event/church_event_4.jpg';



const AllEventList = () => {
    const [allEvents, setAllEvents] = useState([{id: 0, title: '', detail_title: '', place: '', event_image: ''}]);
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
            title: 'English Service',
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Jul 09, 2025',
            time: '8:00 pm',
            event_image: event_image3,
        },
        {
            id: 4, 
            title: "Anual Mother's Program",
            detail_title: 'Saturday Young Adults',
            place: '2275 Markham',
            date: 'Aug 18, 2025',
            time: '8:00 pm',
            event_image: event_image4,
        },
    ]
    
    useEffect(() => {
        setAllEvents(eventsList);
    }, [])
    return (
        <div>
            <div className='all-event-list-content'>
                {allEvents.map((events, map) => {
                    return (
                        <div className='individual-all-event-list'>
                            <EventCard event_image={events.event_image}
                            link_address={`${events.id}`}
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

export default AllEventList;