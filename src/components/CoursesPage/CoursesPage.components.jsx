import React, { useState } from 'react';
import './CoursesPage.style.css';

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState([
        { id: 1, name: 'Web Programming', code: 'W101', term: 'Fall', startDate: '2024-09-01', endDate: '2024-12-15', department: 'Software Development', program: 'Certificate', description: 'Intro to React.' },
        { id: 2, name: 'Advanced CSS', code: 'A201', term: 'Spring', startDate: '2024-01-10', endDate: '2024-04-20', department: 'Design', program: 'Diploma', description: 'Deep dive into CSS.' }
        // Add more courses as required
    ]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    
    // State for adding a new course
    const [newCourse, setNewCourse] = useState({
        name: '',
        code: '',
        term: '',
        startDate: '',
        endDate: '',
        department: '',
        program: '',
        description: ''
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleReset = () => {
        setSearchTerm('');
        setSelectedCourse(null);
        setNewCourse({ name: '', code: '', term: '', startDate: '', endDate: '', department: '', program: '', description: '' });
    };

    // const handleCourseClick = (course) => {
    //     setSelectedCourse(course);
    // };

    const handleAddCourse = () => {
        
        if (!newCourse.name || !newCourse.code) {
            alert("Please fill in all required fields.");
            return;
        }
        
        // Create a new course object
        // const newCourseObj = {
        //     id: courses.length + 1, // Simple ID generation
        //     ...newCourse
        // };

        // // Add the new course to the state
        // setCourses([...courses, newCourseObj]);

        // // Reset the new course state
        // setNewCourse({ name: '', code: '', term: '', startDate: '', endDate: '', department: '', program: '', description: '' });
    };

    return (
        <div className="courses-page">
            <h3>Course Registration</h3>
            <input 
                type="text" 
                placeholder="Search Courses..." 
                className="search-bar" 
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="button-container">
                <button className="standardButton" onClick={handleAddCourse}>Add Course</button>
                <button className="standardButton" onClick={handleReset}>Reset</button>
                <button className="standardButton">View Registered Courses</button>
            </div>

            {/* New Course Form */}
            <div className="new-course-form">
                <h4>Add New Course</h4>
                <input type="text" placeholder="Course Name" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
                <input type="text" placeholder="Course Code" value={newCourse.code} onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })} />
                <input type="text" placeholder="Term" value={newCourse.term} onChange={(e) => setNewCourse({ ...newCourse, term: e.target.value })} />
                <input type="date" value={newCourse.startDate} onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })} />
                <input type="date" value={newCourse.endDate} onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })} />
                <input type="text" placeholder="Department" value={newCourse.department} onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })} />
                <input type="text" placeholder="Program" value={newCourse.program} onChange={(e) => setNewCourse({ ...newCourse, program: e.target.value })} />
                <textarea placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
            </div>

            <div className="course-list">
                {courses.filter(course => 
                    course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    course.code.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((course) => (
                    <div key={course.id} className="course-item" onClick={() => setSelectedCourse(course)}>
                        <h4>{course.name}</h4>
                        <p>{course.code}</p>
                        <p>{course.term}</p>
                    </div>
                ))}
            </div>

            {selectedCourse && (
                <div className="course-details-modal">
                    <h4>Course Details</h4>
                    <p><strong>Name:</strong> {selectedCourse.name}</p>
                    <p><strong>Code:</strong> {selectedCourse.code}</p>
                    <p><strong>Term:</strong> {selectedCourse.term}</p>
                    <p><strong>Start Date:</strong> {selectedCourse.startDate}</p>
                    <p><strong>End Date:</strong> {selectedCourse.endDate}</p>
                    <p><strong>Department:</strong> {selectedCourse.department}</p>
                    <p><strong>Program:</strong> {selectedCourse.program}</p>
                    <p><strong>Description:</strong> {selectedCourse.description}</p>
                    <button className="standardButton">Register</button>
                    <button className="standardButton" onClick={() => setSelectedCourse(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default CoursesPage;
