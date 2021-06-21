import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getCurrentUser } from "../../services/userService";
import { getSpecTeacher } from "../../services/techService";
import { getClassForTeacher } from "../../services/classService";
import TeacherTab from "./TeacherTab";

const TeacherDash = () => {
  const [tech, setTeacher] = useState({});
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      const teacherData = await getSpecTeacher(user._id);
      setTeacher(teacherData);
      const classes = await getClassForTeacher(user._id);
      setClasses(classes);
    };
    getData();
  }, []);
  return (
    <Container>
      <h1>Welcome to Teacher Dashboard...</h1>
      <Row>
        <Col xs={6} md={4}>
          <h2>Name</h2>
        </Col>
        <Col xs={6} md={8}>
          <h2>{tech.techName}</h2>
        </Col>
      </Row>
      <Row>
        <TeacherTab tech={tech} classes={classes} />
      </Row>
    </Container>
  );
};

export default TeacherDash;
