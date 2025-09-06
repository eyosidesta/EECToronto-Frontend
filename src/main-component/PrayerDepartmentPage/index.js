import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import PrayerDepartment from '../../components/DepartmentComponents/PrayerDepartment';

const PrayerDepartmentPage = () => {
    return (
        <Fragment>
            <PageHeader title="Prayer Department" />
            <PrayerDepartment />
        </Fragment>
    )
}
export default PrayerDepartmentPage;