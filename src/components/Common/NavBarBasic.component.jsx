import './navBar.style.css';

const NavBarBasic = (props) => {

    const {home} = props;

    return (

        <div className="navBar">
            <p>Navigation bar</p>
            <p>this will later be set to invisible and we can create a menu with javascript to open and close</p>
            <ul>
                <li>{home}</li>
                <li>programs</li>
                <li>Sign up</li>
                <li>Log in</li>
            </ul>

        </div>

    );

};


export default NavBarBasic;