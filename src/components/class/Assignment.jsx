import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Assignment = ({ match }) => {
  return (
    <>
      <Container>
        <h2>All Assignments</h2>
        <Row className="model-dash ">
          <Col md={{ span: 3, offset: 2 }} className="mt-3 mb-3">
            <Link
              className="btn custom-btn"
              to={`/classes/${match.params.id}/assignment/add`}
            >
              Add Assignment
            </Link>
          </Col>
          <Col md={{ span: 3, offset: 3 }} className="mt-3 mb-3">
            <Link
              className="btn custom-btn"
              to={`/classes/${match.params.id}/assignment/all`}
            >
              All Assignment
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Assignment;
