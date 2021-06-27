import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getSpecDept, updateDept } from "../../services/deptService";
import Input from "../common/Input";

const EditDept = ({ history, match }) => {
  const [dept, setDept] = useState({
    deptCode: "",
    deptName: "",
  });
  const [err, setErr] = useState("");

  useEffect(() => {
    const getSpecData = async () => {
      const dept = await getSpecDept(match.params.id);
      setDept(dept);
    };
    getSpecData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDept({ ...dept, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await updateDept(dept._id, {
      deptCode: dept.deptCode,
      deptName: dept.deptName,
    });
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/departments");
  };

  return (
    <Container>
      <h1>Update Department</h1>
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
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditDept;
