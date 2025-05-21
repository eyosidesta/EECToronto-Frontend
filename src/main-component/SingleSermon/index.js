import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import SingleSermonDetail from '../../components/SermonComponent/SingleSermonDetail';

const SingleSermon = () => {
    return (
        <div className='single-sermon'>
             <PageHeader title='Sermon'/>
             <SingleSermonDetail />
        </div>
    )
}
export default SingleSermon;