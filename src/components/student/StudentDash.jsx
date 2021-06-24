import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { getCurrentUser } from "../../services/userService";
import {
  getSpecStudent,
  getStudentAttend,
} from "../../services/studentService";
import StudentTab from "./StudentTab";
import { getClassForStudent } from "../../services/classService";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";
import defaultProfilePic from "../../images/defaultProfilePic.png";

const StudentDash = () => {
  const [student, setStudent] = useState({});
  const [classes, setClasses] = useState([]);
  const [attendList, setAttendList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      const studentData = await getSpecStudent(user._id);
      setStudent(studentData);
      const studentClass = await getClassForStudent(
        studentData.studentDept._id,
        studentData.studentSemester
      );
      setLoader(false);
      setClasses(studentClass);
      const attendList = await getStudentAttend(user._id);
      setAttendList(attendList);
    };
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col>
              <h2>Student Dashboard</h2>
            </Col>
            <Col className="text-end">
              <Link
                className="btn"
                to={`/profile/update/${student._id}`}
                title="Edit Profile"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
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
                <Col xs={6} md={4}>
                  <h2>Phone No.</h2>
                </Col>
                <Col xs={6} md={8}>
                  <h2>{student.studentPhone}</h2>
                </Col>
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <img
                className="img-thumbnail"
                src={
                  student.profilePic &&
                  student.profilePic !== undefined &&
                  student.profilePic !== "" &&
                  student.profilePic !== null
                    ? `http://localhost:8000/${student.profilePic}`
                    : defaultProfilePic
                }
                alt={student.studentName}
                height="100px"
                width="100px"
              />
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
      )}
    </>
  );
};

export default StudentDash;
