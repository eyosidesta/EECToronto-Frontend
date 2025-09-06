import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import WorshipDepartment from '../../components/DepartmentComponents/WorshipDepartment';
import Header from '../../components/header';

const WorshipDepartmentPage = () => {
    return (
        <Fragment>
            <Header />
            {/* <PageHeader title="Worship Department" /> */}
            <WorshipDepartment />
        </Fragment>
    )
}
export default WorshipDepartmentPage;