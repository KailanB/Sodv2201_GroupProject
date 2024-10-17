import {React, useState, useEffect} from 'react';
import './CoursePageNew.style.css';
import CourseDiv from './CourseDiv.component.jsx';

import { GetCookieByName } from '../../Utilities.js';





const CoursesPage = () => {

    const [courses, setCourses] = useState([]);
    const[user, setUser] = useState([]);

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
        

        let userEmail = GetCookieByName("userEmail=")
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        let userExists = savedUsers.find(savedUser => savedUser.email.toLowerCase() === userEmail.toLowerCase());
        
        console.log("after getting user data");
        if(userExists)
        {
            setUser(userExists); 
            
            // if user logged in is a student filter to only display courses available for the users department and program
            
            
        }

        setCourses(savedCourses);


    }, []);


    

    useEffect(() => {

        
        if(user.status === "Student")
        {
            // WHY is this executing first??? 
            // I don't understand what is going on here
            const savedCourses = courses.filter(course => (
            course.Department.toLowerCase() === user.department.toLowerCase()) &&
            (course.Program.toLowerCase() === user.program.toLowerCase())
            )
            // set courses to filtered options for displaying

            setCourses(savedCourses);
        }



    }, [user]);
    // const [messages, setMessages]= useState([]);

    // useEffect(() => {

    //     const savedMessages = JSON.parse(localStorage.getItem('messages'));

    //     if(savedMessages)
    //     {
    //         setMessages(savedMessages);
    //     }

    // }, []);

    const RegisterCourse = (code) => {

        
        if(user.courses.length < 5)
        {

            // check if user is registered for courses and if so
            // if they are already registered for this course by searching their course array for a match
            if((user.courses.length > 0) && user.courses.some(course => course.CourseCode === code))
            {
                alert("Already registered for this course");
            }
            else
            {
                // if not registered for the course
                // find the course via the code
                const course = courses.find(course => 
                    course.CourseCode === code
                )
                // add course to user array
                user.courses.push(course);
                
                // then get local storage data and update it with newly added course
                const savedUsers = JSON.parse(localStorage.getItem('users'));
                for(let i = 0; i < savedUsers.length ; i++)
                {
                    // find matching user in array
                    if(savedUsers[i].email.toLowerCase() === user.email.toLowerCase())
                    {
                        // add course to their courses
                        savedUsers[i].courses.push(course)
                    }
                }
                // save everything
                localStorage.setItem('users', JSON.stringify(savedUsers));
            }
            
        }
        else 
        {
            alert("Maxiumum courses you can register for is 5!")
        }
        
        


        
    }

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
                    <CourseDiv Course = {course} RegisterCourse={RegisterCourse}/>
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