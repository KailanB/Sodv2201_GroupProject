import React from 'react';
import './AdminAddCourses.style.css';

const AdminAddCourses = (props) => {

    const {CourseName, CourseCode, Term, StartDate, EndDate, Department, Program, Description} = props
    return (
        <div className="admin-page">
            <h3>Add a New Course</h3>
            <form>
                <div className='form-group'>
                    <label>Course Name: {CourseName}</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Course Code: {CourseCode}</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Term: {Term}</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Start Date: {StartDate}</label>
                    <input type="date" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>End Date: {EndDate}</label>
                    <input type="date" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Department: {Department}</label>
                    <select className="standardInput" required>
                        <option value="">Select Department</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Nursing">Engineering</option>
                        <option value="Business">Business</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label>Program: {Program}</label>
                    <select className="standardInput" required>
                        <option value="">Select Program</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Post-Diploma">Post-Diploma</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: {Description}</label>
                    <textarea className="standardInput" rows="4" required></textarea>
                </div>
                <input type='submit' value="Add Course" className="standardButton submitButton" />
            </form>
        </div>
    );
};

export default AdminAddCourses;
