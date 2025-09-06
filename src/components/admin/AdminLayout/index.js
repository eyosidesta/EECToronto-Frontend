import React, { useState } from "react";
import "./style.css";
import AdminSideNav from "../AdminSideNav";
import { FaBars } from "react-icons/fa";

const AdminLayout = ({ title, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <button
          className="menu-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
        <h1>{title}</h1>
      </header>

      <div className="dashboard-main-layout">

        <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
          <AdminSideNav />
        </div>

        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
