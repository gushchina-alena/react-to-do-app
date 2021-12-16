import React, { useState } from "react";
import App from '../App'

const Private = ({isAuth, changeIsAuth}) => {
    if (isAuth === false) {
        return (
            <>
            <div className="private-denied">Access denied. You need to sign in.</div>
            <div className="private-btn-container">
                <button className="private-btn" onClick={changeIsAuth}>Sign In</button>
            </div>
            </>
        )
    } 

    return (
        <div className='private-success'>
            <h2>
                Private zone
            </h2>
            <div>secret</div>
            <div className="private-btn-container">
                <button className="private-btn" onClick={changeIsAuth}>Sign Out</button>
            </div>
        </div>
    )
};

export default Private;