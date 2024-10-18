import {React, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Common/Header.component.jsx';
import Footer from '../components/Common/Footer.component.jsx';
import '../App.css';



function View() {
    

    // add program dummy data with codes
    useEffect(() => {

        const allPrograms = localStorage.getItem('programs') || [];
        // console.log(allPrograms.length);
        // console.log(allPrograms);
        if (allPrograms.length < 1)
        {
            // create an indivudla file for importing data to keep the files clean
            // create dummy data courses min 10
            let dummyData = [
                {department: "Software Development", program: "Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming", fee: "50,000", code: "23523", courses: []},
                {department: "Software Development", program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming basics", fee: "30,000", code: "23524", courses: []},
                {department: "Software Development", program: "Post-Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming advanced", fee: "75,000", code: "23525", courses: []},
                {department: 'Engineering', program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is Engineering", fee: "20,000", code: "54523", courses: [] }
            ];
            localStorage.setItem('programs', JSON.stringify(dummyData));
        }

        // create dummy admin account
        const allUsers = JSON.parse(localStorage.getItem('users'));
        // dummy data for admin is good
        let userExists = allUsers.find(savedUser => savedUser.email.toLowerCase() === "ttadmin@gmail.com")
        // if no such user exists we can go ahead and add the user to our storage

        // separate users from admin users 
        // or we could add privilege access for admins
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