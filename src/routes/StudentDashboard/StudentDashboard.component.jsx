import React from 'react';
import './StudentDashboard.style.css';

const StudentDashboard = (props) => {
  const { name, id, status, department, program } = props;

  return (
    <div className="dashboard-container">
      <div className="info-box">
        <h2>Student Dashboard</h2>
        <div className="info-item">
          <strong>Name:</strong> {name}
        </div>
        <div className="info-item">
          <strong>ID:</strong> {id}
        </div>
        <div className="info-item">
          <strong>Status:</strong> {status}
        </div>
        <div className="info-item">
          <strong>Department:</strong> {department}
        </div>
        <div className="info-item">
          <strong>Program:</strong> {program}
        </div>
      </div>
      <div className="info-box notifications">
        <h3>Notifications</h3>
        <ul>
            <li>Upcoming Exam: Mathematics - 12th November</li>
            <li>Fee Due: Pay by 15th November</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
