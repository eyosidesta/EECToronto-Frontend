import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminEnglishEvents from '../../../components/admin/AllAdminEvent/AdminEnglishEvents';

const AdminEnglishEventPage = () => {
    return (
        <AdminLayout title="English Events">
            <AdminEnglishEvents />
        </AdminLayout>
    )
}

export default AdminEnglishEventPage;