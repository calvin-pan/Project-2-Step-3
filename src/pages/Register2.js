import React, { useState } from 'react';
import { Form, ProgressBar, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/Register2.css';
import Container from 'react-bootstrap/Container';

function Register2() {
    const openLink = () => {
        window.location.href = './Register3';
      };
    
    

  return (


    <div>
        
        <h1 className="title">Pick Your Programs</h1>

        <ProgressBar now={50} label={`${50}%`} className="progress-bar-container" />
        
        <div className="d-flex justify-content-center">
            <Form>

                <h2>Recreational Swimming</h2>

                {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                    type={type}
                    label={'Recreational Swimming - Weekdays - Day'}
                />

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Recreational Swimming - Weekdays - Evening'}
                />

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Recreational Swimming - Weekends - Evening'}
                />

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Recreational Swimming - Weekends - Evening'}
                />

                </div>
                ))}

                <h2>Swimming Lessons</h2>

                {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Swimming Lesson - Child Lessons'}
                />

                
                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Swimming Lesson - Adult Lessons'}
                />

                </div>
                ))}


                <h2>Competitive Swimming</h2>

                {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Competitve Swim - Beginner'}
                />

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Competitve Swim - Intermediate'}
                />

                <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Competitve Swim - Advanced'}
                />

                </div>
                ))}
                <div className="d-flex justify-content-center">
                <Button class="primary" onClick={openLink}>Next</Button>
                </div>
            </Form>
        </div>
        
    </div>
  );
}

export default Register2;