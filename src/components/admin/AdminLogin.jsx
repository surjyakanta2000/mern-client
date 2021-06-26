import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { userLogin } from "../../services/userService";
import Input from "../common/Input";

const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async () => {
    const token = await userLogin(user);
    localStorage.setItem("token", token);
    window.location = "/admin/dash";
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Admin Login</h2>
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

export default AdminLogin;
