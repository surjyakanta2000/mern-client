import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSpecClass } from "../../services/classService";
const ClassDash = ({ match }) => {
  const [cls, setCls] = useState({});
  useEffect(() => {
    const getData = async () => {
      const cls = await getSpecClass(match.params.id);
      setCls(cls);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <div className="model-dash mt-4">
        <Row className="mt-4">
          <Col className="ml-3 d-flex justify-content-center">
            <h3>Welcome To Class</h3>
          </Col>
          <Col>
            <h3>{cls.clsName}</h3>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>

        <Row className="mb-4 mt-3 d-flex justify-content-center">
          <Col className="ml-3 d-flex justify-content-center">
            <Link
              className="btn btn-lg btn-outline-primary"
              to={`/classes/${match.params.id}/studymaterials`}
            >
              Study Materials
            </Link>
          </Col>
          <Col className="ml-3 d-flex justify-content-center">
            <Link
              className="btn btn-lg btn-outline-primary"
              to={`/classes/${match.params.id}/attened`}
            >
              Attendance
            </Link>
          </Col>
          <Col className="ml-3 d-flex justify-content-center">
            <Link
              className="btn btn-lg btn-outline-primary"
              to={`/classes/${match.params.id}/assignment`}
            >
              Assignment
            </Link>
          </Col>
          <Col className="ml-3 d-flex justify-content-center">
            <button
              onClick={() => {
                window.open("https://meet.google.com", "_blank");
              }}
              className="btn btn-lg btn-outline-primary"
            >
              Video Class
            </button>
          </Col>
          <Col className="ml-3 d-flex justify-content-center">
            <button
              onClick={() => {
                window.open("https://docs.google.com/forms/u/0/", "_blank");
              }}
              className="btn btn-lg btn-outline-primary"
            >
              Forms
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ClassDash;
