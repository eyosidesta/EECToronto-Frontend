import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import ChildrenDepartment from '../../components/DepartmentComponents/ChildrenDepartment';

const ChildrenDepartmentPage = () => {
    return (
        <Fragment>
            <PageHeader title="Children Department" />
            <ChildrenDepartment />
        </Fragment>
    )
}
export default ChildrenDepartmentPage;