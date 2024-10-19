import React, { useState, useEffect } from 'react';
import './ProgramsPage.style.css';
import ProgramDiv from './ProgramDiv.component.jsx';
import ProgramSearch from './ProgramSearch.component.jsx';


const ProgramsPageMain = () => {


    // const programs = [
        
    // ];
    const[programs, setPrograms] = useState([]);

    useEffect(() => {

        const programs = JSON.parse(localStorage.getItem('programs')) || [];

        if(programs)
        {
            //alert(userExists.studentId);
            setPrograms(programs);  
        }
    }, []);

    return (

        <div>
            <ProgramSearch />
            <br />
            <div className="programDisplay">
                {programs.map((program, index) => (
                    <div key={index}>
                        <ProgramDiv program={program}/>
                        <br />
                    </div>
                    
                ))}
            </div>
            
        </div>

    );
};


export default ProgramsPageMain;