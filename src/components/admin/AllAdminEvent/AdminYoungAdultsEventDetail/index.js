import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa';
import './style.css';

const AdminYoungAdultsEventDetail = () => {
    const { eventId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [event, setEvent] = useState([]);
    const [isEditStatus, setIsEditStatus] = useState(false);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        eventTitle: event.eventTitle,
        eventDescription: '',
        eventStreet: '',
        eventCity: '',
        eventType: '',
        eventDate: new Date(),
        eventImageUrl: null,
        event_imagePreview: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const formStyle = {
        padding: '40px 10%',
        boxSizing: 'border-box',
        margin: '0 auto'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box'
    };

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
                formData.eventTitle = eventData.eventTitle;
                formData.eventDescription = eventData.eventDescription;
                formData.eventStreet = eventData.eventStreet;
                formData.eventCity = eventData.eventCity;
                formData.eventType = eventData.eventType;
                formData.eventImageUrl = eventData.eventImageUrl;

                const dt = new Date(eventData.eventDate);

                const dateStr = dt.toISOString().split("T")[0];
                const timeStr = dt.toISOString().split("T")[1].substring(0, 5);

                formData.eventDate = dateStr;
                formData.eventTime = timeStr;

                setIsLoading(false);
            }).catch(error => {
                setIsLoading(false);
                throw error;
            })
    }, [])

    const handleEditClick = () => {
        setIsEditStatus(!isEditStatus);
    }

    const handleCancelClick = () => {
        setIsEditStatus(false);
    }

    const handleImageCancelClick = () => {
        setFormData(prev => ({
            ...prev,
            eventImageUrl: null,
            event_imagePreview: null
        }))
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    }

    const handleEventSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setSuccess(null);

        const eventDate_time = new Date(`${formData.eventDate}T${formData.eventTime}`);

        const updatedEvent = {
            eventTitle: formData.eventTitle,
            eventDescription: formData.eventDescription,
            eventStreet: formData.eventStreet,
            eventCity: formData.eventCity,
            eventType: formData.eventType,
            eventImageUrl: formData.eventImageUrl,
            eventDate: eventDate_time.toISOString()
        };

        fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/events/${eventId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEvent)
        })
            .then((res) => {
                setIsSubmitting()
                if (!res.ok) throw new Error("Failed to update event");
                return res.json();
            })
            .then((updated) => {
                setSuccess(true);
                window.location.reload();
            })
            .catch((err) => {
                console.error("Error", err);
                setSuccess(false);
            }).finally(() => {
                setIsSubmitting(false);
            })
    };


    return (
        <div>
            <Link to="/admin/young-adults-events">
                <FaArrowLeft className='admin-young-adults-detail-leftarrwo' />
            </Link>
            {!isEditStatus ?
                <div className="admin-young-adults-event-detail-new-container">
                    <div className="admin-young-adults-event-detail-card">
                        <div className='ayaed-title-edit'>
                            <h2 className="admin-young-adults-event-title">{event.eventTitle}</h2>
                            <div className="ayaed-edit-dlt-btn">
                                <button className='ayaed-edit-btn' onClick={handleEditClick}>Edit</button>
                                <button className='ayaed-dlt-btn' onClick={handleEditClick}>Delete</button>
                            </div>
                        </div>

                        <ul className="admin-young-adults-event-info-list">
                            <li><i className="fa fa-calendar" aria-hidden="true"></i>{event.formattedDate}</li>
                            <li><i className="fa fa-clock-o" aria-hidden="true"></i>{event.formattedTime}</li>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i> {event.eventStreet}, {event.eventCity}</li>
                        </ul>

                        <div className="admin-young-adults-event-image">
                            <img src={event.eventImageUrl} alt="Young Adults Program" />
                        </div>
                        <p className="admin-young-adults-event-description">
                            {event.eventDescription}
                        </p>
                    </div>
                </div>
                :
                <div className="ayaed-edit-container">
                    <div className="ayaed-edit-card">
                        <div className='ayaed-title-edit'>
                            <h2 className="admin-young-adults-event-title">{event.eventTitle}</h2>
                            <button className='ayaed-edit-btn' onClick={handleCancelClick}>cancel</button>
                        </div>
                        <form onSubmit={handleEventSubmit} style={formStyle}>
                            <label htmlFor="name" style={labelStyle}>Event Title</label>
                            <input
                                type="text"
                                name="eventTitle"
                                id="eventTitle"
                                placeholder="Enter the title"
                                value={formData.eventTitle}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                            <label htmlFor="eventDescription" style={labelStyle}>Event Description</label>
                            <textarea
                                name="eventDescription"
                                id="eventDescription"
                                placeholder="Write the description here"
                                value={formData.eventDescription}
                                onChange={handleChange}
                                rows="4"
                                style={inputStyle}
                            />
                            <label htmlFor="street" style={labelStyle}>Street</label>
                            <input
                                type="text"
                                name="eventStreet"
                                id="street"
                                placeholder="Enter the street"
                                value={formData.eventStreet}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                            <label htmlFor="city" style={labelStyle}>City</label>
                            <input
                                type="text"
                                name="eventCity"
                                id="city"
                                placeholder="Enter the city"
                                value={formData.eventCity}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />

                            <label htmlFor="eventDate" style={labelStyle}>Event Date</label>
                            <input
                                type="date"
                                name="eventDate"
                                id="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />

                            <label htmlFor="eventTime" style={labelStyle}>Event Time</label>
                            <input
                                type="time"
                                name="eventTime"
                                id="eventTime"
                                value={formData.eventTime}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />


                            <label htmlFor="choice" style={labelStyle}>Event Audience</label>
                            <select
                                name="eventType"
                                id="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            >
                                <option value="">-- Select an option --</option>
                                <option value="all">Event For All</option>
                                <option value="english">English Service Event</option>
                                <option value="amharic">Young Adults Amharic Event</option>
                            </select>

                            <label style={labelStyle}>{`${formData.event_imagePreview ? 'Updated Image' : 'Current Image'}`}</label>
                            <div style={{ marginBottom: '20px' }}>
                                {!formData.event_imagePreview ? (
                                    <img
                                        src={event.eventImageUrl}
                                        alt="Event"
                                        style={{ width: '180px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                ) : (
                                    <div style={{ marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'start' }}>
                                            <img
                                                src={formData.event_imagePreview}
                                                alt="Preview"
                                                style={{ width: '140px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                            />
                                            <div style={{ color: 'red', fontSize: '1.3rem', marginLeft: '10px', cursor: 'pointer' }} onClick={handleImageCancelClick}>x</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <label htmlFor="event_image" style={labelStyle}>Upload New Image</label>
                            <input
                                type="file"
                                id="event_image"
                                name="event_image"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setFormData(prev => ({ ...prev, event_image: file }));

                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setFormData(prev => ({ ...prev, event_imagePreview: reader.result }));
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                style={inputStyle}
                            />
                            <div style={{ display: 'flex', justifyContent: 'start', gap: '15px' }}>
                                <button
                                    type="submit"
                                    style={{
                                        ...inputStyle,
                                        width: '20%',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    style={{
                                        ...inputStyle,
                                        width: '20%',
                                        background: "#EBFDEE",
                                        color: "#2011c8",
                                    }} onClick={handleCancelClick}>Cancel</button>
                                {success === true && (
                                    <p style={{ color: "green", marginTop: "10px" }}>
                                        ✅ Event updated successfully!
                                    </p>
                                )}

                                {success === false && (
                                    <p style={{ color: "red", marginTop: "10px" }}>
                                        ❌ Failed to update event. Please try again.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminYoungAdultsEventDetail;