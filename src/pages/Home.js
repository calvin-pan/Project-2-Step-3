import React from "react";
import '../styles/Home.css';
import HomeCarousel from "../components/HomeCarousel";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function Home(){
  const openLink = () => {
    window.location.href = './Aboutus';
  };

  return (
    <div>
    <div className="two-column-layout">
      <div className="left-column">
        <h1 className="paddedTitle">Welcome To Serenity Swim Club.</h1>

        <div className="descriptionContainer">
        <p className="paddedDescription">Dive into a world of aquatic excellence and join our vibrant community where swimmers of all ages and skill levels come together to improve technique, build endurance, and foster a love for the water.
          Led by experienced coaches, our inclusive club offers tailored programs for beginners and competitive swimmers alike.
          With state-of-the-art facilities, we prioritize safety and provide a secure environment.
          Whether you're seeking fitness, competition, or relaxation, Serenity Swim Club is your destination for an unforgettable swimming experience.
          Get ready to make a splash with Serenity!</p>
          </div>

          <div className="buttonPadding">
          <Button variant="outline-primary" className="custom-button" onClick={openLink}>Learn More</Button>
          </div>
      </div>
      <div className="right-column">
        <HomeCarousel />
      </div>
    </div>

    <Container className="sponsors">
      <h2 className="sponsorsTitle">Sponsors and Partners</h2>
      <Row>
        <Col>
          <img src="images/sponsor1.png" alt="Image 1" />
        </Col>
        <Col>
          <img src="images/sponsor2.png" alt="Image 2" />
        </Col>
        <Col>
          <img src="images/sponsor3.png" alt="Image 3" />
        </Col>
        </Row>
        </Container>

      <h2 className="followTitle">Follow Us!</h2>
      <div className="image-container">
        <img src="images/facebook.svg" alt="Image 1" height="50px" width="50px" />
        <img src="images/instagram.svg" alt="Image 2" height="50px" width="50px" />
        <img src="images/twitter.svg" alt="Image 3" height="50px" width="50px" />
    </div>
    </div>
  );
}

export default Home;