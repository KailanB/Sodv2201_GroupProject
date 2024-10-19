import React, { useState } from 'react';
import './AdminAddCourses.style.css';
// import '../../AdminCourseManager.js';

const AdminAddCourses = ({ onAddCourse }) => {
    const [course, setCourse] = useState({
        CourseName: '',
        CourseCode: '',
        Term: '',
        StartDate: '',
        EndDate: '',
        Department: '',
        Program: '',
        Description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value
        }));
    };

    const handleAddCourse = (newCourse) => {


        const allPrograms = JSON.parse(localStorage.getItem('programs')) || [];

       
        for(let i = 0 ; i < allPrograms.length ; i++)
        {
             // find program associated with course being added within program array
            if(allPrograms[i].department.toLowerCase() === newCourse.Department.toLowerCase() && 
               allPrograms[i].program.toLowerCase() === newCourse.Program.toLowerCase() 
            )
            {
                // push new course into program array
                allPrograms[i].courses.push(newCourse);
                
                break;
            }
        }
        localStorage.setItem('programs', JSON.stringify(allPrograms));

        // alert(allPrograms[0].courses[0].Department);
        //localStorage.setItem('courses', JSON.stringify(allCourses));

        // this might have issues may need to re-write it.
        //const allCourses = JSON.parse(localStorage.getItem('courses')) || [];
        
        //allCourses.push(newCourse);
        //localStorage.setItem('courses', JSON.stringify(allCourses));
        // alert(allCourses[0].CourseName);
        

        // I don't think we need this one
        //setCourse(newCourse);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCourse(course); // Sending data to AdminCourseManager component
        setCourse({
            CourseName: '',
            CourseCode: '',
            Term: '',
            StartDate: '',
            EndDate: '',
            Department: '',
            Program: '',
            Description: ''
        }); // Clear form after submission
    };

    return (
        <div className="unique-page">
            <h3>Add a New Course</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Course Name:</label>
                    <input type="text" name="CourseName" value={course.CourseName} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Course Code:</label>
                    <input type="text" name="CourseCode" value={course.CourseCode} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Term:</label>
                    <input type="text" name="Term" value={course.Term} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Start Date:</label>
                    <input type="date" name="StartDate" value={course.StartDate} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>End Date:</label>
                    <input type="date" name="EndDate" value={course.EndDate} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Department:</label>
                    <select name="Department" value={course.Department} onChange={handleChange} className="standardInput" required>
                        <option value="">Select Department</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Nursing">Engineering</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Program:</label>
                    <select name="Program" value={course.Program} onChange={handleChange} className="standardInput" required>
                        <option value="">Select Program</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Post-Diploma">Post-Diploma</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <textarea name="Description" value={course.Description} onChange={handleChange} className="standardInput" rows="4" required></textarea>
                </div>
                <input type="submit" value="Add Course" className="standardButton submitButton" />
            </form>
        </div>
    );
};

export default AdminAddCourses;
