import React, {useEffect, useState} from 'react'
import pr1 from '../../images/event/img-1.jpg'
import pr2 from '../../images/event/img-2.jpg'
import pr3 from '../../images/event/img-3.jpg'
import pr4 from '../../images/event/img-4.jpg'
import pr5 from '../../images/event/img-5.jpg'
import pr6 from '../../images/event/img-6.jpg'
import {Link} from 'react-router-dom'


const EventSection2 = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/api/events").then(response => {
            response.json().then(data => setEvents(data))
        })
    }, [])
    return(
        <div className="wpo-event-area wpo-event-area2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Events</span>
                            <h2>Upcoming Events--</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                {events.map((event, index) => {
                    const thumbClass = 
                    index % 3 === 1 ? 'thumb-text-3' :
                    index % 3 === 2 ? 'thumb-text' :
                    'thumb-text-2';
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid" key={index}>
                    <div className="wpo-event-item">
                        <div className="wpo-event-img">
                            <img src={event.event_imageUrl ? event.event_imageUrl : pr1} alt=""/>
                            <div className={thumbClass}>
                                <span>25</span>
                                <span>NOV</span>
                            </div>
                        </div>
                        <div className="wpo-event-text">
                            <h2>{event.event_title}</h2>
                            <ul>
                                <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                <li><i className="fi flaticon-pin"></i>Newyork City</li>
                            </ul>
                            <p>{event.event_description}</p>
                            <Link to="/event-details">Learn More...</Link>
                        </div>
                    </div>
                </div>
                )}
                )}
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr2} alt=""/>
                                <div className="thumb-text-2">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Food for All Everyone</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr3} alt=""/>
                                <div className="thumb-text-3">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Free Treatment </h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr4} alt=""/>
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Education for All Children</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr5} alt=""/>
                                <div className="thumb-text-2">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Food for All Everyone</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr6} alt=""/>
                                <div className="thumb-text-3">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Free Treatment </h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr6} alt=""/>
                                <div className="thumb-text-3">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Free Treatment </h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={pr6} alt=""/>
                                <div className="thumb-text-3">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Free Treatment </h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link to="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection2;