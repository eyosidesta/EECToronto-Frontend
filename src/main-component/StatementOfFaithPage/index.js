import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import StatmentofFaithDetail from '../../components/StatementOfFaithComponent/StatmentofFaithDetail';

const StatementOfFaithPage = () => {
    return (
        <Fragment>
            <PageHeader title="Statment of Faith" />
            <StatmentofFaithDetail />
        </Fragment>
    )
}
export default StatementOfFaithPage;