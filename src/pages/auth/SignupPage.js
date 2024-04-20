import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginType, setLoginType] = useState('student'); // Default login type is student
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const handleLoginTypeChange = (e) => {
        setLoginType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginType === '') {
            setErrorMessage('Please select a login type');
            return;
        }
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setErrorMessage('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        // Assuming successful registration, navigate to the appropriate dashboard
        if (loginType === 'student') {
            navigate('/dashboard');
        } else if (loginType === 'institute') {
            navigate('/dashboardinstitute');
        }
    };

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Register/Sign Up</h1>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control form-control-lg"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter a valid email address" 
                        required
                    />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control form-control-lg"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Enter password" 
                        required
                    />
                </div>

                {/* Confirm Password input */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        className="form-control form-control-lg"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password" 
                        required
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
                            onChange={handleLoginTypeChange} 
                        />
                        <label className="form-check-label" htmlFor="studentRadio">
                            Sign Up as Student
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
                            onChange={handleLoginTypeChange} 
                        />
                        <label className="form-check-label" htmlFor="instituteRadio">
                            Sign Up as Institute
                        </label>
                    </div>
                </div>

                {/* Error message */}
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                {/* Sign up button */}
                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login" className="link-danger">Login</Link></p>
                </div>
            </form>
        </>
    );
};

export default authLayout(SignupPage);             




