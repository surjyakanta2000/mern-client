import { useEffect, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { getSpecTeacher, updateProfile } from "../../services/techService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import Loader from "../common/Loader";

const TechProfileUpdate = ({ match, history }) => {
  const [tech, setTeacher] = useState({
    securityQuestion: "",
    securityAnswer: "",
  });
  const [formData, setFormData] = useState("");

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const t = await getSpecTeacher(match.params.id);
      setTeacher(t);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...tech, [name]: value });
  };

  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("profilePic", files[0]);
    data.append("techAddress", tech.techAddress);
    data.append("techDOB", tech.techDOB);
    data.append("techName", tech.techName);
    data.append("techDept", tech.techDept._id);
    data.append("techEmail", tech.techEmail);
    data.append("techPhone", tech.techPhone);
    data.append("techPassword", tech.techPassword);
    data.append("techAge", tech.techAge);
    data.append("techGender", tech.techGender);
    data.append("securityQuestion", tech.securityQuestion);
    data.append("securityAnswer", tech.securityAnswer);
    data.append("role", tech.role);
    setFormData(data);
  };

  const handleSubmit = async () => {
    await updateProfile(tech._id, formData);
    history.push("/dash");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Update Profile</h1>
              <Form onSubmit={(e) => e.preventDefault()} className="Form-Input">
                <Input
                  label="Teacher Name"
                  type="text"
                  placeholder="Enter Name"
                  name="techName"
                  value={tech.techName}
                  handleChange={handleChange}
                />
                <InputDept
                  handleChange={handleChange}
                  value={tech.techDept}
                  name="techDept"
                />
                <Input
                  label="Teacher Email"
                  type="email"
                  placeholder="Enter Email"
                  name="techEmail"
                  value={tech.techEmail}
                  handleChange={handleChange}
                />
                <Input
                  label="Teacher Phone"
                  type="text"
                  placeholder="Enter Phone"
                  name="techPhone"
                  value={tech.techPhone}
                  handleChange={handleChange}
                />
                <Input
                  label="Teacher Password"
                  type="password"
                  placeholder="Enter Password"
                  name="techPassword"
                  value={tech.techPassword}
                  handleChange={handleChange}
                />
                <Input
                  label="Teacher Address"
                  type="text"
                  placeholder="Enter Address"
                  name="techAddress"
                  value={tech.techAddress}
                  handleChange={handleChange}
                />
                <Input
                  label="DOB"
                  type="text"
                  placeholder="DD/MM/YYYY"
                  name="techDOB"
                  value={tech.techDOB}
                  handleChange={handleChange}
                />
                <Input
                  label="Age"
                  type="text"
                  placeholder="Enter Age"
                  name="techAge"
                  value={tech.techAge}
                  handleChange={handleChange}
                />
                <Input
                  label="Gender"
                  type="text"
                  placeholder="Enter Gender"
                  name="techGender"
                  value={tech.techGender}
                  handleChange={handleChange}
                />
                <Input
                  label="Teacher Role"
                  type="text"
                  placeholder="Enter Role"
                  name="role"
                  value={tech.role}
                  handleChange={handleChange}
                  hidden
                />
                <Input
                  label="Enter a Security Question"
                  type="text"
                  placeholder="Enter Question"
                  name="securityQuestion"
                  value={tech.securityQuestion}
                  handleChange={handleChange}
                />
                <Input
                  label="Enter your security Answer"
                  type="text"
                  placeholder="Enter Answer"
                  name="securityAnswer"
                  value={tech.securityAnswer}
                  handleChange={handleChange}
                />

                <Form.Group className="mb-3">
                  <Form.Label>Choose a Passport Size Photo</Form.Label>
                  <Form.Control type="file" onChange={Upload} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    className="btn text-white"
                    style={{ width: "40%", marginBottom: "1rem" }}
                    onClick={handleSubmit}
                    variant="success"
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TechProfileUpdate;
