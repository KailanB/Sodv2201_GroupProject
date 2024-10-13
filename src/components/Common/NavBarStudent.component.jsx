import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.style.css';

const NavBarStudent = (props) => {

    const {home} = props;

    return (

        <div className="navBar">
            <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/programsPage">Programs</Link></li>
                <li><Link to="/signUpPage">Sign up</Link></li>
                <li><Link to="/logInPage">Log in</Link></li>
                <li><Link to="/profilePage">Profile</Link></li>
            </ul>

        </div>

    );

};


export default NavBarStudent;