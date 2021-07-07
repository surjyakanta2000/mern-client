import { Row, Col } from "react-bootstrap";
const InfoRow = ({ label, value }) => {
  if (value === "") return null;
  return (
    <Row>
      <Col md={{ span: 1, offset: 0 }}>
        <h4>{label}</h4>
      </Col>
      <Col md={{ span: 1, offset: 2 }}>
        <h4>:</h4>
      </Col>
      <Col md={{ span: 3, offset: 0 }}>
        <h5
          style={{
            color: "black",
          }}
        >
          {value}
        </h5>
      </Col>
    </Row>
  );
};

export default InfoRow;
