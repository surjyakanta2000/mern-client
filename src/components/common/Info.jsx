import { Row, Col } from "react-bootstrap";
import InfoRow from "./InfoRow";
const Info = ({ tech }) => {
  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Name" value={tech.techName} />
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow
            label="Department"
            value={tech.techDept === undefined ? "" : tech.techDept.deptCode}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Email" value={tech.techEmail} />
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Phone" value={tech.techPhone} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Address" value={tech.techAddress} />
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="DOB" value={tech.techDOB} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Age" value={tech.techAge} />
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <InfoRow label="Gender" value={tech.techGender} />
        </Col>
      </Row>
    </>
  );
};

export default Info;
