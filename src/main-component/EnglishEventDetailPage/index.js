import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import EnglishEventDetail from '../../components/EventComponent/EnglishEventDetail';

const EnglishEventDetailPage = () => {
    return (
        <Fragment>
            <PageHeader title="Event" />
            <EnglishEventDetail />
        </Fragment>
    )
}
export default EnglishEventDetailPage;