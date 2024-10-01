
import React from 'react';
import './AdminDashboard.style.css'; 

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="info-box">
        <h2>Admin Dashboard</h2>
        <div className="info-item">
          <strong>Name:</strong> Mike
        </div>
        <div className="info-item">
          <strong>Status:</strong> Active
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
