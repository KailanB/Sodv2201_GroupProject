import React from 'react';
import './AdminEditCourses.style.css';

const AdminEditCourses = () => {
    return (
        <div className="admin-page">
            <h3>Edit Course</h3>
            <div className="form-box">
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
                            <option value="Engineering">Nursing</option>
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
                </form>
                <div className="button-group">
                    <button className="standardButton deleteButton">Delete Course</button>
                    <button className="standardButton cancelButton">Cancel</button>
                    <button className="standardButton saveButton">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditCourses;
