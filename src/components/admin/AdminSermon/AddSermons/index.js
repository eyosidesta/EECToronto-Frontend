import React, { useState, useEffect } from 'react';
import './style.css';
import ReactPlayer from 'react-player';
import { format, parseISO } from 'date-fns';


const AddSermons = () => {
    const [formData, setFormData] = useState({
        preacherName: '',
        sermonTitle: '',
        sermonType: '',
        youtubeLink: '',
        sermonDate: '',

    })

    useEffect(() => {
        const sermonId = 5;
        fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/sermons`)
          .then(response => response.json())
          .then(sermonData1 => {
            console.log("sermon Data:  ", sermonData1);
            // const sermonData = parseISO(sermonData.sermonDate);
    
            // const formattedDate = format(eventDate, 'MMMM d, yyyy');
            // const formattedTime = format(eventDate, 'hh:mm a');
    
            // setEvent({
            //   ...eventData,
            //   formattedDate,
            //   formattedTime,
            // });
            // formData.eventTitle = eventData.eventTitle;
            // formData.eventDescription = eventData.eventDescription;
            // formData.eventStreet = eventData.eventStreet;
            // formData.eventCity = eventData.eventCity;
            // formData.eventType = eventData.eventType;
            // formData.eventImageUrl = eventData.eventImageUrl;
    
            // const dt = new Date(eventData.eventDate);
    
            // const dateStr = dt.toISOString().split("T")[0];
            // const timeStr = dt.toISOString().split("T")[1].substring(0,5);
    
            // formData.eventDate = dateStr;
            // formData.eventTime = timeStr;
    
          }).catch(error => {
            throw error;
          })
      }, [])

    const handleSermonSubmit = (e) => {
        e.preventDefault();

        const newDate = new Date(formData.sermonDate)

        const addSermon = {
            preacherName: formData.preacherName,
            sermonTitle: formData.sermonTitle,
            youtubeLink: formData.youtubeLink,
            sermonDate: newDate.toISOString(),
            sermonType: "AMHARIC"
        }
        

        const sermId = 4;
        fetch(`https://geec-vancouver5rc-app-6tq4j.ondigitalocean.app/api/sermons`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addSermon)
        }).then(res => {
            if (!res.ok) throw new Error("Failed to add Sermon");
            return res.json();
        }).catch((err) => {
            console.error("Error", err);
        })
    }
    const handleClearClick = () => {

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className='as-container'>
            <div>
                Add New Sermon
            </div>
            <div>
                <form onSubmit={handleSermonSubmit} className="as-form-style">
                    <label htmlFor="preacherName" className="as-label-style">Preacher Name</label>
                    <input
                        type="text"
                        name="preacherName"
                        id="preacherName"
                        placeholder="Enter the title"
                        value={formData.preacherName}
                        onChange={handleChange}
                        className="as-input-style"
                        required
                    />
                    <label htmlFor="sermonTitle" className="as-label-style">Sermon Title</label>
                    <textarea
                        name="sermonTitle"
                        id="sermonTitle"
                        placeholder="Write the description here"
                        value={formData.sermonTitle}
                        onChange={handleChange}
                        rows="4"
                        className="as-input-style"
                    />
                    <label htmlFor="youtubeLink" className="as-label-style">Youtube Link</label>
                    <input
                        type="text"
                        name="youtubeLink"
                        id="youtubeLink"
                        placeholder="Enter the title"
                        value={formData.youtubeLink}
                        onChange={handleChange}
                        className="as-input-style"
                        required
                    />
                    <label htmlFor="sermonDate" className="as-label-style">Sermon Date</label>
                    <input
                        type="date"
                        name="sermonDate"
                        id="sermonDate"
                        value={formData.sermonDate}
                        onChange={handleChange}
                        className="as-input-style"
                        required
                    />
                    {formData.youtubeLink ? <ReactPlayer url={formData.youtubeLink} width="300px" height="200px" /> : <></>}
                    <div style={{ display: 'flex', justifyContent: 'start', gap: '15px' }}>
                        <button
                            type="submit"
                            className='as-input-style as-submit-btn'

                        // disabled={isSubmitting}
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className='as-input-style as-cancel-btn'
                            onClick={handleClearClick}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddSermons;