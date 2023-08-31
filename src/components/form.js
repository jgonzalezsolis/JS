import React, { useState } from  'react';
    
const Form = (props) => { 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password ,confirmPassword};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First name: </label> 
                    <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label> confirm Password: </label>
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3 >Your Form Data</h3>
                <p>
                <label>First Name: </label>{ firstName }
                </p>
                <p>
                <label>Last Name: </label>{ lastName }
                </p>
                <p>
                <label>Email: </label>{ email }
                </p>
                <p>
                <label>Password: </label>{ password }
                </p>
                <p>
                <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
    );
};
    
export default Form;