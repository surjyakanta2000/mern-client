import { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getSpecStudent, updateProfile } from "../../services/studentService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";
import Loader from "../common/Loader";

const ProfileUpdate = ({ match, history }) => {
  const [student, setStudent] = useState({});
  const [formData, setFormData] = useState("");

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const student = await getSpecStudent(match.params.id);
      setStudent(student);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const Upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("profilePic", files[0]);
    data.append("studentRoll", student.studentRoll);
    data.append("studentName", student.studentName);
    data.append("studentDept", student.studentDept._id);
    data.append("studentSemester", student.studentSemester);
    data.append("studentEmail", student.studentEmail);
    data.append("studentPhone", student.studentPhone);
    data.append("studentPassword", student.studentPassword);
    setFormData(data);
  };

  const handleSubmit = async () => {
    await updateProfile(student._id, formData);
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
              <Form onSubmit={(e) => e.preventDefault()}>
                <Col>
                  <Input
                    label="Student Roll"
                    type="text"
                    className="bg-transparent text-white"
                    placeholder="Enter Roll"
                    name="studentRoll"
                    value={student.studentRoll}
                    handleChange={handleChange}
                  />
                  <Input
                    label="Student Name"
                    type="text"
                    className="bg-transparent text-white"
                    placeholder="Enter Name"
                    name="studentName"
                    value={student.studentName}
                    handleChange={handleChange}
                  />
                  <InputDept
                    handleChange={handleChange}
                    value={student.studentDept}
                    name="studentDept"
                  />
                  <InputSem
                    handleChange={handleChange}
                    value={student.studentSemester}
                    name="studentSemester"
                  />
                </Col>
                <Row>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Student Email"
                      type="email"
                      placeholder="Enter Email"
                      name="studentEmail"
                      className="bg-transparent text-white"
                      value={student.studentEmail}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 4, offset: 2 }}>
                    <Input
                      label="Student Phone"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Phone"
                      name="studentPhone"
                      value={student.studentPhone}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Input
                    label="Student Password"
                    type="password"
                    placeholder="Enter Password"
                    name="studentPassword"
                    value={student.studentPassword}
                    handleChange={handleChange}
                    hidden
                  />

                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Address"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Address"
                      name="studentAddress"
                      value={student.studentAddress}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 4, offset: 2 }}>
                    <Input
                      label="DOB"
                      type="date"
                      className="bg-transparent text-white"
                      placeholder="DD/MM/YYYY"
                      name="studentDOB"
                      value={student.studentDOB}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Age"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Age"
                      name="studentAge"
                      value={student.studentAge}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 4, offset: 2 }}>
                    <Input
                      label="Gender"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Gender"
                      name="studentGender"
                      value={student.studentGender}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Input
                    label="Teacher Role"
                    type="text"
                    className="bg-transparent text-white"
                    placeholder="Enter Role"
                    name="role"
                    value={student.role}
                    handleChange={handleChange}
                    hidden
                  />
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Enter a Security Question"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Question"
                      name="securityQuestion"
                      value={student.securityQuestion}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={{ span: 6, offset: 0 }}>
                    <Input
                      label="Enter your security Answer"
                      type="text"
                      className="bg-transparent text-white"
                      placeholder="Enter Answer"
                      name="securityAnswer"
                      value={student.securityAnswer}
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
                    className="btn custom-btn mt-1"
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

export default ProfileUpdate;
