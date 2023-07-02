import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../styles/Register3.css';

function Register3() {
  const [selectedOption, setSelectedOption] = useState('');
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);

    // Clear input values and display text
    setInput1Value('');
    setInput2Value('');
    setInput3Value('');
    setDisplayText(`Please mail cheques to:
    123 Anywhere Street
    City, Province, Postal Code`);
  };

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  };

  const handleDisplayTextChange = () => {
    setDisplayText(`${input1Value} ${input2Value} ${input3Value}`);
  };

  const openLink = () => {
    window.location.href = './Register4';
  };

  return (
    <>
      <h1 className="title">Enter Your Payment Information</h1>

      <ProgressBar now={75} label={`75%`} className="progress-bar-container" />

      <div className="d-flex justify-content-center">
        <Form>
          <div className="radio-group">
            <Form.Check
              type="radio"
              id="radioButton1"
              label="Pay by Credit Card"
              value="inputs"
              checked={selectedOption === 'inputs'}
              onChange={handleRadioChange}
              className="custom-label"
            />

            {selectedOption === 'inputs' && (
              <div className="radio-content">
                <Form.Control
                  type="text"
                  placeholder="Credit Card Number"
                  value={input1Value}
                  onChange={handleInput1Change}
                  className="input-field"
                />

                <Form.Control
                  type="text"
                  placeholder="CVV"
                  value={input2Value}
                  onChange={handleInput2Change}
                  className="input-field"
                />

                <Form.Control
                  type="text"
                  placeholder="Date of Expiry"
                  value={input3Value}
                  onChange={handleInput3Change}
                  className="input-field"
                />
              </div>
            )}
          </div>

          <div className="radio-group">
            <Form.Check
              type="radio"
              id="radioButton2"
              label={"Pay by Cheque"}
              value="text"
              checked={selectedOption === 'text'}
              onChange={handleRadioChange}
              className="custom-label"
            />

            {selectedOption === 'text' && <p className="radio-content">{displayText}</p>}
          </div>

          <div className="d-flex justify-content-center">
            <Button class="primary" onClick={openLink} className="button">Next</Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register3;
