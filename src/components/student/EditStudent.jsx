import { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
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
  const [err, setErr] = useState("");

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
    setErr("");
  };
  const handleSubmit = async () => {
    const res = await updateStudent(student._id, {
      studentRoll: student.studentRoll,
      studentName: student.studentName,
      studentDept: student.studentDept._id,
      studentSemester: student.studentSemester,
      studentEmail: student.studentEmail,
      studentPhone: student.studentPhone,
      studentPassword: student.studentPassword,
    });
    if (res && res.message !== undefined) setErr(res.message);
    else history.push("/students");
  };

  return (
    <Container>
      <h1>Edit Student..</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        {err && err !== "" && err !== undefined && (
          <div className="text-danger text-center fw-bold">{err}</div>
        )}
        <Input
          label="Student Roll"
          type="text"
          placeholder="Enter Roll"
          className="bg-transparent text-dark"
          name="studentRoll"
          value={student.studentRoll}
          handleChange={handleChange}
        />
        <Input
          label="Student Name"
          type="text"
          placeholder="Enter Name"
          className="bg-transparent text-dark"
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
          className="bg-transparent text-dark"
          name="studentEmail"
          value={student.studentEmail}
          handleChange={handleChange}
        />
        <Input
          label="Student Phone"
          type="text"
          placeholder="Enter Phone"
          name="studentPhone"
          className="bg-transparent text-dark"
          value={student.studentPhone}
          handleChange={handleChange}
        />
        <Input
          label="Student Password"
          type="password"
          placeholder="Enter Password"
          className="bg-transparent text-dark"
          name="studentPassword"
          value={student.studentPassword}
          handleChange={handleChange}
          hidden={true}
        />

        <div className="d-flex justify-content-center">
          <button
            style={{ width: "30%" }}
            onClick={handleSubmit}
            variant="primary"
            className="btn custom-btn mt-4"
            type="submit"
          >
            Update
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default EditStudent;
