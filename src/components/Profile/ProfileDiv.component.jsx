import './ProfilePage.style.css';

const ProfileDiv = (props) => {

    const {firstName, lastName, id, email, phone, birthday, department, program, userName} = props

    return (

        <div className="profileDiv">
            <h2>{firstName} {lastName}</h2>
            <p>StudentID: {id}</p>
            <p>Birthday: {birthday}</p>
            <p>Department: {department}</p>
            <p>Program: {program}</p>
            <p>Username: {userName}</p>
            <br />
            <p><strong>Contact information: </strong></p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );

};

export default ProfileDiv;