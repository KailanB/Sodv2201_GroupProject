import {React, useState, useEffect} from 'react';
import './CoursePageNew.style.css';
import CourseDiv from './CourseDiv.component.jsx';

import { GetCookieByName } from '../../Utilities.js';





const CoursesPage = () => {

    const [courses, setCourses] = useState([]);

    const [programs, setPrograms] = useState([]);


    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => { 

        

    }, []);

    // useEffect(() => { 

    //     const savedCourses = JSON.parse(localStorage.getItem("courses"));
    //     if (savedCourses) {
    //         setCourses(savedCourses);
    //     }

    // }, []);

    useEffect(() => { 

        const savedPrograms = JSON.parse(localStorage.getItem("programs"));

        setPrograms(savedPrograms);

        const savedCourses = [];
        
        savedPrograms.forEach(program => 
            program.courses.forEach(course =>
                
                savedCourses.push(course)
            )
        )

        setCourses(savedCourses);


    }, []);


    const[user, setUser] = useState([]);

    useEffect(() => {

        
        let userEmail = GetCookieByName("userEmail=")
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        let userExists = savedUsers.find(savedUser => savedUser.email.toLowerCase() === userEmail.toLowerCase());
        
        if(userExists)
        {
            //alert(userExists.department + " " + userExists.program)
            setUser(userExists); 

            // if user logged in is a student filter to only display courses available for the users department and program
            if(userExists.status === "Student")
            {
                const userCourses = courses.filter(course => (
                course.Department.toLowerCase() === user.department.toLowerCase()) &&
                (course.Program.toLowerCase() === user.program.toLowerCase())
                )
                // set courses to filtered options for displaying
                setCourses(userCourses);
            }
            
        }



    }, []);
    // const [messages, setMessages]= useState([]);

    // useEffect(() => {

    //     const savedMessages = JSON.parse(localStorage.getItem('messages'));

    //     if(savedMessages)
    //     {
    //         setMessages(savedMessages);
    //     }

    // }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (

    <div>
        <div className="courses-page">
            <h3>Course Registration</h3>
            <input 
                type="text" 
                placeholder="Search Courses..." 
                className="search-bar" 
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>

        <div className="course-list">
            {courses.filter(course => 
            (course.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || 
            course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase()))
            ).map((course, index) => (
                <div key = {index }>
                    <CourseDiv Course = {course}/>
                    <br />
                </div>
                    ))}
        </div>
    </div>




        // <div>
        //     {messages.map((message, index) => (
        //         <div key={index}>
        //             <CourseDiv fullName={message.fullName} email={message.email} message={message.message}/>
        //             <br />
        //         </div>
                
        //     ))}
        // </div>

    );
};


export default CoursesPage;