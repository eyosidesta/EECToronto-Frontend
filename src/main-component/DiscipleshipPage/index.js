import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import DiscipleshipDetail from '../../components/DiscipleshipComponent/DiscipleshipDetail';

const DiscipleshipPage = () => {
    return (
        <Fragment>
            <PageHeader title="Discipleship" />
            <DiscipleshipDetail />
        </Fragment>
    )
}
export default DiscipleshipPage;