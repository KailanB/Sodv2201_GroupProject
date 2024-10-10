import React, { useState, useEffect } from 'react';

import ProfileDiv from './ProfileDiv.component.jsx';

function ProfilePage() {


    const[user, setUser] = useState([]);

    useEffect(() => {

        let name = "userEmail=";
    
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieValues = decodedCookie.split(";");
        let myEmail = '';
        for (let i = 0; i < cookieValues.length ; i++)
        {
            
            let c = cookieValues[i];
            while (c.charAt(0) === ' ')
            {
                c = c.substring(1);
                
            }
            if (c.indexOf(name) === 0)
            {
                
                myEmail = c.substring(name.length, c.length);
            }
            

        }

        const savedUsers = JSON.parse(localStorage.getItem('users'));
        let userExists = savedUsers.find(savedUser => savedUser.email.toLowerCase() === myEmail.toLowerCase());
        if(userExists)
        {

            setUser(userExists);
            
        }
    }, []);

    return (
        <div>
            <ProfileDiv firstName={user.firstName} lastName={user.lastName} id={user.studentID} email={user.email} phone={user.phone} birthday={user.birthday} department={user.department} program={user.program} userName={user.userName}/>
        </div>
    );
}

export default ProfilePage;