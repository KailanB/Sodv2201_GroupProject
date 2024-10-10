import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.style.css';

const NavBarBasic = (props) => {

    const {home} = props;

    return (

        <div className="navBar">
            <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/programsPage">Programs</Link></li>
                <li><Link to="/signUpPage">Sign up</Link></li>
                <li><Link to="/logInPage">Log in</Link></li>
                <li><Link to="/profilePage">Profile</Link></li>
                <li><Link to="/viewRegisteredStudents">View Registered Students</Link></li>
                <li><Link to="/adminAddCourses">Add Courses</Link></li>
                <li><Link to="/adminDashboard">Dashboard</Link></li>
            </ul>

        </div>

    );

};


export default NavBarBasic;