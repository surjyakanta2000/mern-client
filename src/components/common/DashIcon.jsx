import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DashIcon = ({ icon, path, label, count, bgColor }) => {
  return (
    <Col className="ml-3 d-flex justify-content-center">
      <Link className={`btn btn-lg ml-3 btn-${bgColor}`} to={path}>
        <Row>
          <Col>
            <FontAwesomeIcon size="5x" icon={icon} />
          </Col>
        </Row>
        <Row>
          <Col>
            {label} <Badge bg="secondary">{count}</Badge>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

export default DashIcon;
