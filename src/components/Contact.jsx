import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
  };

  return (
      <Container className="container-fluid" style={{ height: '100vh'}}>
          <Row className="mt-5">
              <Col md={{ span: 6, offset: 3 }}>
                  <h2>Contact Us</h2>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter your name"
                          />
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                              type="email"
                              placeholder="Enter your email"
                          />
                      </Form.Group>

                      <Form.Group controlId="formMessage">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                              as="textarea"
                              rows={4}
                              placeholder="Enter your message"
                          />
                      </Form.Group>

                      <Row className="justify-content-end">
                          <Col md="auto">
                              <Button variant="primary" type="submit" className="mt-3">
                                  Submit
                              </Button>
                          </Col>
                      </Row>
                  </Form>
              </Col>
          </Row>
      </Container>
  );
};

export default Contact;

