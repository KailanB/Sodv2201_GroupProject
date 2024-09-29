import './ProgramDiv.style.css';

const ProgramDiv = (props) => {


    const {programTitle, term, startDate, endDate, length, description, fee, code} = props;


    return (

        <div className="programDiv">
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