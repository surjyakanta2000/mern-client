import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { getCurrentUser } from "../../services/userService";
import { getSpecTeacher } from "../../services/techService";
import { getClassForTeacher } from "../../services/classService";
import TeacherTab from "./TeacherTab";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";
import defaultProfilePic from "../../images/defaultProfilePic.png";

const TeacherDash = () => {
  const [tech, setTeacher] = useState({});
  const [loader, setLoader] = useState(true);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const user = getCurrentUser();
      const teacherData = await getSpecTeacher(user._id);
      setTeacher(teacherData);
      const classes = await getClassForTeacher(user._id);
      setClasses(classes);
      setLoader(false);
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <div className="model-dash mt-4">
            <Row>
              <Col className="d-flex justify-content-center">
                <h3>Welcome to Teacher Dashboard...</h3>
              </Col>
            </Row>
            <Row>
              <hr></hr>
            </Row>
            <div>
              <Row>
                <Col md={{ span: 2, offset: 0 }} className="text-center">
                  <img
                    className="img-thumbnail text-center mb-3"
                    src={
                      tech.profilePic &&
                      tech.profilePic !== undefined &&
                      tech.profilePic !== "" &&
                      tech.profilePic !== null
                        ? `http://localhost:8000/${tech.profilePic}`
                        : defaultProfilePic
                    }
                    alt={tech.techName}
                    height="100px"
                    width="100px"
                  />
                </Col>
                <Col md={{ span: 5, offset: 0 }}>
                  <Row>
                    <Col xs={6} md={4}>
                      <h3>Name</h3>
                    </Col>
                    <Col xs={6} md={8}>
                      <h3 className="text-uppercase">{tech.techName}</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                      <h4>Email</h4>
                    </Col>
                    <Col xs={6} md={8}>
                      <h4>{tech.techEmail}</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                      <h5>Phone</h5>
                    </Col>
                    <Col xs={6} md={8}>
                      <h5>{tech.techPhone}</h5>
                    </Col>
                  </Row>
                </Col>
                <Col md={{ span: 2, offset: 1 }} className="text-center">
                  <Link
                    className="btn btn-success"
                    style={{ boder: "1px solid white" }}
                    to={`/profile/update/${tech._id}`}
                    title="Edit Profile"
                  >
                    <FontAwesomeIcon
                      style={{ boder: "1px solid white" }}
                      icon={faEdit}
                    />
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="mt-3">
            <TeacherTab tech={tech} classes={classes} />
          </Row>
        </Container>
      )}
    </>
  );
};

export default TeacherDash;
