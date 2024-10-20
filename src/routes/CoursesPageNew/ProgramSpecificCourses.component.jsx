import {React, useState, useEffect} from 'react';
import './CoursePageNew.style.css';
import ProgramSpecificCourseDiv from './ProgramSpecificCourseDiv.component.jsx';

// https://ui.dev/react-router-url-parameters
import { useParams } from 'react-router-dom';

const ProgramSpecificCourses = () => {


    const {programParam} = useParams();

    const [program, setProgram] = useState({});

    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => { 

        
        const savedPrograms = JSON.parse(localStorage.getItem("programs")) || [];
        
        
        const savedProgram = savedPrograms.find(savedProgram => {
            return savedProgram.code === programParam;
        });
        
        setProgram(savedProgram);
        const savedCourses = [];
        // alert(programs[0].courses[0].CourseCode);
        savedProgram.courses.forEach(course =>
                savedCourses.push(course)  
        )
        setCourses([...savedCourses]);
       

    }, []);


    return (

        <div>
            <h2>{program.department} {program.program} Courses</h2>
    
            <div className="course-list">
                {courses.map((course, index) => (
                    <div key = {index }>
                        <ProgramSpecificCourseDiv Course = {course}/>
                        <br />
                    </div>
                        ))}
            </div>
        </div>
    );

};



export default ProgramSpecificCourses;


