import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userLogin } from "../services/userService";
import Input from "./common/Input";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const handleSubmit = async () => {
    const res = await userLogin(user);
    if (res && res.message !== undefined) setErr(res.message);
    else {
      localStorage.setItem("token", res);
      window.location = "/dash";
    }
  };

  return (
    <Container>
      <div className="model-class">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1
              className="text-center fw-bold"
              style={{
                color: "#5effe2",
                textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
              }}
            >
              Login
            </h1>
            <hr
              style={{
                color: "#5effe2",
              }}
            ></hr>
            <Form onSubmit={(e) => e.preventDefault()}>
              {err && err !== "" && err !== undefined && (
                <div className="text-danger text-center fw-bold">{err}</div>
              )}
              <Input
                label="Email ID"
                className="bg-transparent text-white"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                handleChange={handleChange}
              />
              <Input
                label="Password"
                className="bg-transparent text-white"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                handleChange={handleChange}
              />
              <Form.Group
                className="mb-1 ml-2"
                style={{
                  color: "#5effe2",
                }}
              >
                <Form.Label>
                  <h5
                    style={{
                      color: "#5effe2",
                      textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                    }}
                  >
                    Login As.
                  </h5>
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
                />
              </Form.Group>
              <span>
                <Link
                  style={{
                    color: "#5effe2",
                    textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                  }}
                  to="/usercheck"
                  className="fw-bold reset-span"
                >
                  Forget Password ?
                </Link>
              </span>
              <span className="d-flex justify-content-center mt-4">
                <button
                  onClick={handleSubmit}
                  className="btn custom-btn"
                  type="submit"
                  style={{ width: "40%" }}
                >
                  Login
                </button>
              </span>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
