// this component is used for testing purposes ONLY
// we can borrow the style to output course and program information


import React from 'react';

function UserList({users}) {

    // console.log("USERS NULL???" + users);
    if(users != null)
    {
        return (

            <ul>
                 {users.map((user, index) => (
                    <li key={index}>
                        Name: {user.firstName} {user.lastName} <br />
                        Email: {user.email} <br />
                        Phone: {user.phone} <br />
                        Birthday: {user.birthday} <br />
                        Department: {user.department} <br />
                        Program: {user.program} <br />
                        Term: {user.term} <br />
                        Username: {user.userName} <br />
                        Password: {user.password} <br />
    
                    </li>
                ))}
    
            </ul>
    
    
        );
    }
    

};



export default UserList;