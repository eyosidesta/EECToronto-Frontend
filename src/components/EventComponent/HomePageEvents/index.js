import React, { useState } from 'react';
import './style.css';
import {Link}  from 'react-router-dom'


const HomePageEvents = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };
    const listItems = [
        {
            title: 'Service Times',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Church Program Times',
            content: "second title"
        },
        {
            title: 'English Service',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Sunday Morning',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]
    return (
        <div className='homepage-event-img-container'>
            <div className='upcoming-events-text'>Upcoming Events...</div>
            <div className='homepage-event-container'>
                <div className='homepage-event-title'>{listItems.title}</div>
                {listItems.map((item, index) => (
                    <div key={index} className='homepage-event-details'>
                        <div
                            className={`homepage-event-title ${expandedIndex === index ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <div>{item.title}</div>
                            <div className={`event-toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                                {expandedIndex === index ? '-' : '+'}
                            </div>
                        </div>
                        <hr className={`homepage-event-divider ${expandedIndex === index ? 'expanded' : ''}`} />
                        <div className={`homepage-event-expand-content ${expandedIndex === index ? 'expanded' : ''}`}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/all-events" title="">See All Events</Link>
        </div>
    )
}

export default HomePageEvents;