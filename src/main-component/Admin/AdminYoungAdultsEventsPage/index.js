import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminYoungAdultsEvents from '../../../components/admin/AllAdminEvent/AdminYoungAdultsEvents';

const AdminYoungAdultsEventsPage = () => {
    return (
        <AdminLayout title="Young Adults Events">
            <AdminYoungAdultsEvents />
        </AdminLayout>
    )
}

export default AdminYoungAdultsEventsPage;