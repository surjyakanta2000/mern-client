import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { updateTeacher, getSpecTeacher } from "../../services/techService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";

const EditTeacher = ({ history, match }) => {
  const [tech, setTech] = useState({
    techName: "",
    techDept: "",
    techEmail: "",
    techPhone: "",
    techPassword: "",
    role: "",
  });
  useEffect(() => {
    const getSpecData = async () => {
      const tech = await getSpecTeacher(match.params.id);
      setTech(tech);
    };
    getSpecData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTech({ ...tech, [name]: value });
  };
  const handleSubmit = async () => {
    await updateTeacher(tech._id, {
      role: tech.role,
      techName: tech.techName,
      techDept: tech.techDept._id,
      techEmail: tech.techEmail,
      techPhone: tech.techPhone,
      techPassword: tech.techPassword,
    });
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
          hidden={true}
        />
        <Input
          label="Teacher Role"
          type="text"
          placeholder="Enter Role"
          name="role"
          value={tech.role}
          handleChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditTeacher;
