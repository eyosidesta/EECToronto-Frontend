import React from 'react';
import PageHeader from '../../components/PageHeader';
import BoardOfMembers from '../../components/BoardOfMembers';
import DepartmentLeaders from '../../components/DepartmentComponents/DepartmentLeaders';
import DepartmentHeader from '../../components/DepartmentComponents/DepartmentHeader';

const BoardOfMembersPage = () => {
    return (
        <div>
            <PageHeader title="Board of Members"/>
            <BoardOfMembers />
            <DepartmentHeader />
            <DepartmentLeaders />
        </div>
    )
}

export default BoardOfMembersPage;