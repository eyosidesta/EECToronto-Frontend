import React, { Fragment } from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import AllEvents from '../../components/EventComponent/AllEvents';

const AllEventsPage = () => {
    return (
        <Fragment>
            <PageHeader title='Upcoming Events'/>
            <AllEvents />
        </Fragment>
    )
}

export default AllEventsPage;

