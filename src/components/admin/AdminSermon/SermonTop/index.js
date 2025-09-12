import React from 'react';
import './style.css';
import SermonsInfoCard from '../AdminSermonHome/SermonsInfoCard';
import AdminLatestSermon from '../AdminSermonHome/LatestSermon';

const SermonTop = () => {
    return (
        <div>
            <div className='st-welcome'>Welcome to Sermons</div>
            <div className='st-small-info'>sermons information</div>
            <div className='st-card-latest'>
                <div className='si-cards'>
                    <SermonsInfoCard
                        link="admin/group-sermons"
                        title="Total"
                        value="24"
                        description="total sermons posted"
                        backgroundColor="#FCF0E5"
                        color="#000"
                    />
                    <SermonsInfoCard
                        link="admin/group-sermons"
                        title="Total"
                        value="24"
                        description="total sermons posted"
                        backgroundColor="#EBF0FE"
                        color="#000"
                    />
                    <SermonsInfoCard
                        link="admin/group-sermons"
                        title="Total"
                        value="24"
                        description="total sermons posted"
                        backgroundColor="#ECF5E8"
                        color="#000"
                    />
                    <SermonsInfoCard
                        link="admin/group-sermons"
                        title="Total"
                        value="24"
                        description="total sermons posted"
                        backgroundColor="#EDF5F4"
                        color="#000"
                    />
                </div>
                <div>
                    <AdminLatestSermon />
                </div>
            </div>
        </div>
    )
}

export default SermonTop;