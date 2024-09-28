import { useState } from 'react';
import './Header.style.css';
import NavBarBasic from './NavBarBasic.component';

const Header = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleNavBar = () => {
        setIsVisible(!isVisible);
    }

    const {title} = props;
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
                {isVisible && <NavBarBasic home="home" />}
            </div>

        </div>
    );

};

export default Header;