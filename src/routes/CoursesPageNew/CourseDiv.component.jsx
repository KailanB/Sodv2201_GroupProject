import './CoursePageNew.style.css';


const CourseDiv = (props) => {


    
    // const {fullName, email, message} = props;
    const {Course} = (props);

    return (


        <div>
            <h4>Course Details</h4>
                <p><strong>Name:</strong> {Course.name}</p>
                <p><strong>Code:</strong> {Course.code}</p>
                <p><strong>Term:</strong> {Course.term}</p>
                <p><strong>Start Date:</strong> {Course.startDate}</p>
                <p><strong>End Date:</strong> {Course.endDate}</p>
                <p><strong>Department:</strong> {Course.department}</p>
                <p><strong>Program:</strong> {Course.program}</p>
                <p><strong>Description:</strong> {Course.description}</p>
                <button className="standardButton">Register</button>
                
        </div>


        // <div className="messageDiv" >
        //     <h4>From {fullName}</h4>
        //     <p>Email: {email}</p>
        //     <p>Message: {message}</p>
        // </div>

    );
};


export default CourseDiv;