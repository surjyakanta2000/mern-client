import { Row, Col } from "react-bootstrap";
const InfoRow = ({ label, value }) => {
  return (
    <Row>
      <Col xs={6} md={4}>
        <h4>{label}</h4>
      </Col>
      <Col xs={6} md={8}>
        <h4>{value}</h4>
      </Col>
    </Row>
  );
};

export default InfoRow;
