import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../common/Input";
import { addNotice } from "../../services/adminService";

const AddAssignment = ({ history }) => {
  const [formData, setFormData] = useState("");
  const [notice, setNotice] = useState({ noticeName: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  };

  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("noticeFile", files[0]);
    data.append("noticeName", notice.noticeName);
    setFormData(data);
  };
  const handleSubmit = async () => {
    await addNotice(formData);
    history.push("/admin/dash");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Notice Name"
              type="text"
              placeholder="Enter Assignment Name"
              name="noticeName"
              value={notice.noticeName}
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
