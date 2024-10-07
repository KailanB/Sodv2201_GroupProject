import './LogInPage.style.css';

const LogInPage = () => {


    


    return (

        <div className="logInPageMain">
            <div className="logInPageHalf">
                <div className="logInDiv">
                    {/*onSubmit={handleSubmit} */}
                    <form >
                        <div className='labelInputDiv'>
                            <label>Username: </label>
                            <input 
                            type="text" 
                            name="userName"
                            // value={formData.firstName}
                            // onChange={handleChange}
                            className="standardInput" 
                            required></input>
                        </div>
                        <div className='labelInputDiv'>
                            <label>Password: </label>
                            <input 
                            type="text" 
                            name="password"
                            // value={formData.lastName}
                            // onChange={handleChange}
                            className="standardInput" 
                            required></input>
                        </div>
                        <button className="standardButton">Reset</button>
                        <button className="standardButton">Cancel</button>
                        <input type='submit' value="Log In" className="standardButton"/> 
                    </form>
                </div>
            </div>
            
            <div className="logInPageHalf">
                <p>Don't have an account? Make one here!</p>
            </div>
        </div>
        


    );
};


export default LogInPage;