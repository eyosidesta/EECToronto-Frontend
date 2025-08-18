import React from 'react';
import PageHeader from '../../components/PageHeader';
import MoreSermonSeries from '../../components/SermonComponent/MoreSermonSeries';
import AllSermonSeriesList from '../../components/SermonComponent/AllSermonSeriesList';

const AllSermonSeries = () => {
    return (
        <div className='english-sermon-series-container'>
             <PageHeader title='Sermon Series'/>
             <AllSermonSeriesList />
             <MoreSermonSeries />
        </div>
    )
}

export default AllSermonSeries;