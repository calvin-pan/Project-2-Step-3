import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/Carousel1.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/Carousel2.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/Carousel3.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeCarousel;