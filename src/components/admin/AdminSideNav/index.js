import React from 'react';
import { FaHome, FaUsers, FaCog, FaBuilding, FaUserTie } from "react-icons/fa";
import './style.css';
import { Link } from 'react-router-dom';


const AdminSideNav = () => {
    return (
        <div>
            <aside className="dashboard-sidebar">
          <nav>
            <ul>
            <Link to="/admin">
              <li>
                <FaHome className="dashboard-icon" /> Dashboard
              </li>
              </Link>
              <Link to="/admin/events">
              <li>
                <FaUsers className="dashboard-icon" /> Events
              </li>
              </Link>
              <Link to="/admin/sermons">
              <li>
                <FaCog className="dashboard-icon" /> Sermons
              </li>
              </Link>
              <Link to="/admin/members">
              <li>
                <FaCog className="dashboard-icon" /> Members
              </li>
              </Link>
              <hr/>
              <li className="dashboard-section-title">Messages</li>
              <li>
                <FaCog className="dashboard-icon" /> Accept Christ 
              </li>
              <li>
                <FaCog className="dashboard-icon" /> Prayer Requests
              </li>
              <li>
                <FaCog className="dashboard-icon" /> New Members
              </li>
              <li>
                <FaCog className="dashboard-icon" /> Contact Messages
              </li>

              <li className="dashboard-section-title">Departments</li>
              <li>
                <FaBuilding className="dashboard-icon" /> Evangelism 
              </li>
              <li>
                <FaBuilding className="dashboard-icon" /> Prayer Department
              </li>
              <li>
                <FaBuilding className="dashboard-icon" /> Family Department
              </li>
              <li>
                <FaUserTie className="dashboard-icon" /> Worship Department
              </li>
              <li>
                <FaUserTie className="dashboard-icon" /> Children Department
              </li>
              <li>
                <FaUserTie className="dashboard-icon" /> Media Department
              </li>

              {/* <li
                onClick={() => setShowMembersDropdown(!showMembersDropdown)}
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              >
                <FaUsers className="dashboard-icon" /> Members
              </li>
              {showMembersDropdown && (
                <ul className="dashboard-dropdown">
                  <li>Male</li>
                  <li>Female</li>
                </ul>
              )} */}
            </ul>
          </nav>
        </aside>
        </div>
    )
}

export default AdminSideNav;