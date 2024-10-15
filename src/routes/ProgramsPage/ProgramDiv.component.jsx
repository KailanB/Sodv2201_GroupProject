import './ProgramsPage.style.css';

const ProgramDiv = (props) => {


    const {programTitle, term, startDate, endDate, length, description, fee, code} = props;

    const NavigateToProgramCourses = (program) =>
    {
        window.location.href = "/Courses/" + program;
    }


    return (

        <div className="programDiv" onClick={() => {
            NavigateToProgramCourses(code)}}>
            <h2>{programTitle}</h2>
            <p>Term: {term}</p>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
            <br />
            <p>Program Length: {length}</p>
            <p>Description: {description}</p>
            <br />
            <p>Fees: ${fee}</p>
            <p>Program code: {code}</p>
        </div>

    );
};


export default ProgramDiv