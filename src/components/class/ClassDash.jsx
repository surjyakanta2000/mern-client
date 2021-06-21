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
      <Row>
        <Col>
          <h3>Welcome To Class</h3>
        </Col>
        <Col>
          <h3>{cls.clsName}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link
            className="btn btn-lg btn-outline-primary"
            to={`/classes/${match.params.id}/attened`}
          >
            Take Attendance
          </Link>
        </Col>
        <Col>
          <Link
            className="btn btn-lg btn-outline-primary"
            to={`/classes/${match.params.id}/assignment`}
          >
            Assignment
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassDash;
