import React from 'react';
import './style.css';
import CuteSquare from '../../SharedComponents/CuteSquare';
import image from '../../../images/English_Service/joy.jpg';
import image2 from "../../../images/event/church_event_1.jpg"
import MediumCuteSquare from '../../SharedComponents/MediumCuteSquare';
import { Link } from 'react-router-dom';

const MoreSermonSeries = () => {
    const more_series = [
        {
            image: image,
            title: "2024 Sermons",
            person: "EECToronto",
            date: "2024",
        },
        {
            image: image2,
            title: "2025 Sermons",
            person: "EECToronto",
            date: "2025",
        },
        {
            image: image,
            title: "English Sermons",
            person: "EECToronto",
            date: "2025",
        },
    ]
    return (
        <div className='more-sermon-series-wrapper'>
            <div className='more-sermon-series-container'>
                <div className='more-sermon-series-top-title'>
                    MORE SERMON SERIES
                </div>
                <div className='more-sermon-series-content'>
                    {more_series.map((series, index) => {
                        return (
                            <div>
                                {/* <CuteSquare square_img={series.image} title={series.title} person={series.person} /> */}
                                <MediumCuteSquare image={series.image} title={series.title} person={series.person} date={series.date} />

                            </div>
                        )
                    })}

                </div>
            </div>
            <div className='more-sermon-series-button'>
                <Link to="/all-english-sermons" className='more-sermon-series-link'>
                    See all Sermons           
                </Link>
            </div>
        </div>
    );
}
export default MoreSermonSeries;