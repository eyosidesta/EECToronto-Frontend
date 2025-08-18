import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import PrayerDetail from '../../components/PrayerComponent/PrayerDetail';

const PrayerPage = () => {
    return (
        <Fragment>
            <PageHeader title="Prayer Request" />
            <PrayerDetail />
        </Fragment>
    )
}
export default PrayerPage;