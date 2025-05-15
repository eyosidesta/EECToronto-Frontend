import React from 'react';
import EventCard from '../../SharedComponents/EventCard';
import event_image from '../../../images/event/church_event_4.jpg';
import './style.css';

const YoungAdultsEvents = () => {
    // const handleFirstEventClick = () => {
    //     window.location.href="http://localhost:3036/event"
    // }
    // const handleSecondEventClick = () => {

    // }
    return (
        <div className='young-adults-event-container'>
            <h2>Young Adults Program</h2>
            <div className='young-adults-event-content'>
                <div className='yae-first-event-card'>
                    <EventCard event_image={event_image}
                        link_address="/home"
                        title='Young Adults' detail_title='Saturday Young Adults'
                        date='Every Friday' time='6:30 PM'
                        place='2275 Markham' />
                </div>
                <div className='yae-second-event-card'>
                    <EventCard event_image={event_image} title='Young Adults'
                        detail_title='Saturday Young Adults' date='Every Friday'
                        time='6:30 PM' place='2275 Markham' />
                </div>
            </div>
        </div>
    )
}

export default YoungAdultsEvents;