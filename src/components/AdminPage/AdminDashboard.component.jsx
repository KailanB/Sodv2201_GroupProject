
import React from 'react';
import './AdminDashboard.style.css'; 

const AdminDashboard = (props) => {

  const {name, status } = props;

  return (
    <div className="dashboard-container">
      <div className="info-box">
        <h2>Admin Dashboard</h2>
        <div className="info-item">
          <strong>Name:</strong> {name}
        </div>
        <div className="info-item">
          <strong>Status:</strong> {status}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
