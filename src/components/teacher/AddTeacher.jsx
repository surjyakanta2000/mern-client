import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addTeacher } from "../../services/techService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";

const AddTeacher = ({ history }) => {
  const [tech, setTech] = useState({
    techName: "",
    techDept: "",
    techEmail: "",
    techPhone: "",
    techPassword: "",
  });
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTech({ ...tech, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await addTeacher(tech);
    if (res && res.message !== undefined) setErr(res.message);
    history.goBack();
  };

  return (
    <Container>
      <h1
        style={{
          color: "#5effe2",
          textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
        }}
      >
        Add Teacher
      </h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
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
          className="bg-transparent text-white"
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
        />
        <div className="d-flex justify-content-center">
          <Button
            style={{
              width: "30%",
            }}
            onClick={handleSubmit}
            className="btn custom-btn btn-lg mt-4"
            type="submit"
          >
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddTeacher;
