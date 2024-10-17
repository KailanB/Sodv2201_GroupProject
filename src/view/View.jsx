import {React, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Common/Header.component.jsx';
import Footer from '../components/Common/Footer.component.jsx';
import '../App.css';



function View() {
    

    // add program dummy data with codes
    useEffect(() => {

        const allPrograms = localStorage.getItem('programs');
        
        if (allPrograms.length < 1)
        {
            alert('test');
            let dummyData = [
                {department: "Software Development", program: "Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming", fee: "50,000", code: "23523", courses: []},
                {department: "Software Development", program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming basics", fee: "30,000", code: "23524", courses: []},
                {department: "Software Development", program: "Post-Diploma", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming advanced", fee: "75,000", code: "23525", courses: []},
                {department: 'Engineering', program: "Certificate", term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is Engineering", fee: "20,000", code: "54523", courses: [] }
            ];
            localStorage.setItem('programs', JSON.stringify(dummyData));
        }
        
    

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