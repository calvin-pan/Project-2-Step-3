import React, { useState } from 'react';
import { Form, ProgressBar, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../styles/Register1.css';

function Register1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [progress, setProgress] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
    updateProgress();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateProgress();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateProgress();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    updateProgress();
  };

  const updateProgress = () => {
    const fieldsCompleted = [name, email, password, confirmPassword].filter(Boolean).length;
    const progressPercentage = (fieldsCompleted / 4) * 100;
    setProgress(progressPercentage);
  };

  const openLink = () => {
    window.location.href = './Register2';
  };

  return (
    <div>
      <h1 className="title">Registration Form</h1>
      <ProgressBar now='25' label={`25%`} className="progress-bar-container"/>
      <Container className="justify-content-center">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={name} onChange={handleNameChange} />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={name} onChange={handleNameChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" value={name} onChange={handleNameChange} />
          </Form.Group>

          <div className="d-flex justify-content-center">
          <Button class="primary" className="button" onClick={openLink}>Next</Button>
          </div>
        </Form>
        </Container>

      

    </div>
  );
};

export default Register1;
