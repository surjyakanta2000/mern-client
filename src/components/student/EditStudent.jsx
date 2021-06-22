import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { updateStudent, getSpecStudent } from "../../services/studentService";
import Input from "../common/Input";
import InputDept from "../common/InputDept";
import InputSem from "../common/InputSem";

const EditStudent = ({ history, match }) => {
  const [student, setStudent] = useState({
    studentRoll: "",
    studentName: "",
    studentDept: "",
    studentSemester: "",
    studentEmail: "",
    studentPhone: "",
    studentPassword: "",
  });
  useEffect(() => {
    const getSpecData = async () => {
      const student = await getSpecStudent(match.params.id);
      setStudent(student);
    };
    getSpecData();
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = async () => {
    await updateStudent(student._id, {
      studentRoll: student.studentRoll,
      studentName: student.studentName,
      studentDept: student.studentDept._id,
      studentSemester: student.studentSemester,
      studentEmail: student.studentEmail,
      studentPhone: student.studentPhone,
      studentPassword: student.studentPassword,
    });
    history.push("/students");
  };

  return (
    <Container>
      <h1>Edit Student..</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
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
          hidden={true}
        />

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditStudent;
