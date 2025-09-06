import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa';
import './style.css';

const AdminEnglishEventDetail = () => {
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState([]);
  const [isEditStatus, setIsEditStatus] = useState(false);

  const [formData, setFormData] = useState({
    event_title: event.event_title,
    event_description: '',
    event_street: '',
    event_city: '',
    comment: '',
    event_image: null,
    event_imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formStyle = {
    // width: '80%',
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
    fetch(`http://localhost:8080/api/events/${eventId}`)
      .then(response => response.json())
      .then(eventData => {
        const eventDate = parseISO(eventData.event_date);

        const formattedDate = format(eventDate, 'MMMM d, yyyy');
        const formattedTime = format(eventDate, 'hh:mm a');

        setEvent({
          ...eventData,
          formattedDate,
          formattedTime,
        });
        formData.event_title = eventData.event_title;
        formData.event_description = eventData.event_description;
        formData.event_street = eventData.event_street;
        formData.event_city = eventData.event_city;

        setIsLoading(false);
      }).catch(error => {
        setIsLoading(false);
        throw error;
      })
  }, [])

  const handleEditClick = () => {
    setIsEditStatus(!isEditStatus);
  }

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("event_title", formData.event_title);
    data.append("event_description", formData.event_description);
    data.append("event_street", formData.event_street);
    data.append("event_city", formData.event_city);
    if (formData.event_imageUrl) {
      data.append("event_imageUrl", formData.event_imageUrl);
    }

    fetch(`http://localhost/8080/api/events/${eventId}`, {
      method: 'POST',
      body: data
    }).then((res) => {
      res.json().then((updated) => {
        console.log("updated successfuly: ", updated)
      })
    }).catch((err) => {
      console.error('Error', err);
    })
  }

  return (
    <div>
      <Link to="/admin/english-events">
        <FaArrowLeft className='admin-english-detail-leftarrwo' />
      </Link>
      {!isEditStatus ?
        <div className="admin-english-event-detail-new-container">
          <div className="admin-english-event-detail-card">
            <div className='aeed-title-edit'>
              <h2 className="admin-english-event-title">{event.event_title}</h2>
              <div class="aeed-edit-dlt-btn">
                <button className='aeed-edit-btn' onClick={handleEditClick}>Edit</button>
                <button className='aeed-dlt-btn' onClick={handleEditClick}>Delete</button>
              </div>
            </div>

            <ul className="admin-english-event-info-list">
              <li><i className="fa fa-calendar" aria-hidden="true"></i>{event.formattedDate}</li>
              <li><i className="fa fa-clock-o" aria-hidden="true"></i>{event.formattedTime}</li>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i> {event.event_place}</li>
            </ul>

            <div className="admin-english-event-image">
              <img src={event.event_imageUrl} alt="Young Adults Program" />
            </div>
            <p className="admin-english-event-description">
              {event.event_description}
            </p>
          </div>
        </div>
        :
        <div className="aeed-edit-container">
          <div className="aeed-edit-card">
            <div className='aeed-title-edit'>
              <h2 className="admin-english-event-title">{event.event_title}</h2>
              <button className='aeed-edit-btn' onClick={handleEditClick}>cancel</button>
            </div>
            <form onSubmit={handleSubmit} style={formStyle}>
              <label htmlFor="name" style={labelStyle}>Event Title</label>
              <input
                type="text"
                name="event_title"
                id="event_title"
                placeholder="Enter your name"
                value={formData.event_title}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <label htmlFor="event_description" style={labelStyle}>Event Description</label>
              <textarea
                name="event_description"
                id="event_description"
                placeholder="Write your comment here"
                value={formData.event_description}
                onChange={handleChange}
                rows="4"
                style={inputStyle}
              />
              <label htmlFor="street" style={labelStyle}>Street</label>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="Enter the street"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <label htmlFor="city" style={labelStyle}>City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter the city"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />

<label htmlFor="event_date" style={labelStyle}>Event Date</label>
<input
  type="date"
  name="event_date"
  id="event_date"
  value={formData.event_date || ''}
  onChange={handleChange}
  style={inputStyle}
  required
/>

<label htmlFor="event_time" style={labelStyle}>Event Time</label>
<input
  type="time"
  name="event_time"
  id="event_time"
  value={formData.event_time || ''}
  onChange={handleChange}
  style={inputStyle}
  required
/>


              <label htmlFor="choice" style={labelStyle}>Event Audience</label>
              <select
                name="choice"
                id="choice"
                value={formData.choice}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">-- Select an option --</option>
                <option value="all">Event For All</option>
                <option value="english">English Service Event</option>
                <option value="amharic">Young Adults Amharic Event</option>
              </select>

              <label style={labelStyle}>Current Image</label>
              <div style={{ marginBottom: '20px' }}>
                {event.event_imagePreview ? (
                  <img
                    src={event.event_imageUrl}
                    alt="Event"
                    style={{ width: '180px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                ) : (
                  <div style={{ marginTop: '10px' }}>
                    <strong>Preview:</strong>
                    <img
                      src={formData.event_imagePreview}
                      alt="Preview"
                      style={{ width: '140px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                )}
              </div>

              <label htmlFor="event_image" style={labelStyle}>Upload New Image</label>
              <input
                type="file"
                id="event_image"
                name="event_image"
                accept="image/*"
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

              {/* Show preview if admin picked a new image */}
              {formData.event_imagePreview && (
                <div style={{ marginTop: '10px' }}>
                  <strong>Preview:</strong>
                  <img
                    src={formData.event_imagePreview}
                    alt="Preview"
                    style={{ width: '140px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              )}




              <button
                type="submit"
                style={{
                  ...inputStyle,
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={handleEventSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default AdminEnglishEventDetail;