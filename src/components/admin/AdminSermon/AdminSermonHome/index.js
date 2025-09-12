import React from 'react'
import SermonTop from '../SermonTop';
import AdminLatestSermon from './LatestSermon';
import './style.css';
import TwoSermons from '../TwoSermons';
import AddSermons from '../AddSermons';

const AdminSermonHome = () => {
    return (
        <div>
            <div className='as-top'>
                <SermonTop />
            </div>
            <div className='ash-two-sermons-add'>
                <div>
                    <TwoSermons />
                </div>
                <div>
                    <AddSermons />
                </div>
            </div>
        </div>
    )
}

export default AdminSermonHome;