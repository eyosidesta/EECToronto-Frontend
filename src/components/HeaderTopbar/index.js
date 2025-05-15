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

    function getTimeUnitNextSunday() {
        const now = new Date();
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let dayUntilSunday = (7 - day) % 7;
        if (day === 0 && (hours < 10 || (hours === 10 && (minutes < 0 || seconds < 0)))) {
            dayUntilSunday = 0;
        } else if (day === 0) {
            dayUntilSunday = 7;
        }

        const nextSunday = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + dayUntilSunday,
            10, 0, 0
        );

        const totalSeconds = Math.floor((nextSunday - now) / 1000);

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
        // <div className="header-topbar">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col col-md-6 col-sm-12 col-12">
        //                 <div className="contact-intro">
        //                     <ul>
        //                         <li><i className="fi flaticon-call"></i>+000123456789</li>
        //                         <li><i className="fi flaticon-envelope"></i> Live in 01:12:02:21</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col col-md-6 col-sm-12 col-12">
        //                 <div className="contact-info">
        //                     <ul>
        //                         <li><Link to="/login">Login</Link></li>
        //                         <li><Link to="/signup">Sign Up</Link></li>
        //                         <li><Link className="theme-btn" to="/donate">Donate Now</Link></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='header-topbar'>
            <div className='live-in'>
                <div className='live-text'>LIVE IN</div>
                <div className='live-time'>0{`${timeLeft.days} : ${pad(timeLeft.hours)} : ${pad(timeLeft.minutes)} : ${pad(timeLeft.seconds)}`}</div>
            </div>
            {/* <div className='top-nav-bars'> */}
                <nav className='top-nav-bars'>
                    <ul className='top-list-items'>
                        <li><Link to="/prayer">Prayer</Link></li>
                        <li><Link to="/donate">Give</Link></li>
                        <li><Link to="/prayer">Accept Christ</Link></li>
                        <li><Link to="/prayer">Discipleship</Link></li>

                    </ul>
                </nav>
            {/* </div> */}
        </div>
    )
}
function pad(num) {
    return num.toString().padStart(2, '0');
}

export default HeaderTopbar;