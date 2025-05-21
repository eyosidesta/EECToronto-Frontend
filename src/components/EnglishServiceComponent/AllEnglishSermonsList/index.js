import React from 'react';
import './style.css';
import image from '../../../images/English_Service/joy.jpg';
import image2 from "../../../images/event/church_event_1.jpg"
import MediumCuteSquare from '../../SharedComponents/MediumCuteSquare';

const AllEnglishSemonsList = () => {
    const all_series = [
        {
            id: 1,
            image: image,
            title: "God is Good",
            person: "Pastor Ephraim",
            date: "Jul 09, 2025",
        },
        {
            id: 2,
            image: image2,
            title: "Jesus is Lord",
            person: "Pastor Yonathan",
            date: "Aug 23, 2025",
        },
        {
            id: 3, 
            image: image,
            title: "Time to Repent",
            person: "Pastor Jonathan",
            date: "Sep 19, 2025",
        },

        {
            id: 4,
            image: image,
            title: "God is Good",
            person: "Pastor Ephraim",
            date: "Jul 09, 2025",
        },
        {
            id: 5,
            image: image2,
            title: "Jesus is Lord",
            person: "Pastor Yonathan",
            date: "Aug 23, 2025",
        },
        {
            id: 6,
            image: image,
            title: "Time to Repent",
            person: "Pastor Jonathan",
            date: "Sep 19, 2025",
        },
        {
            id: 7,
            image: image,
            title: "God is Good",
            person: "Pastor Ephraim",
            date: "Jul 09, 2025",
        },
        {
            id: 8,
            image: image2,
            title: "Jesus is Lord",
            person: "Pastor Yonathan",
            date: "Aug 23, 2025",
        },
        {
            id: 9,
            image: image,
            title: "Time to Repent",
            person: "Pastor Jonathan",
            date: "Sep 19, 2025",
        },
    ]
    const handleSermonClick = (id) => {
        try {
            window.location.href = `/sermon/${id}`;
          } catch (error) {
            console.error("Navigation failed", error);
          }
    }
    return (
        <div className='all-english-sermons-list-wrapper'>
            <div className='all-english-sermons-list-container'>
            <div className='all-sermon-series-content'>
                    {all_series.map((series, index) => {
                        return (
                            <div key={index} onClick={() => handleSermonClick(series.id)}>
                                <MediumCuteSquare image={series.image} title={series.title} person={series.person} date={series.date} />
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
export default AllEnglishSemonsList;