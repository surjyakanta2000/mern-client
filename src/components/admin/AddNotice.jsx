import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
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
      <div className="d-flex justify-content-md-center">
        <h1
          style={{
            color: "#5effe2",
            textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
          }}
        >
          Add Notice
        </h1>
      </div>
      <hr
        style={{
          color: "#5effe2",
          height: "3px",
        }}
      ></hr>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Notice Name"
              type="text"
              placeholder="Enter Notice Name"
              className="bg-transparent text-white"
              name="noticeName"
              value={notice.noticeName}
              handleChange={handleChange}
            />

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  color: "#5effe2",
                  textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                }}
              >
                Choose a Notice
              </Form.Label>
              <Form.Control type="file" onChange={Upload} />
            </Form.Group>
            <button
              onClick={handleSubmit}
              variant="primary"
              className="btn custom-btn"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAssignment;
