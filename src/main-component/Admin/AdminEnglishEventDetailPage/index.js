import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminEnglishEventDetail from '../../../components/admin/AllAdminEvent/AdminEnglishEventDetail';

const AdminEnglishEventDetailPage = () => {
    return (
        <AdminLayout title="English Events">
            <AdminEnglishEventDetail />
        </AdminLayout>
    )
}

export default AdminEnglishEventDetailPage;