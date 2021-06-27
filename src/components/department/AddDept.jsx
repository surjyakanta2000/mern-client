import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
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
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Department Code"
          type="text"
          placeholder="Enter Code"
          name="deptCode"
          value={dept.deptCode}
          handleChange={handleChange}
        />
        <Input
          label="Department name"
          type="text"
          placeholder="Enter Name"
          name="deptName"
          value={dept.deptName}
          handleChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddDept;
