import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../styles/Register4.css';

function Register4() {

    const number = Math.floor(Math.random() * 100) + 1;

    const openLink = () => {
        window.location.href = './';
    };

  return (
    <>
   
    <h1 className="title">Your form has been submitted!</h1>

    <ProgressBar now={100} label={`100%`} className="progress-bar-container" />

    <h2 className="text-center">Confirmation number: {number}</h2>

    <p className="text-center">A confirmation email has been sent to your provided email address.</p>
    <div className="button-container">
      <Button class="primary" onClick={openLink} className="button">Return Home</Button>
      </div>
    </>
  );
}

export default Register4;