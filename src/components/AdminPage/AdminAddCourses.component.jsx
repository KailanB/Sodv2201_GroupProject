import React from 'react';
import './AdminAddCourses.style.css';

const AdminAddCourses = () => {
    return (
        <div className="admin-page">
            <h3>Add a New Course</h3>
            <form>
                <div className='form-group'>
                    <label>Course Name:</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Course Code:</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Term:</label>
                    <input type="text" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Start Date:</label>
                    <input type="date" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>End Date:</label>
                    <input type="date" className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Department:</label>
                    <select className="standardInput" required>
                        <option value="">Select Department</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Nursing">Engineering</option>
                        <option value="Business">Business</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label>Program:</label>
                    <select className="standardInput" required>
                        <option value="">Select Program</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Post-Diploma">Post-Diploma</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <textarea className="standardInput" rows="4" required></textarea>
                </div>
                <input type='submit' value="Add Course" className="standardButton submitButton" />
            </form>
        </div>
    );
};

export default AdminAddCourses;
