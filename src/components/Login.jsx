import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { userLogin } from "../services/userService";
import Input from "./common/Input";

const Login = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async () => {
    const token = await userLogin(user);
    localStorage.setItem("token", token);
    window.location = "/dash";
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Email ID"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={user.email}
              handleChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              handleChange={handleChange}
            />
            <Form.Group className="mb-1 ml-2">
              <Form.Label>Login As.</Form.Label>
              <Form.Check
                onChange={handleChange}
                inline
                label="Student"
                name="role"
                type={"radio"}
                value="student"
                required
              />
              <Form.Check
                onChange={handleChange}
                inline
                label="Teacher"
                name="role"
                type={"radio"}
                value="teacher"
                required
              />
              <Form.Check
                onChange={handleChange}
                inline
                label="HOD"
                name="role"
                type={"radio"}
                value="hod"
                required
              />
            </Form.Group>
            <span className="d-flex justify-content-center">
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Login
              </Button>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
