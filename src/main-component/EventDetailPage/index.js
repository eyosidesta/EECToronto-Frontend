import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import EventDetail from '../../components/EventComponent/EventDetail';

const EventDetailPage = () => {
    return (
        <Fragment>
            <PageHeader title="Event" />
            <EventDetail />
        </Fragment>
    )
}
export default EventDetailPage;