import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import BibleStudyDetail from '../../components/BibleStudyComponent/BibleStudyDetail';

const BibleStudyPage = () => {
    return (
        <Fragment>
            <PageHeader title="Discipleship" />
            <BibleStudyDetail />
        </Fragment>
    )
}
export default BibleStudyPage;