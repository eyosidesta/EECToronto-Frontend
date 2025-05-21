import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import AllEnglishSemonsList from '../../components/EnglishServiceComponent/AllEnglishSermonsList';

const AllEnglishSermons = () => {
    return (
        <div className='all-english-sermons-container'>
             <PageHeader title='All English Sermons'/>
             <div className='all-english-semons-list-css'>
             <AllEnglishSemonsList />
             </div>
        </div>
    )
}
export default AllEnglishSermons;