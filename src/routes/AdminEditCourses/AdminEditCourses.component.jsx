import React, { useState, useEffect } from 'react';
import './AdminEditCourses.style.css';
import { useLocation } from 'react-router-dom'; // Import useLocation to get the course data

const AdminEditCourses = () => {
    const location = useLocation();
    const { course } = location.state;  // Access course from location state

    const [editedCourse, setEditedCourse] = useState(course);

    useEffect(() => {
        setEditedCourse(course); // Update form if course data changes
    }, [course]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value
        }));
    };
//added 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onEditCourse(editedCourse); // Send updated data to parent component
    // };

    const handleDelete = (e) => {
        e.preventDefault();
        alert("Course deleted!");
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        alert("cancelled!");
    };

    const onEditCourse = (course) => {

        const savedPrograms = JSON.parse(localStorage.getItem("programs")) || [];
        const savedCourses = [];
        // alert(programs[0].courses[0].CourseCode);
        savedPrograms.forEach(program => 
            program.courses.forEach((localStorageCourse, index) => {

                if(localStorageCourse.CourseId === course.CourseId)
                {
                    program.courses[index] = course;
                    localStorage.setItem('programs', JSON.stringify(savedPrograms));
                }
            })
        )
        window.location.href = "/coursesPage";
        // savedCourses.find(savedCourse => {
        //     savedCourse.CourseId === course.CourseId;
        // })


        
        // console.log("Saved Programs ");
        // console.log(savedPrograms);
        // try using spread operator ... to see if it helps with the order of things    
        // setPrograms([...savedPrograms]);   
        
        
        


        // const index = user.courses.findIndex(course => course.CourseCode === code);
        
        // const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        // for(let i = 0 ; i < savedUsers.length ; i++)
        // {
        // if(savedUsers[i].email.toLowerCase() === user.email.toLowerCase())
        // {
        //     savedUsers[i].courses.splice(index, 1);
            
        // }
        // else{
        //     console.log("error finding user!");
        // }
        // }

    }

    const onDeleteCourse = (course) => {

        
    }
// onSubmit={handleSubmit}

    return (
        <div className="unique-page">
            <h3>Edit Course</h3>
            <form >
                <div className='form-group'>
                    <label>Course Name:</label>
                    <input type="text" name="CourseName" value={editedCourse.CourseName} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Course Code:</label>
                    <input type="text" name="CourseCode" value={editedCourse.CourseCode} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Term:</label>
                    <input type="text" name="Term" value={editedCourse.Term} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Start Date:</label>
                    <input type="date" name="StartDate" value={editedCourse.StartDate} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>End Date:</label>
                    <input type="date" name="EndDate" value={editedCourse.EndDate} onChange={handleChange} className="standardInput" required />
                </div>
                <div className='form-group'>
                    <label>Department:</label>
                    <select name="Department" value={editedCourse.Department} onChange={handleChange} className="standardInput" required>
                        <option value="">Select Department</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Nursing">Engineering</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Program:</label>
                    <select name="Program" value={editedCourse.Program} onChange={handleChange} className="standardInput" required>
                        <option value="">Select Program</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Post-Diploma">Post-Diploma</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <textarea name="Description" value={editedCourse.Description} onChange={handleChange} className="standardInput" rows="4" required></textarea>
                    <div className="button-group">

                    <button className="standardButton deleteButton" onClick={handleDelete}>Delete Course</button>
                    <button className="standardButton cancelButton" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="standardButton saveButton">Save Changes</button>


                </div>
                </div>
            </form>
        </div>
    );
};

export default AdminEditCourses;