import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">FREE WATCHING MOVIES</div>
            <div className="title">ANYTIME & ANYWHERE</div>
            <div className="introButton mt-3">
              <Button variant="danger">See All List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
