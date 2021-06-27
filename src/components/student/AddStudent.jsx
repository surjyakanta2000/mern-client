import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addStudent } from "../../services/studentService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";

const AddStudent = ({ history }) => {
  const [student, setStudent] = useState({
    studentRoll: "",
    studentName: "",
    studentDept: "",
    studentSemester: "",
    studentEmail: "",
    studentPhone: "",
    studentPassword: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await addStudent(student);
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/students");
  };

  return (
    <Container>
      <h1>Add Student..</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Student Roll"
          type="text"
          placeholder="Enter Roll"
          name="studentRoll"
          value={student.studentRoll}
          handleChange={handleChange}
        />
        <Input
          label="Student Name"
          type="text"
          placeholder="Enter Name"
          name="studentName"
          value={student.studentName}
          handleChange={handleChange}
        />
        <InputDept
          handleChange={handleChange}
          value={student.studentDept}
          name="studentDept"
        />
        <InputSem
          handleChange={handleChange}
          value={student.studentSemester}
          name="studentSemester"
        />
        <Input
          label="Student Email"
          type="email"
          placeholder="Enter Email"
          name="studentEmail"
          value={student.studentEmail}
          handleChange={handleChange}
        />
        <Input
          label="Student Phone"
          type="text"
          placeholder="Enter Phone"
          name="studentPhone"
          value={student.studentPhone}
          handleChange={handleChange}
        />
        <Input
          label="Student Password"
          type="password"
          placeholder="Enter Password"
          name="studentPassword"
          value={student.studentPassword}
          handleChange={handleChange}
        />

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddStudent;
