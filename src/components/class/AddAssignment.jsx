import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../common/Input";
import { addAssignment } from "../../services/classService";

const AddAssignment = ({ history, match }) => {
  const [formData, setFormData] = useState("");
  const [assignment, setAssignment] = useState({
    assignClass: "",
    assignName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("assignFile", files[0]);
    data.append("assignClass", match.params.id);
    data.append("assignName", assignment.assignName);
    setFormData(data);
  };
  const handleSubmit = async () => {
    await addAssignment(formData);
    history.push("/dash");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Assignment Name"
              type="text"
              placeholder="Enter Assignment Name"
              name="assignName"
              value={assignment.assignName}
              handleChange={handleChange}
            />
            <Form.Group className="mb-3">
              <Form.Label>Choose an assignment</Form.Label>
              <Form.Control type="file" onChange={Upload} />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAssignment;
