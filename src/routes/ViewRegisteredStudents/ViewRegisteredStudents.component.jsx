import React, { useState } from 'react';
import './ViewRegisteredStudents.style.css';

const ViewRegisteredStudents = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const studentTypes = [
        { type: "Undergraduate", link: "/programsPage" },
        { type: "Certificate", link: "/programsPage" },
        { type: "Diploma", link: "/programsPage" },
        { type: "Post-Diploma", link: "/programsPage" },
    ];

    return (
        <div className="admin-page">
            <h3>View and manage all registered students in various programs.</h3>
            <div className="content-container">
                {/* Left Box - Type of Student */}
                <div className="student-types">
                    <label className="label-light">Type of Student</label>
                    <div className="scrollable">
                        {studentTypes.map((student, index) => (
                            <div key={index} className="student-type">
                                <span>{student.type}</span>
                                <a href={student.link} className="arrow"> ➔ </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Box - Search Bar and Student Info */}
                <div className="search-student">
                    <input 
                        type="text" 
                        className="standardInput search-bar" 
                        placeholder="Search by ID, Name, Course, Program"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="student-info">
                        <label>Name</label>
                        <input type="text" className="standardInput" />

                        <label>Student ID</label>
                        <input type="text" className="standardInput" />

                        <label>Program</label>
                        <input type="text" className="standardInput" />

                        <label>Enrollment Status</label>
                        <input type="text" className="standardInput" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRegisteredStudents;
