import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5" style={{height:"100vh"}}>
      <h2>About Us</h2>
      <Row>
        <Col md={6}>
          <img
            src="/sportchaos-about.jpg"
            alt="Our Store"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <p>
            Welcome to SportChaos, your ultimate destination for high-quality sports
            gear and accessories. We specialize in providing a wide range of sports items,
            with a primary focus on two exciting categories: flip flops and swimsuits.
          </p>
          <p>
            Our flip flops are designed for both comfort and style. Whether you're strolling
            on the beach, lounging by the pool, or enjoying a casual day out, our flip flops
            will keep your feet comfortable and trendy.
          </p>
          <p>
            Dive into our collection of swimsuits that cater to various tastes and preferences.
            From sleek one-pieces to vibrant bikinis, we offer swimwear that lets you express
            your unique style while feeling confident and ready to hit the water.
          </p>
          <p>
            At SportChaos, we are committed to delivering top-notch customer service. Our team
            is dedicated to helping you find the perfect products for your active lifestyle.
            We believe that sports and fitness should be accessible to everyone, and our goal
            is to provide you with the gear you need to make the most of your athletic pursuits.
          </p>
          <p>
            Thank you for choosing SportChaos as your trusted source for flip flops, swimsuits,
            and more. Join us in making every activity a memorable and enjoyable experience.
            Get ready to ride the wave of style and performance with SportChaos!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
