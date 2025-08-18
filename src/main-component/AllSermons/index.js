import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import AllSermonsList from '../../components/SermonComponent/AllSermonsList';

const AllSermons = () => {
    return (
        <div className='all-sermons-container'>
             <PageHeader title='All Sermons'/>
             <div className='all-semons-list-css'>
             <AllSermonsList />
             </div>
        </div>
    )
}
export default AllSermons;