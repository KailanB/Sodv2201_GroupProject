import {React, useState, useEffect} from 'react';
import './MessagePage.style.css';
import MessageDiv from './MessageDiv.component.jsx';



const AdminMessagesPage = () => {


    const [messages, setMessages]= useState([]);

    useEffect(() => {

        const savedMessages = JSON.parse(localStorage.getItem('messages'));

        if(savedMessages)
        {
            setMessages(savedMessages);
        }

    }, []);

    useEffect(() => {


    }, [messages]);

    return (

        <div>
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