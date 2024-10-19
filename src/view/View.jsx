import {React, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Common/Header.component.jsx';
import Footer from '../components/Common/Footer.component.jsx';
import '../App.css';



function View() {
    

    // add program dummy data with codes
    useEffect(() => {
        // alert('test');
        // localStorage.clear();
        const allPrograms = JSON.parse(localStorage.getItem('programs')) || [];
        // console.log(allPrograms.length);
        // console.log(allPrograms);
        if (allPrograms.length < 1)
        {
            // create an indivudla file for importing data to keep the files clean
            // create dummy data courses min 10
            let dummyData = [
                {department: "Software Development", program: "Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming", fee: "50,000", code: "23523", courses: [{CourseName: "Sodv", CourseCode: 2202, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Diploma", Description: "Teachers learners the ins and outs of object oriented programming"}, {CourseName: "Sodv", CourseCode: 2201, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Diploma", Description: "Teachers learners the fundamentals of React in javascript."}, {CourseName: "Data", CourseCode: 2201, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Diploma", Description: "Teachers learners the fundamentals of database administration."}]},
                {department: "Software Development", program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming basics", fee: "30,000", code: "23524", courses: [{CourseName: "Sodv", CourseCode: 1101, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Certificate", Description: "Teachers learners the basics of programming using C++"}, {CourseName: "Tech", CourseCode: 1101, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Certificate", Description: "Teachers learners the fundamentals of web programming."}, {CourseName: "Tech", CourseCode: 1102, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Certificate", Description: "Teachers learners the fundamentals of IoT."}]},
                {department: "Software Development", program: "Post-Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming advanced", fee: "75,000", code: "23525", courses: [{CourseName: "Sodv", CourseCode: 3202, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Post-Diploma", Description: "Teachers learners advanced object oriented architecture"}, {CourseName: "Data", CourseCode: 3202, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Post-Diploma", Description: "Teachers learners advanced concepts managing databases."}, {CourseName: "Sodv", CourseCode: 3201, Term: "Winter", StartDate: "2025-01-05", EndDate: "2025-04-25", Department:"SoftWare Development", Program: "Post-Diploma", Description: "Teachers learners advanced and modern web programming concepts."}]},
                // {department: 'Engineering', program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is Engineering", fee: "20,000", code: "54523", courses: [] }
            ];
            localStorage.setItem('programs', JSON.stringify(dummyData));
        }

        // create dummy admin account
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        // if no user data exists create admin dummy data
        if(allUsers.length <= 0)
        {
            
            let user = {
                firstName: 'Teeny',
                lastName: 'Tine',
                email: 'ttadmin@gmail.com',
                phone: '123-456-1234',
                birthday: '1900-10-10',
                department: 'IT',
                program: '',
                term: '',
                userName: 'TT',
                password: '123',
                status: 'Admin',
                studentId: '',
                courses: []
            }
            allUsers.push(user);
            localStorage.setItem('users', JSON.stringify(allUsers));
        }
        else 
        {
            
             // if no such user exists we can go ahead and add the user to our storage
            let userExists = allUsers.find(savedUser => savedUser.email.toLowerCase() === "ttadmin@gmail.com");
            if(!userExists)
                {
        
                    let user = {
                        firstName: 'Teeny',
                        lastName: 'Tine',
                        email: 'ttadmin@gmail.com',
                        phone: '123-456-1234',
                        birthday: '1900-10-10',
                        department: 'IT',
                        program: '',
                        term: '',
                        userName: 'TT',
                        password: '123',
                        status: 'Admin',
                        studentId: '',
                        courses: []
                    }
                    allUsers.push(user);
                    localStorage.setItem('users', JSON.stringify(allUsers));
        
                }
        }
        // dummy data for admin is good
        
        // separate users from admin users 
        // or we could add privilege access for admins
        
        // else notify the user and DO not add a duplicate email.       
    

    }, []);


    return (

        <>
            <div className="mainContent">
                <Header />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>

    );

}

export default View;