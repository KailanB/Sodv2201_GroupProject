
import './SignUpPage.style.css';

const SignUpPage = () => {


    return (

        <div >
            <form>
                <div className='signUpDiv'>
                    <h3>Sign up here!</h3>
                    <div className='labelInputDiv'>
                        <label>First Name:</label>
                        <input type="text" className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Last Name:</label>
                        <input type="text" className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Email:</label>
                        <input type="email" className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Phone:</label>
                        <input type="tel" className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Birthday:</label>
                        <input type="date" className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label for="department">Department:</label>
                        <select name="department" className="standardInput" required>
                            <option></option>
                            <option>Software Development</option>
                            <option>Engineering</option>
                        </select>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Program:</label>
                        <select name="department" className="standardInput" required>
                            <option></option>
                            <option>Certificate</option>
                            <option>Diploma</option>
                            <option>Post-Diploma</option>
                        </select>
                    </div>
                    <div className='labelInputDiv'>
                        <label>User Name:</label>
                        <input className="standardInput" required></input>
                    </div>
                    <div className='labelInputDiv'>
                        <label>Password:</label>
                        <input className="standardInput" required></input>
                    </div>
                    <input type='submit' value="Submit" className="standardButton submitButton"/>
                </div>      
            </form>    

        </div>

    );
};



export default SignUpPage;