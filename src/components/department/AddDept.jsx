import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addDept } from "../../services/deptService";
import Input from "../common/Input";

const AddDept = ({ history }) => {
  const [dept, setDept] = useState({
    deptCode: "",
    deptName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDept({ ...dept, [name]: value });
  };
  const handleSubmit = async () => {
    await addDept(dept);
    history.push("/departments");
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
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
