import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getCurrentUser } from "../../services/userService";
import {
  getSpecStudent,
  getStudentAttend,
} from "../../services/studentService";
import StudentTab from "./StudentTab";
import { getClassForStudent } from "../../services/classService";
const StudentDash = () => {
  const [student, setStudent] = useState({});
  const [classes, setClasses] = useState([]);
  const [attendList, setAttendList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      const studentData = await getSpecStudent(user._id);
      setStudent(studentData);
      const studentClass = await getClassForStudent(
        studentData.studentDept._id,
        studentData.studentSemester
      );
      setClasses(studentClass);
      const attendList = await getStudentAttend(user._id);
      setAttendList(attendList);
    };
    getData();
  }, []);
  return (
    <Container>
      <h1>Welcome to student Dashboard...</h1>
      <Row>
        <Col xs={6} md={4}>
          <h2>Name</h2>
        </Col>
        <Col xs={6} md={8}>
          <h2>{student.studentName}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <h2>Roll.No</h2>
        </Col>
        <Col xs={6} md={8}>
          <h2>{student.studentRoll}</h2>
        </Col>
      </Row>
      <Row>
        <StudentTab
          student={student}
          classes={classes}
          attendList={attendList}
        />
      </Row>
    </Container>
  );
};

export default StudentDash;
