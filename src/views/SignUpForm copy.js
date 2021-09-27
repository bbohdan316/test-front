import React, { useState } from "react"
import useAuth from "../hooks/useAuth";

const SignUpForm = () => {

    const {signup} = useAuth()
    const [registerError, setRegisterError] = useState('');
    const handleRegisterError = (err) => {
        setRegisterError(err);
    }
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        alert('singup function is commented out!')
        // uncomment to enable registration
        //signup(payload,handleRegisterError);
    }
    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <div className="form-group">

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {registerError && <p className="form-error">{registerError}</p>}
                </form>
            </div>
            <div className="card-footer">
                <p>Already have an account? <a href="#">Sign in now!</a></p>
            </div>
        </div>
    )
}

export default SignUpForm;