import { useState } from 'react';
import './Header.style.css';
import NavBarBasic from './NavBarBasic.component';
import NavBarStudent from './NavBarStudent.component';

const Header = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleNavBar = () => {
        setIsVisible(!isVisible);
    }

    const {title} = props;
    
    // localStorage.clear();

    // const users = JSON.parse(localStorage.getItem('users'));
    // alert(document.cookie);
    let cookieName = "userEmail=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let myEmail = '';
    // get email from cookie
    myEmail = decodedCookie.substring(cookieName.length);
    // get user data from storage
    const users = JSON.parse(localStorage.getItem('users'));
    let currentUser;
    // if data exists
    if(users)
    {
        // find user with matching email
        currentUser = users.find(savedUser => savedUser.email.toLowerCase() === myEmail.toLowerCase());
    }
    // if user is logged in and cookie email exists
    if(myEmail)
    {
        
        // alert(currentUser.status);
        // check if current user has status addmin or student
        if(currentUser.status == "Admin")
        {

        }
        else if (currentUser.status == "Student")
        {
            // adding hamburger menu https://www.w3schools.com/howto/howto_css_menu_icon.asp
            return (
                <div className="header">
                    <p>WSA</p>
                    <h1>{title}</h1>
                    <div>
                        <div className="burgerMenu" onClick={toggleNavBar}> 
                            <div className="burgerMenuBar"></div>
                            <div className="burgerMenuBar"></div>
                            <div className="burgerMenuBar"></div>
                        </div>
                        {isVisible && <NavBarStudent home="home" />}
                    </div>
        
                </div>
            );
        }
    }
    else
    {
        return (
            <div className="header">
                <p>WSA</p>
                <h1>{title}</h1>
                <div>
                    <div className="burgerMenu" onClick={toggleNavBar}> 
                        <div className="burgerMenuBar"></div>
                        <div className="burgerMenuBar"></div>
                        <div className="burgerMenuBar"></div>
                    </div>
                    {isVisible && <NavBarBasic home="home" />}
                </div>
    
            </div>
        );
    }
    

};

export default Header;