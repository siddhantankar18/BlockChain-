import React, { useState } from "react";
import "../../assets/css/login.css";
import { Link, useNavigate } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState('student');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (loginType === '') {
            setErrorMessage('Please select a login type');
            return;
        }
        // Check if email and password are not empty
        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Please enter email and password');
            return;
        }

        // Navigate based on the selected login type
        if (loginType === 'student') {
            navigate('/dashboard');
        } else if (loginType === 'institute') {
            navigate('/dashboardinstitute');
        }
    };

    return (
        <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input 
                        type="email" 
                        id="form3Example3" 
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                        value={email}
                        onChange={handleEmailChange}
                        required // Make email required
                    />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input 
                        type="password" 
                        id="form3Example4" 
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                        required // Make password required
                    />
                </div>

                {/* Radio buttons for login type */}
                <div className="form-outline mb-3">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="loginType" 
                            id="studentRadio" 
                            value="student" 
                            checked={loginType === 'student'} 
                            onChange={() => setLoginType('student')} 
                        />
                        <label className="form-check-label" htmlFor="studentRadio">
                            Login as Student
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="loginType" 
                            id="instituteRadio" 
                            value="institute" 
                            checked={loginType === 'institute'} 
                            onChange={() => setLoginType('institute')} 
                        />
                        <label className="form-check-label" htmlFor="instituteRadio">
                            Login as Institute
                        </label>
                    </div>
                </div>

                {/* Error message */}
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                {/* Login button */}
                <div className="d-grid gap-2">
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/reset-password" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup" className="link-danger">Register</Link></p>
                </div>
            </form>
        </>
    );
};

export default authLayout(LoginPage);
