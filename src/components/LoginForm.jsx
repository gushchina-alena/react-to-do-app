import '../assets/styles/LoginForm.css';
import React, { useState } from "react";
import authUsers from '../API/auth-users';


const LoginForm = ({isAuth, setIsAuth, changeIsAuth}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitForm(e) {
        e.preventDefault();
        if (authUsers[0].email === email && authUsers[0].password) {
            return alert('Success!');
        } else {
            return alert('No such user!');
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={submitForm}>
                <h1 className="form__title">Sign In</h1>
                <div className="form__input-block input-block">
                    <label className="input-block__label email" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-block__item" type="text" id="email" name="email"
                        placeholder="Enter the email" />
                    <div className="emailError"></div>
                </div>
                <div className="form__input-block input-block">
                    <label className="input-block__label" htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="input-block__item" type="password" name="password" id="password"
                        placeholder="Enter the password" />
                    <div className="passwordError"></div>
                </div>
                <button className="form__button button" type="submit" onClick={submitForm}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm