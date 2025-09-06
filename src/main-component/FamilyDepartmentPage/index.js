import React, { Fragment } from 'react';
import PageHeader from '../../components/PageHeader';
import FamilyDepartment from '../../components/DepartmentComponents/FamilyDepartment';

const FamilyDepartmentPage = () => {
    return (
        <Fragment>
            <PageHeader title="Family Department" />
            <FamilyDepartment />
        </Fragment>
    )
}
export default FamilyDepartmentPage;