import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "./Input";
import { resetPassword } from "../../services/userService";

const Resetpassword = ({ match, history }) => {
  const [pass, setPass] = useState({
    password: "",
    cpassword: "",
    role: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
    setErr("");
  };

  const handleSubmit = async () => {
    const res = await resetPassword(match.params.id, {
      password: pass.password,
      cpassword: pass.cpassword,
      role: match.params.role,
    });
    if (res && res.message !== undefined && res.message !== "success")
      setErr(res.message);
    if (res && res.message === "success") history.push("/login");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center fw-bold">Reset Password</h1>
          <hr></hr>
          <Form onSubmit={(e) => e.preventDefault()}>
            {err && err !== "" && err !== undefined && (
              <div className="text-danger text-center fw-bold">{err}</div>
            )}
            <Input
              label="Password"
              className="bg-transparent"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={pass.password}
              handleChange={handleChange}
            />
            <Input
              label="Confirm Password"
              className="bg-transparent"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              value={pass.cpassword}
              handleChange={handleChange}
            />
            <span className="d-flex justify-content-center mt-2">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-dark"
                type="submit"
                style={{ width: "40%" }}
              >
                Reset
              </button>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Resetpassword;
