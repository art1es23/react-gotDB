import React from 'react';

import './errorMessage.css';
import img from './img/logo192.png';
const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="Error"/>
            <span>Something goes wrong!!</span> 
        </>
    )
}

export default ErrorMessage;