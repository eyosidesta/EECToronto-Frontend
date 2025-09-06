import React, { useState } from "react";
import "./style.css";
import { FaHome, FaUsers, FaCog, FaBuilding, FaUserTie } from "react-icons/fa";
import AdminSideNav from "../AdminSideNav";
import AdminLayout from "../AdminLayout";

const Dashboard = () => {
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);

  return (
    <AdminLayout title="Dashboard">
      <div className="dashboard-card">
            <div>Active Users</div>
            <p>1,245</p>
          </div>
          <div className="dashboard-card">
            <div>Revenue</div>
            <p>$54,000</p>
          </div>
          <div className="dashboard-card">
            <div>New Signups</div>
            <p>320</p>
          </div>
    </AdminLayout>
  );
};

export default Dashboard;
