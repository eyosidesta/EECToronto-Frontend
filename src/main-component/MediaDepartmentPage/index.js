import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import MediaDepartment from '../../components/DepartmentComponents/MediaDepartment';

const MediaDepartmentPage = () => {
    return (
        <Fragment>
            <PageHeader title="Media Department" />
            <MediaDepartment />
        </Fragment>
    )
}
export default MediaDepartmentPage;