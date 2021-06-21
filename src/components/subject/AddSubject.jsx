import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addSubject } from "../../services/subService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";

const AddSubject = ({ history }) => {
  const [sub, setSub] = useState({
    subCode: "",
    subName: "",
    subDept: "",
    subSemester: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSub({ ...sub, [name]: value });
  };
  const handleSubmit = async () => {
    await addSubject(sub);
    history.push("/subjects");
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Subject Code"
          type="text"
          placeholder="Enter Subject Code"
          name="subCode"
          value={sub.subCode}
          handleChange={handleChange}
        />
        <Input
          label="Subject Name"
          type="text"
          placeholder="Enter subject name"
          name="subName"
          value={sub.subName}
          handleChange={handleChange}
        />
        <InputDept
          handleChange={handleChange}
          value={sub.subDept}
          name="subDept"
        />
        <InputSem
          handleChange={handleChange}
          value={sub.subSemester}
          name="subSemester"
        />
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddSubject;
