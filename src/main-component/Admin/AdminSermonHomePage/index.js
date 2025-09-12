import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminSermonHome from '../../../components/admin/AdminSermon/AdminSermonHome';

const AdminSermonHomePage = () => {
    return (
        <AdminLayout title="Sermons">
            <AdminSermonHome />
        </AdminLayout>
    )
}

export default AdminSermonHomePage;