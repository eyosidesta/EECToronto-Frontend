import React from 'react';
import PageHeader from '../../PageHeader';
import MoreSermonSeries from '../../SermonComponent/MoreSermonSeries';
import EnglishSermonSeriesList from '../EnglishSermonSeriesList';

const EnglishSermonSeries = () => {
    return (
        <div className='english-sermon-series-container'>
             <PageHeader title='Sermon Series'/>
             <EnglishSermonSeriesList />
             <MoreSermonSeries />
        </div>
    )
}

export default EnglishSermonSeries;