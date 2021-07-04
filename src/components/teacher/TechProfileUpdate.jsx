import { useEffect, useState } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
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
              <h3
                style={{
                  color: "#5effe2",
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              >
                Update Profile
              </h3>
              <Form onSubmit={(e) => e.preventDefault()} className="Form-Input">
                <Col>
                  <Input
                    label="Teacher Name"
                    type="text"
                    placeholder="Enter Name"
                    className="bg-transparent text-white"
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
                    className="bg-transparent text-white"
                    name="techEmail"
                    value={tech.techEmail}
                    handleChange={handleChange}
                  />
                  <Input
                    label="Teacher Phone"
                    type="text"
                    placeholder="Enter Phone"
                    className="bg-transparent text-white"
                    name="techPhone"
                    value={tech.techPhone}
                    handleChange={handleChange}
                  />
                  <Input
                    label="Teacher Password"
                    type="password"
                    placeholder="Enter Password"
                    className="bg-transparent text-white"
                    name="techPassword"
                    value={tech.techPassword}
                    handleChange={handleChange}
                    hidden
                  />
                </Col>
                <Row>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Teacher Address"
                      type="text"
                      placeholder="Enter Address"
                      className="bg-transparent text-white"
                      name="techAddress"
                      value={tech.techAddress}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 4, offset: 2 }}>
                    <Input
                      label="DOB"
                      type="date"
                      name="techDOB"
                      className="bg-transparent text-white"
                      value={tech.techDOB}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Age"
                      type="text"
                      placeholder="Enter Age"
                      className="bg-transparent text-white"
                      name="techAge"
                      value={tech.techAge}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 4, offset: 2 }}>
                    <Input
                      label="Gender"
                      type="text"
                      placeholder="Enter Gender"
                      className="bg-transparent text-white"
                      name="techGender"
                      value={tech.techGender}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Input
                    label="Teacher Role"
                    type="text"
                    placeholder="Enter Role"
                    className="bg-transparent text-white"
                    name="role"
                    value={tech.role}
                    handleChange={handleChange}
                    hidden
                  />
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Enter a Security Question"
                      className="bg-transparent text-white"
                      type="text"
                      placeholder="Enter Question"
                      name="securityQuestion"
                      value={tech.securityQuestion}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Enter your security Answer"
                      className="bg-transparent text-white"
                      type="text"
                      placeholder="Enter Answer"
                      name="securityAnswer"
                      value={tech.securityAnswer}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{
                        color: "#5effe2",
                        textShadow:
                          "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                      }}
                    >
                      Choose a Passport Size Photo
                    </Form.Label>
                    <Form.Control type="file" onChange={Upload} />
                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ width: "30%" }}
                    onClick={handleSubmit}
                    variant="primary"
                    className="btn custom-btn mt-2"
                    type="submit"
                  >
                    Update
                  </button>
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
