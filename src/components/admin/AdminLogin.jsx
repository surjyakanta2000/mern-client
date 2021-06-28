import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { userLogin } from "../../services/userService";
import Input from "../common/Input";

const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await userLogin(user);
    if (res && res.message !== undefined) {
      setErr(res.message);
    } else {
      localStorage.setItem("token", res);
      window.location = "/admin/dash";
    }
  };
  return (
    <Container style={{ width: "70%" }}>
      <div className="model-dash mt-5">
        <Row className="justify-content-md-center mt-3">
          <Col xs={12} md={6}>
            <h2 className="text-center">Admin Login</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              {err && err !== "" && err !== undefined && (
                <div className="text-danger text-center fw-bold">{err}</div>
              )}
              <Input
                label="Email ID"
                type="email"
                className="bg-transparent"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                handleChange={handleChange}
              />
              <Input
                label="Password"
                className="bg-transparent"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                handleChange={handleChange}
              />
              <span className="d-flex justify-content-center">
                <button
                  onClick={handleSubmit}
                  variant="secondary"
                  type="submit"
                  style={{ width: "40%" }}
                  className="btn btn-outline-secondary mt-2 mb-4"
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

export default AdminLogin;
