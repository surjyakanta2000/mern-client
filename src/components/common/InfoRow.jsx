import { Row, Col } from "react-bootstrap";
const InfoRow = ({ label, value }) => {
  if (value === "") return null;
  return (
    <Row>
      <Col md={{ span: 1, offset: 0 }}>
        <h4
          style={{
            color: "#5effe2",
            textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
          }}
        >
          {label}
        </h4>
      </Col>
      <Col md={{ span: 1, offset: 2 }}>
        <h4
          style={{
            color: "#5effe2",
            textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
          }}
        >
          :
        </h4>
      </Col>
      <Col md={{ span: 3, offset: 0 }}>
        <h5
          style={{
            color: "white",
            borderBottom: "1px solid white",
            borderLeft: "1px solid white",
          }}
        >
          {value}
        </h5>
      </Col>
    </Row>
  );
};

export default InfoRow;
