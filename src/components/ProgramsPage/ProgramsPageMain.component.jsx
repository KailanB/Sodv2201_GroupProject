import './ProgramsPage.style.css';
import ProgramDiv from './ProgramDiv.component.jsx';
import ProgramSearch from './ProgramSearch.component.jsx';


const ProgramsPageMain = () => {


    const programs = [
        {title: 'Software Development', term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is programming", fee: "50,000", code: "23523" },
        {title: 'Engineering', term: "fall", startDate: "September", endDate: "December", legnth: "6 months", description: "This is Engineering", fee: "20,000", code: "54523" }
    ];

    return (

        <div>
            <ProgramSearch />
            <br />
            {programs.map((program, index) => (
                <div key={index}>
                    <ProgramDiv programTitle={program.title} term={program.term} startDate={program.startDate} endDate={program.endDate} length={program.length} description={program.description} fee={program.fee} code={program.code} />
                    <br />
                </div>
                
            ))}
        </div>

    );
};


export default ProgramsPageMain;