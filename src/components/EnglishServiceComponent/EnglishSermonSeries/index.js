import React from 'react';
import PageHeader from '../../PageHeader';
import SermonSeries from '../../SermonComponent/SermonSeries';
import MoreSermonSeries from '../../SermonComponent/MoreSermonSeries';

const EnglishSermonSeries = () => {
    return (
        <div className='english-sermon-series-container'>
             <PageHeader title='Sermons'/>
             <SermonSeries />
             <MoreSermonSeries />
        </div>
    )
}

export default EnglishSermonSeries;