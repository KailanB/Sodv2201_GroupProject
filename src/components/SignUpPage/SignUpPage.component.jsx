import React, { useState } from 'react';

import './SignUpPage.style.css';
import SignUpForm from './SignUpForm.component.jsx';
import UserList from './UserList.component.jsx';

const SignUpPage = () => {

    const[users, setUsers] = useState([]);

    const addUser = (user) => {

        setUsers((currentUsers) => [...currentUsers, user]);
    };


    return (

        <div className='signUpDiv'>
            <h3>Sign up here!</h3>
            <SignUpForm onAddUser={addUser}/>
            <div>
                <UserList users={users}/>
            </div>
        </div>


    );


}








export default SignUpPage;