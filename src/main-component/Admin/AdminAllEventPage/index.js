import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminAllEvents from '../../../components/admin/AllAdminEvent/AdminAllEvents';
import AdminEnglishEvents from '../../../components/admin/AllAdminEvent/AdminEnglishEvents';

const AdminAllEventPage = () => {
    return (
    <AdminLayout title="All Events">
        <AdminAllEvents />
    </AdminLayout>
    )
}

export default AdminAllEventPage;