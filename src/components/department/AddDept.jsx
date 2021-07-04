import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { addDept } from "../../services/deptService";
import Input from "../common/Input";

const AddDept = ({ history }) => {
  const [dept, setDept] = useState({
    deptCode: "",
    deptName: "",
  });
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDept({ ...dept, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await addDept(dept);
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/departments");
  };

  return (
    <Container>
      <h1
        style={{
          color: "#5effe2",
          textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
        }}
      >
        Add Department
      </h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Department Code"
          type="text"
          placeholder="Enter Code"
          className="bg-transparent text-white"
          name="deptCode"
          value={dept.deptCode}
          handleChange={handleChange}
        />
        <Input
          label="Department name"
          type="text"
          placeholder="Enter Name"
          className="bg-transparent text-white"
          name="deptName"
          value={dept.deptName}
          handleChange={handleChange}
        />
        <div className="d-flex justify-content-center">
          <button
            style={{ width: "30%" }}
            onClick={handleSubmit}
            variant="primary"
            className="btn custom-btn mt-4"
            type="submit"
          >
            Add
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default AddDept;
