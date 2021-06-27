import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { userCheck, ansCheck } from "../../services/userService";
import Input from "./Input";

const UserCheck = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    role: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const [err, setErr] = useState("");
  const [userFound, setUserFound] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const emailCheck = async () => {
    let res = await userCheck({ email: user.email, role: user.role });
    if (res && res.message !== undefined) setErr(res.message);
    if (res.securityQuestion !== undefined) {
      setUser(res);
      user.securityAnswer = "";
      setUserFound(true);
    }
  };

  const securityCheck = async () => {
    let result = await ansCheck({
      email: user.email,
      securityAnswer:
        user.securityAnswer === undefined ? "" : user.securityAnswer,
      role: user.role,
    });

    if (result && result.message !== undefined && result.message !== "success")
      setErr(result.message);
    if (result && result.message === "success")
      history.push(`/resetpassword/${user.role}/${result._id}`);
  };

  const SecurityComp = () => {
    return (
      <>
        <Input
          label="Your Security Question"
          className="bg-transparent"
          type="text"
          name="securityQuestion"
          value={user.securityQuestion}
          handleChange={handleChange}
          disabled={userFound}
        />
        <Input
          label="Enter Your Secrity Answer"
          className="bg-transparent"
          placeholder="Enter your answer"
          type="text"
          name="securityAnswer"
          value={user.securityAnswer}
          handleChange={handleChange}
        />
      </>
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center fw-bold">Check User</h1>
          <hr></hr>
          <Form onSubmit={(e) => e.preventDefault()}>
            {err && err !== "" && err !== undefined && (
              <div className="text-danger text-center fw-bold">{err}</div>
            )}
            <Input
              label="Email ID"
              className="bg-transparent"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={user.email}
              handleChange={handleChange}
              disabled={userFound}
            />
            <Form.Group className="mb-1 ml-2" hidden={userFound}>
              <Form.Label>
                <h5>Choose Role</h5>
                <span></span>
              </Form.Label>
              <Form.Check
                onChange={handleChange}
                className="bg-transparent"
                inline
                label="Student"
                name="role"
                type={"radio"}
                value="student"
                required
                disabled={userFound}
              />
              <Form.Check
                onChange={handleChange}
                className="bg-transparent"
                inline
                label="Teacher"
                name="role"
                type={"radio"}
                value="teacher"
                required
                disabled={userFound}
              />
              <Form.Check
                onChange={handleChange}
                className="bg-transparent"
                inline
                label="HOD"
                name="role"
                type={"radio"}
                value="hod"
                required
                disabled={userFound}
              />
            </Form.Group>

            {userFound && <SecurityComp />}

            <span className="d-flex justify-content-center mt-2">
              <button
                onClick={userFound === false ? emailCheck : securityCheck}
                className="btn btn-outline-dark"
                type="submit"
                style={{ width: "40%" }}
              >
                Submit
              </button>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCheck;
