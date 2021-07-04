import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../common/Input";
import { addAssignment } from "../../services/classService";

const AddAssignment = ({ history, match }) => {
  const [formData, setFormData] = useState("");
  const [assignment, setAssignment] = useState({
    assignClass: "",
    assignName: "",
    lastDate: "",
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
    data.append("lastDate", assignment.lastDate);
    setFormData(data);
  };
  const handleSubmit = async () => {
    console.log(formData);

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
              className="bg-transparent text-white"
              value={assignment.assignName}
              handleChange={handleChange}
            />
            <Input
              label="Late Date"
              type="date"
              className="bg-transparent text-white"
              placeholder="Enter Last Name"
              name="lastDate"
              value={assignment.lastDate}
              handleChange={handleChange}
            />
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  color: "#5effe2",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                Choose an assignment
              </Form.Label>
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
