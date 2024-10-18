import {React, useState, useEffect } from 'react';
import './StudentDashboard.style.css';
import { GetCookieByName } from '../../Utilities.js';
import CourseDiv from './CourseDiv.component.jsx';

const StudentDashboard = (props) => {
  //const { name, id, status, department, program } = props;


  const[user, setUser] = useState([]);

    

    useEffect(() => {

        
      let userEmail = GetCookieByName("userEmail=")

      const savedUsers = JSON.parse(localStorage.getItem('users'));

      
      let userExists = savedUsers.find(savedUser => savedUser.email.toLowerCase() === userEmail.toLowerCase());


      if(userExists)
      {
          //alert(userExists.studentId);
          setUser(userExists);  
      }
    }, []);

  return (
    <div>
      <div className="dashboard-container">
        <div className="info-box">
          <h2>Student Dashboard</h2>
          <div className="info-item">
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </div>
          <div className="info-item">
            <strong>ID:</strong> {user.studentId}
          </div>
          <div className="info-item">
            <strong>Status:</strong> {user.status}
          </div>
          <div className="info-item">
            <strong>Department:</strong> {user.department}
          </div>
          <div className="info-item">
            <strong>Program:</strong> {user.program}
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
      <div>
          {user.courses.map((course, index) => (
            <div>
              <CourseDiv Course = {course} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
