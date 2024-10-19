import {React, useState, useEffect} from 'react';
import './MessagePage.style.css';
import MessageDiv from './MessageDiv.component.jsx';



const AdminMessagesPage = () => {


    const [messages, setMessages]= useState(() => JSON.parse(localStorage.getItem('messages')) || []);

    // useEffect(() => {

    //     const savedMessages = ;
    //     setMessages(savedMessages);
    //     // if(savedMessages)
    //     // {
            
    //     // }

    // }, []);

    useEffect(() => {

        

    }, [messages]);

    return (

        <div>
            <h2>Info Requests</h2>
            {messages.map((message, index) => (
                <div key={index}>
                    <MessageDiv fullName={message.fullName} email={message.email} message={message.message}/>
                    <br />
                </div>
                
            ))}
        </div>

    );
};


export default AdminMessagesPage;