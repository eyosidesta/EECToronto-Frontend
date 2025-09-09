import React, { useState } from "react";
import "./style.css";
import AdminLayout from "../../AdminLayout";
import { Link } from "react-router-dom";

const AdminEvent = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <AdminLayout title="Event">
      <div className="events-container">
        <h1 className="events-title">Events</h1>
        <div className="admin-events-card-lists">
          <Link to="/admin/english-events">
            <div className="admin-events-card event-card-1">
              <p>English Events</p>
              <h2>12</h2>
              <p>7 days events: 3</p>
            </div>
          </Link>
          <Link to="/admin/young-adults-events">
            <div className="admin-events-card event-card-2"><p>Young Adults Amharic</p>
              <h2>12</h2>
              <p>7 days events: 3</p>
            </div>
          </Link>
          <Link to="/admin/all-events">
            <div className="admin-events-card event-card-3"><p>All Events </p>
              <h2>12</h2>
              <p>7 days events: 3</p>
            </div>
          </Link>
          <Link to="/admin/all-events">
            <div className="admin-events-card event-card-4"><p>Upcoming Events</p>
              <h2>12</h2>
              <p>30 days events: 3</p>
            </div>
          </Link>
        </div>

        {/* Tabs */}
        <div className="events-tabs">

          <button
            className={activeTab === "upcoming" ? "tab active" : "tab"}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className={activeTab === "add" ? "tab active" : "tab"}
            onClick={() => setActiveTab("add")}
          >
            Add Event
          </button>
        </div>

        {/* Tab Content */}
        <div className="events-content">
          {activeTab === "add" ? (
            <form className="event-form">
              <label>
                Event Title:
                <input type="text" placeholder="Enter event name" />
              </label>
              <label>
                Date:
                <input type="date" />
              </label>
              <label>
                Location:
                <input type="text" placeholder="Enter event location" />
              </label>
              <button type="submit">Add Event</button>
            </form>
          ) : (
            <div className="event-list">
              <div className="events-card">
                <h4>Team Meeting</h4>
                <p>Date: 2025-09-05</p>
                <p>Location: Toronto HQ</p>
              </div>
              <div className="events-card">
                <h4>Product Launch</h4>
                <p>Date: 2025-09-15</p>
                <p>Location: Online</p>
              </div>
              <div className="events-card">
                <h4>Workshop</h4>
                <p>Date: 2025-09-20</p>
                <p>Location: Ottawa</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEvent;
