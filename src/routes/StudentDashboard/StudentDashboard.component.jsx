import {React, useState, useEffect } from 'react';
import './StudentDashboard.style.css';
import { GetCookieByName } from '../../Utilities.js';
import StudentDashboardCourseDiv from './StudentDashboardCourseDiv.component.jsx';

const StudentDashboard = (props) => {
  //const { name, id, status, department, program } = props;
  const [userCourses, setUserCourses] = useState([]);

  const[users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const[user, setUser] = useState(() => {
    let userEmail = GetCookieByName("userEmail=");
    let userExists = users.find(savedUser => savedUser.email.toLowerCase() === userEmail.toLowerCase());
    if(userExists)
    {
      // check first that there is courses to add to state
      if(userExists.courses.length > 0)
      {
        setUserCourses([...userExists.courses]);
      }
      
      return userExists;
    }
    else
    {
      return '';
    }
  });


  



    
  const RemoveCourse = (code) => {

    // alert(user.courses.length);
    const index = user.courses.findIndex(course => course.CourseCode === code);
    
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    for(let i = 0 ; i < savedUsers.length ; i++)
    {
      if(savedUsers[i].email.toLowerCase() === user.email.toLowerCase())
      {
        savedUsers[i].courses.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(savedUsers));
      }
      else{
        console.log("error finding user!");
      }
    }
    user.courses.splice(index, 1);
    const updatedCourses = user.courses;
    setUserCourses([...updatedCourses]);

  }

    // useEffect(() => {

      
    // }, [users]);

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
          {userCourses.map((course, index) => (
            <div>
              <StudentDashboardCourseDiv Course = {course} RemoveCourse={RemoveCourse}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
