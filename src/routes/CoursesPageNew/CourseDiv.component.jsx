import './CoursePageNew.style.css';


const CourseDiv = (props) => {


    
    // const {fullName, email, message} = props;
    const {Course} = (props);

    return (


        <div>
            <h4>Course Details</h4>
            <p><strong>Name:</strong> {Course.CourseName}</p>
            <p><strong>Code:</strong> {Course.CourseCode}</p>
            <p><strong>Term:</strong> {Course.Term}</p>
            <p><strong>Start Date:</strong> {Course.StartDate}</p>
            <p><strong>End Date:</strong> {Course.EndDate}</p>
            <p><strong>Department:</strong> {Course.Department}</p>
            <p><strong>Program:</strong> {Course.Program}</p>
            <p><strong>Description:</strong> {Course.Description}</p>
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