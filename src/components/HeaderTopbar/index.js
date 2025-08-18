import React, { useEffect, useState} from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

const HeaderTopbar = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeUnitNextSunday());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeUnitNextSunday());
        }, 1000);
    }, [])

    // function getTimeUnitNextSunday() {
    //     const now = new Date();
    //     const day = now.getDate();
    //     const hours = now.getHours();
    //     const minutes = now.getMinutes();
    //     const seconds = now.getSeconds();

    //     let dayUntilSunday = (7 - day) % 7;
    //     if (day === 0 && (hours < 10 || (hours === 10 && (minutes < 0 || seconds < 0)))) {
    //         dayUntilSunday = 0;
    //     } else if (day === 0) {
    //         dayUntilSunday = 7;
    //     }

    //     const nextSunday = new Date(
    //         now.getFullYear(),
    //         now.getMonth(),
    //         now.getDate() + dayUntilSunday,
    //         10, 0, 0
    //     );

    //     const totalSeconds = Math.floor((nextSunday - now) / 1000);

    //     const days = Math.floor(totalSeconds / (60 * 60 * 24));
    //     const hoursLeft = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    //     const minutesLeft = Math.floor((totalSeconds % (60 * 60)) / 60);
    //     const secondsLeft = totalSeconds % 60;

    //     return {
    //         days,
    //         hours: hoursLeft,
    //         minutes: minutesLeft,
    //         seconds: secondsLeft
    //     };
    // }

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft(getTimeUnitNextSunday());
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);

    
    function getTimeUnitNextSunday() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)
    
        // How many days until next Sunday
        let daysUntilSunday = (7 - dayOfWeek) % 7;
        // If today is Sunday and before 10:00 AM, count today as the next service
        if (dayOfWeek === 0 && now.getHours() < 10) {
            daysUntilSunday = 0;
        } else if (dayOfWeek === 0) {
            daysUntilSunday = 7;
        }
    
        const nextSunday = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + daysUntilSunday,
            10, 0, 0 // 10:00 AM
        );
    
        const totalSeconds = Math.max(0, Math.floor((nextSunday - now) / 1000)); // prevent negative
    
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hoursLeft = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutesLeft = Math.floor((totalSeconds % (60 * 60)) / 60);
        const secondsLeft = totalSeconds % 60;
    
        return {
            days,
            hours: hoursLeft,
            minutes: minutesLeft,
            seconds: secondsLeft
        };
    }
    
    return(	
        <div className='header-topbar'>
            <div className='live-in'>
                <div className='live-text'>LIVE IN</div>
                <div className='live-time'>{`${timeLeft.days} : ${pad(timeLeft.hours)} : ${pad(timeLeft.minutes)} : ${pad(timeLeft.seconds)}`}</div>
            </div>
                <nav className='top-nav-bars'>
                    <ul className='top-list-items'>
                        <li><Link to="/prayer">Prayer Request</Link></li>
                        <li><Link to="/donate">Give / Tithe</Link></li>
                        <li><Link to="/accept-christ">Accept Christ</Link></li>
                        <li><Link to="/discipleship">Get Involved / Serve</Link></li>

                    </ul>
                </nav>
        </div>
    )
}
function pad(num) {
    return num.toString().padStart(2, '0');
}

export default HeaderTopbar;