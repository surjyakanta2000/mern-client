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
          <div className="model-dash">
            <Row>
              <Col className="d-flex justify-content-center">
                <h2
                  style={{
                    color: "#5effe2",
                    textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                  }}
                >
                  Student Dashboard
                </h2>
              </Col>
              <Col className="text-end">
                <Link
                  className="btn btn-success"
                  style={{ boder: "1px solid white" }}
                  to={`/profile/update/${student._id}`}
                  title="Edit Profile"
                >
                  <FontAwesomeIcon
                    style={{ boder: "1px solid white" }}
                    icon={faEdit}
                  />
                </Link>
              </Col>
            </Row>
            <hr style={{ color: "#5effe2" }}></hr>
            <Row>
              <Col xs={12} md={8}>
                <Row>
                  <Col xs={6} md={4}>
                    <h2
                      style={{
                        color: "#5effe2",
                        textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                      }}
                    >
                      Name
                    </h2>
                  </Col>
                  <Col xs={6} md={8}>
                    <h2 className="text-white">{student.studentName}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <h2
                      style={{
                        color: "#5effe2",
                        textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                      }}
                    >
                      Roll.No
                    </h2>
                  </Col>
                  <Col xs={6} md={8}>
                    <h2 className="text-white">{student.studentRoll}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <h2
                      style={{
                        color: "#5effe2",
                        textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
                      }}
                    >
                      Phone No.
                    </h2>
                  </Col>
                  <Col xs={6} md={8}>
                    <h2 className="text-white">{student.studentPhone}</h2>
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
          </div>
          <Row className="mt-3">
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
