import {React, useState, useEffect} from 'react';
import './CoursePageNew.style.css';
import CourseDiv from './CourseDiv.component.jsx';





const CoursesPage = () => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => { 

        const savedCourses = JSON.parse(localStorage.getItem("courses"));
        if (savedCourses) {
            setCourses(savedCourses);
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
                        course.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((course, index) => (
                            <div key = {index }>
                            <CourseDiv Course = {course}/>
                            <br></br>
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