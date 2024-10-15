import React, { useState } from 'react';
import AdminAddCourses from './AdminAddCourses';
import AdminEditCourses from './AdminEditCourses';

const AdminCourseManager = () => {
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

    // Function to add a course from AdminAddCourses
    const handleAddCourse = (newCourse) => {
        setCourse(newCourse);
    };

    // Function to edit course in AdminEditCourses
    const handleEditCourse = (editedCourse) => {
        setCourse(editedCourse);
    };

    return (
        <div>
            <AdminAddCourses onAddCourse={handleAddCourse} />
            <AdminEditCourses course={course} onEditCourse={handleEditCourse} />
        </div>
    );
};

export default AdminCourseManager;
