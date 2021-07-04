import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Assignment = ({ match }) => {
  return (
    <>
      <Container>
        <h2
          style={{
            color: "#5effe2",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
          }}
        >
          All Assignments
        </h2>
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
