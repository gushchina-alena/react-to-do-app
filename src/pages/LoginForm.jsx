import '../assets/styles/LoginForm.css';
import React, { useState } from "react";
import authUsers from '../API/auth-users';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if(isValid) {
            
        }
    }

const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true; 
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() === '') {
        emailErr.emptyEmail = 'Email is empty';
        isValid = false; 
    } else if (email.trim().match(emailFormat)) {
        isValid = true;
    } else {
        emailErr.incorrectEmail = 'Incorrect format'
        isValid = false;
    }

    if(password.trim() === '') {
        passwordErr.passwordEmpty = 'Password is empty';
        isValid = false;
    } else if (password.length <= 7) {
        passwordErr.passwordShort = 'Password should contain at least 8 characters';
        isValid = false;
    } else {
        isValid = true;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
}


    return (
        <div className="form-container">
            <form className="form">
                <h1 className="form__title">Sign In</h1>
                <div className="form__input-block input-block">
                    <label className="input-block__label email">Email</label>
                    <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="input-block__item" 
                    placeholder="Enter the email" />
                    {Object.keys(emailErr).map((key) => {
                    return <div style={{color: 'red'}}>{emailErr[key]}</div>
                })}
                </div>

                <div className="form__input-block input-block">
                    <label className="input-block__label">Password</label>
                    <input value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input-block__item" 
                    placeholder="Enter the password" />
                    {Object.keys(passwordErr).map((key) => {
                    return <div style={{color: 'red'}}>{passwordErr[key]}</div>
                })}
                </div>
                <button className="button" type="submit" onClick={onSubmit}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;