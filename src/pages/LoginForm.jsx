import '../assets/styles/LoginForm.css';
import React, { useContext, useState } from "react";
// import authUsers from '../API/auth-users';
import { useHistory } from "react-router-dom";
import { UserContext  } from '../UserContext';
import userData from '../data/auth-users';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const {isAuth, setIsAuth} = useContext(UserContext);

    let history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();
        formValidation();
    }

const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    const emailIsCorrect = userData.find(user => user.email === email);
    const passwordIsCorrect = userData.find(user => user.password === password);

    if (email.trim() === '') {
        emailErr.emptyEmail = 'Email is empty';
        
    } else if (emailIsCorrect) {
        setIsAuth(true);
        history.push("/protected");

        
    } else {
        emailErr.incorrectEmail = 'Incorrect email';
    }

    if(password.trim() === '') {
        passwordErr.passwordEmpty = 'Password is empty';
    } else if (passwordIsCorrect) {
        setIsAuth(true);
        history.push("/protected");


    } else {
        passwordErr.incorrectPassword = 'Incorrect password';
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
}


    return (
        <div className="form-container">
            <form className="form" onSubmit={onSubmit}>
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
                    type="password"
                    placeholder="Enter the password" />
                    {Object.keys(passwordErr).map((key) => {
                    return <div style={{color: 'red'}}>{passwordErr[key]}</div>
                })}
                </div>
                <button className="button" type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;