import React from 'react';
import Dashboard from '../Dashboard';
import AdminSideNav from '../AdminSideNav';
import './style.css';
const AdminHome = () => {
    return (
        <div className="app-container">
      {/* Top Header */}
      <header className="dashboard-header">
        <h1>Dashboard Overview</h1>
      </header>

      <div className="dashboard-main-layout">
        {/* Sidebar */}
        <AdminSideNav />

        {/* Content Area */}
        <Dashboard />
      </div>
    </div>
    )
}

export default AdminHome;