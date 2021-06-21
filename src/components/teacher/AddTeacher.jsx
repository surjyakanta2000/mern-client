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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTech({ ...tech, [name]: value });
  };
  const handleSubmit = async () => {
    await addTeacher(tech);
    history.push("/teachers");
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Teacher Name"
          type="text"
          placeholder="Enter Name"
          name="techName"
          value={tech.techName}
          handleChange={handleChange}
        />
        <InputDept
          handleChange={handleChange}
          value={tech.techDept}
          name="techDept"
        />
        <Input
          label="Teacher Email"
          type="email"
          placeholder="Enter Email"
          name="techEmail"
          value={tech.techEmail}
          handleChange={handleChange}
        />
        <Input
          label="Teacher Phone"
          type="text"
          placeholder="Enter Phone"
          name="techPhone"
          value={tech.techPhone}
          handleChange={handleChange}
        />
        <Input
          label="Teacher Password"
          type="password"
          placeholder="Enter Password"
          name="techPassword"
          value={tech.techPassword}
          handleChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddTeacher;
